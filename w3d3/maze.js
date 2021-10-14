"use strict"

$(document).ready(function(){

var start=false;

    $("#start").click(function(){
        start=true;
        $("#status").text('You still wining !');
        $(".boundary").mousemove(function(){ lose(); });
        if($('.boundary').hasClass('youlose')){
            $('.boundary').removeClass('youlose');
        }
    });
    $("#end").mousemove(function(){
        if(start){
            win();
        }
        else if((start==false)&&($('.boundary').hasClass('youlose'))){
            alert("sorry you lose!");
        }

    });
    function lose(){
        if(start){
            start = false;
            $(".boundary").addClass('youlose');
            $("#status").text('You Lose !');
        }
    }
    function win(){
        alert("you win!");
        $("#status").text('You win !');
        start = false;
    }


    
});