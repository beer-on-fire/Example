const eventEmitter = require('events')

var life = new eventEmitter()

function kick(who) {
    console.log('kick ' + who);
}

function nick(who) {
    console.log('nick ' + who);
}

life.on('go',function(who) {
    console.log('fuck ' + who);
})
    
life.on('go',function(who) {
    console.log('suck ' + who);
})

life.on('go',kick)
life.on('come',nick)

// life.removeListener('go',kick)
life.removeAllListeners('come')

life.emit('go','you')
life.emit('come','you')

console.log(life.listenerCount('go'));
