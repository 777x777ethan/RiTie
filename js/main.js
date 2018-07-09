function getElementById_Value(id,type){
    var ids=document.getElementById(id);
    var styles=window.getComputedStyle(ids);
    return(styles.getPropertyValue(type));
}
function getElementByClass_Value(classes,type){
    var classs=document.getElementsByClassName(classes);
    var styles=window.getComputedStyle(classs[0]);
    return(styles.getPropertyValue(type));
}
var run=1;
function block_show(){
    run=1;
    document.getElementById("cblock_type").style.visibility="visible";
    document.getElementById("main_block").style.visibility="hidden";
    document.getElementById("choose_block").style.visibility="visible";
    var color=getElementById_Value("body","background-Color");
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
            var margin=getElementByClass_Value("c_type","margin");
            var m=parseInt(margin[5]+margin[6]);
            if(m<=10){
                for(var i=0;i < type_margin.length;i++){
                    type_margin[i].style.margin="20px 10px";
                }
            }
            window.clearInterval(type_widthId);
            return;
        }
        x=x+2;
        for(var i=0;i < type_width.length;i++){
            type_width[i].style.width=x+"px";
        }
    },1);
    
}

function block_close(){
    run=0;
    var type_width=document.getElementsByClassName("c_type");
    for(var h=0;h < type_width.length;h++){
        type_width[h].style.height=60+"px";
    }
    document.getElementById("choose_block").style.visibility="hidden";
    document.getElementById("main_block").style.visibility="visible";
    var color=getElementById_Value("body","background-Color");
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

function c_type_act(act){
    var bodywidth=parseInt(getElementById_Value("cblock_type","width"));
    var bodyheight=parseInt(getElementById_Value("cblock_type","height"));
    var actid=document.getElementById(act.id);
    var x=parseInt(getElementByClass_Value("c_type","width"));
    var y=parseInt(getElementByClass_Value("c_type","height"));
    var actidtime=window.setInterval(function(){
        if(x>=bodywidth||y>=bodyheight|| run==0){
            document.getElementById("cblock_type").style.visibility="hidden";
            window.clearInterval(actidtime);
            return;
        }
        x=x+3;
        y=y+4;
        actid.style.height= y+"px";
        actid.style.width= x+"px";
    },1)
}
