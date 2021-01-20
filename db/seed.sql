DROP TABLE IF EXISTS theworkout_comments;
DROP TABLE IF EXISTS theworkout_user_videos;
DROP TABLE IF EXISTS theworkout_home_video;
DROP TABLE IF EXISTS theworkout_users;

CREATE TABLE theworkout_users (
id SERIAL PRIMARY key,
email VARCHAR(100),
username VARCHAR(50),
password VARCHAR(500),
profile_pic text
);

CREATE TABLE theworkout_user_videos(
id SERIAL PRIMARY KEY,
users_id integer references theworkout_users(id),
video VARCHAR(500)
);

CREATE TABLE theworkout_comments(
id SERIAL PRIMARY KEY,
content text,
users_id INTEGER references theworkout_users(id),
date_created timestamp,
user_videos_id INTEGER references theworkout_user_videos(id)
);

CREATE TABLE theworkout_home_video(
id SERIAL PRIMARY KEY,
video VARCHAR(500),
users_videos_id INTEGER references theworkout_user_videos(id)
);