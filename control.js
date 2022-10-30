'use strict';

const events = require('./event');

events.on('turn_on_light', handleDetector);

function handleDetector() {
  console.log('Detector: Movment detected!')
}

events.on('movment', handleGateKeeper);

function handleGateKeeper() {
  console.log('GateKeeper: I\'m going to open the gate!')
  console.log('GateKeeper: I\'m going to turn on the lights!')

  events.emit('turn_on_light');
  events.emit('open_gate');

}

events.on('open_gate', handleGate);

function handleGate() {
  console.log('Gate: Gate is open!')
}

setInterval(() => {
  events.emit('movment')
}, 2000);