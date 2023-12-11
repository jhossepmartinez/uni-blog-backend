CREATE TABLE posts(
    id serial primary key,
    title varchar(255) not null,
    summary varchar(255),
    content varchar(2000) not null
);
