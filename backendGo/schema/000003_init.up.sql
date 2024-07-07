CREATE TABLE users (
    id serial not null unique,
    email varchar(255) not null unique,
    password_hash varchar(255) not null,
    checks_available INTEGER DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    is_blocked BOOLEAN DEFAULT FALSE
);

CREATE TABLE checked_address (
    id serial not null unique,
    address varchar(1000) not null,
    title varchar(255),
    description varchar(1000),
    risk_score int,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE TABLE users_list (
    id serial not null unique,
    user_id int references users (id) on delete cascade not null,
    list_id int references checked_address (id) on delete cascade not null
);

CREATE TABLE admins (
    id serial not null unique,
    email_admin varchar(255) not null unique,
    password_hash_admin varchar(255) not null,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    is_blocked BOOLEAN DEFAULT FALSE
);
