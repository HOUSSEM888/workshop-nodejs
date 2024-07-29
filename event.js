// Import the EventEmitter class from the 'events' module
const EventEmitter = require('node:events');

// Create a new instance of EventEmitter
const myEvent = new EventEmitter();

// Define a listener function that will handle the 'sendMessage' event
const listener = (data) => {
    console.log('data', data);
};

// Register the listener function for the 'sendMessage' event
myEvent.on('sendMessage', listener);

// Emit the 'sendMessage' event with the data "hello world"
myEvent.emit('sendMessage', "hello world");

// Remove the listener function for the 'sendMessage' event
myEvent.removeListener('sendMessage', listener);

// Emit the 'sendMessage' event again, but this time there will be no output
// because the listener has been removed
myEvent.emit('sendMessage', "hello world");