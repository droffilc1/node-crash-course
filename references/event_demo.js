const EventEmitter = require('events')

// Create class
class MyEmmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmmitter()

// Event listener
myEmitter.on('event', () => console.log('Event fired!'))

// Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')