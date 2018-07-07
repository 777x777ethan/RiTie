var run=1;
function block_show(){
    run=1;
    document.getElementById("main_block").style.visibility="hidden";
    document.getElementById("choose_block").style.visibility="visible";
    var body=document.getElementById("body");
    var i=253
    var bodyId=window.setInterval(function(){
        if(i<=60 || run==0){
            window.clearInterval(bodyId);
            return;
        }
        i--;
        body.style.backgroundColor="rgb("+i+","+i+","+i+")";
    },5);
}
function block_close(){
    run=0;
    document.getElementById("choose_block").style.visibility="hidden";
    document.getElementById("main_block").style.visibility="visible";
    var body=document.getElementById("body");
    var i=60
    var bodyId=window.setInterval(function(){
        if(i>=253|| run==1){
            window.clearInterval(bodyId);
            return;
        }
        i++;
        body.style.backgroundColor="rgb("+i+","+i+","+i+")";
    },5);
}