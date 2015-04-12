
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var query = require('./routes/query.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
// app.post('/query', query.search);

app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

// MongoDB connection
var url = 'mongodb://localhost:27017/out-house';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});
