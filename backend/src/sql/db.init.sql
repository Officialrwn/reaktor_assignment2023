CREATE TABLE IF NOT EXISTS pilots (
    pilotid varchar primary key not null,
    firstname varchar default null,
    lastname varchar default null,
    phone varchar default null,
    date  timestamp with time zone default current_timestamp,
    email varchar default null,
    distance numeric default 100,
		posx numeric default 500,
		posy numeric default 500
);