define(function(require,exports,module){
    var $ = require('jquery');
    var txt = require('./hello');
    var txt2 = require('./hello');
    $(function(){
        setTimeout(go,1000);
        function go(){
            var maxWidth = $(window).width();
            var maxHeight = $(window).height();
            var x = parseInt(Math.random()*maxWidth);
            var y = parseInt(Math.random()*maxHeight);
            var target = $('#greet');
            target.text(txt);
            target.css({
                top:y+'px',
                left:x+'px'
            });
            setTimeout(go,1000);
        }
    });
});