SELECT c.id as comment_id, content, profile_pic, username, title as main_title, date_created FROM theworkout_comments c
JOIN theworkout_users u on u.id = c.users_id
WHERE c.id = 28;