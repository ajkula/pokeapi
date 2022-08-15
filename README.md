# Izberg PokeApi technical Test

Thank you for your time reviewing my test,\
please be patient and consider the fact I've been doing Java/Spring\
work in my actual company for the last year and I haven't really worked on full\
front project since a year and half. So this code is me grinding **hard** to make something OK

## What I learned

It was nice to see ***redux-persist***.
I had a few struggle to find out the right configuration since their documentation\
seemed a bit outdated.

## Trade-off
Performance-wise the code isn't so great and wouldn't fit for a huge app.\
It's a trade off that I picked to make the persist part of the store easier in parted reducer thus enforcing a few \
cross-arrays finds operations.
For that reason I preferred to use the ```Array.prototype.find.apply(...)``` method.\

## My personal long time favorite

I love to use ***[Async from Caolan McMahon](https://caolan.github.io/async/v3/)*** which has always been great regarding memory footprint and execution speedany ***Nodejs*** or front-end projects. 
It's always been great for concurrency control flow...

*Here's an exemple:*
```javascript
async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
], function(err, results) {
    console.log(results);
    // results is equal to ['one','two'] even though
    // the second function had a shorter timeout.
});
```

I used [Async.queue](https://caolan.github.io/async/v3/docs.html#queue) a lot too with ***Nodejs*** on tasks like generating statistics, etc...
*Exemple from the doc again:*

```javascript
// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);

// assign a callback
q.drain(function() {
    console.log('all items have been processed');
});
// or await the end
await q.drain()

// assign an error callback
q.error(function(err, task) {
    console.error('task experienced an error');
});

// add some items to the queue
q.push({name: 'foo'}, function(err) {
    console.log('finished processing foo');
});
// callback is optional
q.push({name: 'bar'});

// add some items to the queue (batch-wise)
q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('finished processing item');
});

// add some items to the front of the queue
q.unshift({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});
```


# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).\
To learn React, check out the [React documentation](https://reactjs.org/).
