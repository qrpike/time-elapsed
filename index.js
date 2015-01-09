


function TimeElapsed(){
    this.time = new Date();   
}

TimeElapsed.prototype.start = function(){
    this.time = new Date();
}

TimeElapsed.prototype.timeElapsed = function(){
    this.end = new Date();
    this.duration = this.end - this.time;
    return this.duration;
}



module.exports = TimeElapsed;