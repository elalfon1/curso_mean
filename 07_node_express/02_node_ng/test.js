// A dummy function that callback after 1 second (simulating some processing work)
function dummy(callback) {
    setTimeout(function() {
        // After 1 second, we callback with a result
        callback('dumb result')
    }, 1000);
}

// Incorrect version
for (var i = 0; i < 10; i++) {
    dummy(function(response) {
        console.log("i = " + this.i + " , response = " + response);
    }.bind({ i: i }))
}