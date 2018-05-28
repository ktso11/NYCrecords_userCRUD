
create table USERS (
    ID serial,
    USERNAME varchar(100) NOT NULL,
    FIRSTNAME varchar(100) NOT NULL,
    LASTNAME varchar(100) NOT NULL,
    EMAIL varchar(100) NOT NULL,
    FAV_NOTICES integer[]

);