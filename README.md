# REST-API-NODEJS-EXPRESS

This a repo for 'How to build a REST API with Node js & Express'

References:
YOUTUBE: https://www.youtube.com/watch?v=pKd0Rpw7O48
EXPRESS: https://expressjs.com/en/4x/api.html
JOI: https://joi.dev/api/?v=17.4.2

To create project:
        CMD:npm init --yes
        CMD:npm install express
        create a file 'index.js'


To run server:
        CMD:npm start


To update server automatically when changes are made:
        CMD:npm install --save-dev nodemon
Update file 'package.json' as
        "scripts":{
          "start":"nodemon index.js"
        }
