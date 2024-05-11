create TABLE persons (
    email SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    isActivated VARCHAR(255) NOT NULL,
    activateLink VARCHAR(255)
);
