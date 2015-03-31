# Out House

## Todo

#### Finished
- [x] form submit
- [x] address geocoding
- [x] display places using address and radius
- [x] support gps location
- [x] use appropriate place types for searching
- [x] choose from one of the bathrooms as destination
- [x] get directions

#### Current
- [ ] choose miles or kilometers for radius
- [ ] choose transportation method
- [ ] start address autocomplete
- [ ] create a signup page (username, password, gender, address, etc.)
- [ ] create a login page (Desmond)
- [x] MongoDB (Desmond)
- [ ] store user information in database (Desmond)

#### Later
- [ ] allow logged-in user to rate the bathroom
- [ ] store bathroom ratings in database

## Installation

First, make sure you have [git](http://git-scm.com/downloads) and [node](https://nodejs.org/) installed.

Then clone the project:

`git clone https://github.com/kingdido999/out-house`

`cd out-house`

Install all node packages we need (it reads dependencies from `package.json`):

`npm install`

`npm install -g nodemon` (nodemon automatically detect file changes so that you don't have to restart the server each time you modify a file, -g means install this package globally)

Try `sudo npm install -g nodemon` if you were asked to run this command as root/Administrator.

Run node server via nodemon:

`nodemon app.js`

You should see something like this:

```
19 Mar 21:33:12 - [nodemon] v1.3.7
19 Mar 21:33:12 - [nodemon] to restart at any time, enter `rs`
19 Mar 21:33:12 - [nodemon] watching: *.*
19 Mar 21:33:12 - [nodemon] starting `node app.js`
Express server listening on port 3000 in development mode
```

Open your web browser, type in address `localhost:3000`

Now you have our project running!

## Database Installation

`npm install` to make sure you have mongodb installed.

Create a new directory `/data` for MogoDB data path:

`cd`

`sudo mkdir /data`

Boot up a MongoDB server:

`sudo mongod --dbpath=/data --port 27017`

You should see the mongod process start up and something like:

`Tue Mar 31 10:36:10.976 [initandlisten] waiting for connections on port 27017`

Now open up a new terminal, go to the project folder, run node server and you'll see `Connected correctly to server`.

[Documentation](https://github.com/mongodb/node-mongodb-native)

## Notes

We'll use **Node + Express + Bootstrap** to build our project.

#### Views

Notice files ending with `.jade` in `views` folder, [jade](http://jade-lang.com/) is a template language that outputs html code.

The documentation for Bootstrap could be found [here](http://getbootstrap.com/css/).

#### Git

Git is one of the most popular version control systems. [Here](https://try.github.io/levels/1/challenges/1) is a interactive tutorial.

The most basic Git workflow is like this (after you have cloned a repo on your machine):

1. Make some modification.
2. `git status` to check what've been changed
3. `git add .` to stage all changes
4. `git commit -m "your commit message"` to commit the change
5. `git push origin master` to push your change to the master branch of a remote server called `origin`

Use `git pull` to pull the latest code from the remote server.

If you want to (and you should!) learn more about Git, check them out:

- http://rogerdudler.github.io/git-guide/
- https://www.atlassian.com/git/tutorials/

#### Google Maps API

- [supported place types](https://developers.google.com/places/supported_types)
- [directions api](https://developers.google.com/maps/documentation/directions/)