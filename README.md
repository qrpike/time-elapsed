# Time Elapsed
Easily measure the time that has elapsed.

  `npm install time-elapsed`

# To use:

    var TimeElapsed = require('time-elapsed');
    var timer = new TimeElapsed();
    setTimeout(function(){
      console.log('Time elapsed:', timer.timeElapsed());
    }, 500);

