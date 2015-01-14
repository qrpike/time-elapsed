# Time Elapsed
Easily measure the time that has elapsed.

  `npm install time-elapsed`

# To use:

    // Require the Module:
    var TimeElapsed = require('time-elapsed');
    
    // Create new Instance of Time Elapsed:
    var timer = new TimeElapsed();
    
    // Wait a duration of time:
    setTimeout(function(){
    
      // See how many Milliseconds it has been:
      console.log('Time elapsed:', timer.timeElapsed());
      
    }, 500);

