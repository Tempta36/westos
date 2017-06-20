CREATE TABLE users(
  user_id int(11) NOT NULL AUTO_INCREMENT,
  user_name varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  user_password_hash varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY (user_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data';