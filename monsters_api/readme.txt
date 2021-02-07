Initiate a repository with dependencies
npm init -y
npm i nodemon --save-dev
npm i express body-parser pg --save


Install the DB
https://postgresapp.com/downloads.html donwload postgres app <- ON MAC
https://www.postgresql.org/download/windows/
Installer https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=437

super user pass : midori
port : 5432

install that in a different directory than Program Files. i.e. C:\PostgreSQL\

to start the postgres service on windows
net start postgresql-x64-10
net stop postgresql-x64-10

see full tutorial here (https://gist.github.com/15Dkatz/321e83c4bdd7b78c36884ce92db26d38)

another command that can be useful
"configure": "sh ./bin/configure_db.sh"

Create a PATH
sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
Don’t forget to close the Terminal window and open a new one for changes to take effect.
Source(https://gist.github.com/15Dkatz/321e83c4bdd7b78c36884ce92db26d38)

    "psql --help and psql -U postgres to work properly.
        vincentpace"



On MAC
psql --help
psql -U postgres


create a dabase
createdb -U postgres testdb
psql testdb -U postgres
=
CREATE TABLE test(name character varying(50), faveNumber int);


createdb -U postgres creaturesdb
psql -U postgres monstersdb

create a user
CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password';

create a bin folder in the directory of your project and inside it create another folder called sql 
place the .sql file inside the sql folder
also place the configuredb.sh file inside the sql folder

go to package.json and insert the line below under scripts
"configure": "./bin/configuredb.sh"

inside condiguredb.sh set

psql -U node_user monstersdb < ./bin/sql/monsters.sql


go to bin folder and run the following command 
chmod +x configuredb.sh

comeback to the root directory and type
npm run configure

after that the tables will be created. 
psql -U node_user monstersdb;
\d 

on postgreapp > Server Settings > HBA File > Show you will get the path of a file
/Users/tsaibrito/Library/Application\ Support/Postgres/var-13/pg_hba.conf

make sure to change the first TRUST type to md5, by the end of the file. like

# "local" is for Unix domain socket connections only
local   all             all                                     md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5


