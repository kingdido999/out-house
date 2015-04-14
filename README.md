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
- [ ] choose miles or kilometers for radius (Jingjing Zhang)
- [ ] choose transportation method (Matthew)
- [ ] start address autocomplete (Qifan)
- [ ] beautify all web pages (Joanna)
- [x] create a signup page and a login page (Desmond)
- [x] MongoDB (Desmond)
- [x] store user information in database (Desmond)

#### Later
- [ ] allow logged-in user to rate the bathroom
- [ ] store bathroom ratings in database

## Database Installation

Make sure to install [mongodb](http://docs.mongodb.org/manual/installation/) for your OS.

Install node packages:

`npm install`

Create a data path for mongodb (OSX and Linux):

`cd`

`sudo mkdir -p /data/db`

`sudo chown -R `` `id -u` `` /data/db`

Boot up a MongoDB server:

`mongod`

You should see the mongod process start up and something like:

`Tue Mar 31 10:36:10.976 [initandlisten] waiting for connections on port 27017`

Now, open up a new terminal and run the server again:

`nodemon app.js`

[Documentation](https://github.com/mongodb/node-mongodb-native)

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

## Notes

We'll use **Node + Express + Bootstrap** to build our project.

#### Views

Notice files ending with `.jade` in `views` folder, [jade](http://jade-lang.com/) is a template language that outputs html code.

The documentation for Bootstrap could be found [here](http://getbootstrap.com/css/).

#### Git

Git is one of the most popular version control systems. [Here](https://try.github.io/levels/1/challenges/1) is a interactive tutorial.

The most basic Git workflow is like this (after you have cloned a repo on your machine):

1. `git pull` to pull the latest code from the remote server
2. Make some modification.
3. `git status` to check what've been changed
4. `git add .` to stage all changes
5. `git commit -m "your commit message"` to commit the change
6. `git push origin master` to push your change to the master branch of a remote server called `origin`

If you want to (and you should!) learn more about Git, check them out:

- http://rogerdudler.github.io/git-guide/
- https://www.atlassian.com/git/tutorials/

#### Google Maps API

- [supported place types](https://developers.google.com/places/supported_types)
- [directions api](https://developers.google.com/maps/documentation/directions/)
