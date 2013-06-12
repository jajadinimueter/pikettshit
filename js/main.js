var Timer = function(cb, scope) {
    var _start = null;
    var _stopped = false;

    var incr = function() {
        cb.call(scope, new Date().getTime() - _start);
        if ( !_stopped) {
            setTimeout(incr, 1000);
        }
    };

    this.stop = function() {
        _stopped = true;
    };

    this.start = function() {
        _start = new Date().getTime();
        incr();
    };
};