
var minutes = 24;
var seconds = 60;
var minutes2;

function timer()
{
    minutes2 = minutes;
    seconds--;
    if(seconds == 0)
    {
        if(minutes == 0){
            window.location = "break.html"
        }
        minutes--;
        minutes2--;
        seconds = 59;
    }
    if(minutes2<10) minutes2 = "0" + minutes2;
    if(seconds<10) seconds = "0" + seconds;
    document.getElementById('title').innerHTML = minutes2+":"+seconds + " | POMODORO";
    document.getElementById('timer').innerHTML = minutes2 + " : " + seconds;
    t = setTimeout("timer();", 1000);
}
function stop()
{
    clearTimeout(t);
}
function restart()
{
    clearTimeout(t);
    minutes = 24;
    minutes2 = 0;
    seconds = 60;
    document.getElementById('timer').innerHTML = "25" + " : " + "00";
}
function nowork()
{
    minutes = 4;
    seconds = 60;
    timer2()
}
function timer2()
{
    minutes2 = minutes;
    seconds--;
    if(seconds == 0)
    {
        if(minutes == 0){
            window.location = "/index.html"
        }
        minutes--;
        minutes2--;
        seconds = 59;
    }
    if(minutes2<10) minutes2 = "0" + minutes2;
    if(seconds<10) seconds = "0" + seconds;
    document.getElementById('title').innerHTML = minutes2+":"+seconds + " | POMODORO";
    document.getElementById('timer').innerHTML = minutes2 + " : " + seconds;
    t = setTimeout("timer();", 1000);
}
function full(){
    document.documentElement.requestFullscreen();
    document.getElementById("text").className = "hidden";
}
function restart2()
{
    clearTimeout(t);
    minutes = 4;
    minutes2 = 0;
    seconds = 60;
    document.getElementById('timer').innerHTML = "05" + " : " + "00";
}




<div id="wufoo-zz0d9yl0o0gx5s"> Fill out my <a href="https://stanislawstask.wufoo.com/forms/zz0d9yl0o0gx5s">online form</a>. </div> <script type="text/javascript"> var zz0d9yl0o0gx5s; (function(d, t) { var s = d.createElement(t), options = { 'userName':'stanislawstask', 'formHash':'zz0d9yl0o0gx5s', 'autoResize':true, 'height':'503', 'async':true, 'host':'wufoo.com', 'header':'show', 'ssl':true }; s.src = ('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { zz0d9yl0o0gx5s = new WufooForm(); zz0d9yl0o0gx5s.initialize(options); zz0d9yl0o0gx5s.display(); } catch (e) { } }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script'); </script>
