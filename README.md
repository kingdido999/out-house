# Out House

## Installation

First, make sure you have [git](http://git-scm.com/downloads) and [node](https://nodejs.org/) installed.

Then clone the project:

`git clone https://github.com/kingdido999/out-house`

`cd out-house`

Install all node packages we need (it reads dependencies from `package.json`):

`npm install`

`npm install -g nodemon` (automatically detect file changes)

Running node server via nodemon:

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

## Todo

- [x] form submit
- [x] address geocoding
- [x] display places using address and radius
- [ ] support gps location
- [ ] use correct place types for searching
- [ ] choose from one of the bathrooms as destination
- [ ] choose transportation method
- [ ] get directions

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