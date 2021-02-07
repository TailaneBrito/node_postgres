#!/bin/bash
export PGPASSWORD='node_password'

database="monstersdb"

echo "Configuring database $database"

dropbd -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin/sql/monsters.sql

echo "$database configured"
