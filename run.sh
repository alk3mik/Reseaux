#!/bin/bash

#sudo npm install -g json-server;
npm install -g json-server;
json-server --watch db.json -d 250;
#json-server --watch ~/input/db.json -d 250;
