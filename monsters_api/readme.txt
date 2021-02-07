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



createdb -U postgres monstersdb