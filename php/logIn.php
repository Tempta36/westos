<?php
header("context-type:text/html;charset=utf8");
require_once("../_installation/db_ini.php");

class Login
{	
	private $db_connection = null;
	public $errors = array();
	public $messages = array();
	public $tmp=array();

	public function __construct()
	{
		session_start();
		$this->tmp[]='session start';
		if(isset($_GET['logout'])){
			$this->doLogout();
		}
		elseif(isset($_POST["login"])){
			$this->dologinWithPostData(); 
			$this->tmp[]='dologinWithPostData';
		}
		$this->tmp[]='__construct end';
	}
	private function dologinWithPostData()
	{
		if(empty($_POST['user_name'])){
			$this->errors[] = "Username field was empty.";
		}elseif (empty($_POST['user_password'])) {
			$this->errors[] = "Password field was empty.";
		}elseif (!empty($_POST['user_name']) && !empty($_POST['user_password'])) {
			//建立与mysql数据库服务器的连接
			$this->db_connection = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
			$this->tmp[]='conneting database of login is success';
			//数据库输出编码
			if(!$this->db_connection->set_charset("utf8")){
				$this->errors[]=$this->db_connection->error;
				$this->tmp[]='not set charset utf8';
			}

			//上次连接成功
			if(!$this->db_connection->connect_errno){
				//将表单提交的用户名进行特殊字符转义
				$user_name = $this->db_connection->real_escape_string($_POST['user_name']);
				$this->tmp[]=$user_name;

				//定义需要在数据库中查找与用户名相同的user_name和user_password
				$sql="SELECT user_name,user_password_hash
					  FROM DB_NAME
					  WHERE user_name='".$user_name."';";

				//在数据库中查询	  
				$result_of_login_check=$this->db_connection->query($sql);
				$this->tmp[]=$result_of_login_check;

				//数据库匹配到唯一的结果集
				if($result_of_login_check->num_rows == 1){

					//存放结果集中当前行的数据
					$result_row=$result_of_login_check->fetch_object();

					//校验密码是否和哈希值匹配
					if(password_verify($_POST['user_password'],$result_row->user_password_hash)){
						$_SESSION['user_name']=$result_row->user_name;
						$_SESSION['user_login_status']=1;
					}else{
						$this->errors[]='Wrong password.Try again.';
					}
				}else{
					$this->errors[]='This user does not exits.';
				}	  
			}else{
				$this->errors[]='Database connection problem.';
			}
		}
	}


	public function doLogout()
	{
		$_SESSION=array();
		session_destroy();
		$this->massages[]='You have been logged out';
	}

	public function isUserLoggedIn()
	{
		if(isset($_SESSION['user_login_status']) AND $_SESSION['user_login_status'] ==  1){
			return true;
		}
		return false;
	}

}

$login = new Login();
var_dump($login->tmp);
if($login->isUserLoggedIn() == true){
	echo "<script>alert('you have been logged in.');</script>";
}else{

}
?>