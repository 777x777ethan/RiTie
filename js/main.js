var run=1;
function block_show(){
    run=1;
    document.getElementById("main_block").style.visibility="hidden";
    document.getElementById("choose_block").style.visibility="visible";
    var body=document.getElementById("body");
    var styles=window.getComputedStyle(body);
    var color=styles.getPropertyValue("background-Color");
    var i=parseInt(color[4]+color[5]+color[6]);
    var bodyId=window.setInterval(function(){
        if(i<=60 || run==0){
            window.clearInterval(bodyId);
            return;
        }
        i--;
        body.style.backgroundColor="rgb("+i+","+i+","+i+")";
    },5);
    var type_width=document.getElementsByClassName("c_type");
    var x=0;
    var type_widthId=window.setInterval(function(){
        if(x>=120 || run==0){
            var type_margin=document.getElementsByClassName("c_type");
            var margins=window.getComputedStyle(type_margin[1]);
            var margin=margins.getPropertyValue("margin");
            var m=parseInt(margin[5]+margin[6]);
            if(m<=10){
                for(var i=0;i < type_margin.length;i++){
                    type_margin[i].style.margin="20px 10px";
                }
            }
            window.clearInterval(type_widthId);
            return;
        }
        x++;
        for(var i=0;i < type_width.length;i++){
            type_width[i].style.width=x+"px";
        }
    },1);
    
}

function block_close(){
    run=0;
    document.getElementById("choose_block").style.visibility="hidden";
    document.getElementById("main_block").style.visibility="visible";
    var body=document.getElementById("body");
    var styles=window.getComputedStyle(body);
    var color=styles.getPropertyValue("background-Color");
    var i=parseInt(color[4]+color[5]+color[6]);
    var bodyId=window.setInterval(function(){
        if(i>=253|| run==1){
            var type_margin=document.getElementsByClassName("c_type");
            for(var x=0;x < type_margin.length;x++){
                type_margin[x].style.margin="20px auto";
            }
            window.clearInterval(bodyId);
            return;
        }
        i++;
        body.style.backgroundColor="rgb("+i+","+i+","+i+")";
    },5);

}