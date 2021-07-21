const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

for (let i = 0; i < 15; i += 1) {
  eventEmitter.on('event', () => {
    console.log(`event ${i}`);
  });
}

eventEmitter.emit('event');
