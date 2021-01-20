select uv.id as user_videos_id, title, video, username as author_username from theworkout_user_videos uv
join theworkout_users u on u.id = uv.users_id
where lower(title) like title