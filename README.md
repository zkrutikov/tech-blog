# TechBlog

## Description 

A simple techblog app that lets you create an account, create posts, edit/delete posts, and comment on other posts. 

## Table of Contents
* [Technologies](#technologies)
* [Usage](#usage)
* [Licenses](#licenses)


## Technologies

* Javascript
* Node.js
* Express.js
* MySQL
* Handlebars 

## Usage 

Setup/Installation
* Download and install Node JS.
* Open the terminal and install the dependencies by running `npm i`. 
* Open MySQL by typing in `mysql -u root -p` and enter your password when prompted.
* Run `source db/schema.sql` to create the database, followed by `exit` to exit mysql.
* Open `.env.EXAMPLE`, fill in your password, and change the name of the file to `.env`. 
* Seed the database in terminal by running `npm run seed`.
Startup
* Once you've completed setup, run `node server` from root to start the application. 
* Go to `http://localhost:3001/` in a browser. 
* Create an account, and from there you can create a post, view it from the dashboard, and view other user posts and leave comments. 

## Licenses
MIT