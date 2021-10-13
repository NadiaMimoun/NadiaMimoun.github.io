"use strict"


// $(document).ready(function(){
//      function bigercircle(){
//         $("#circle").css("width", "+=10");
//         $("#circle").css("height", "+=10");
//     }
//      setInterval(bigercircle,1000);
//      $("#circle").click(function(){
//         $("#circle").remove()
//       });

// }
    
//   );


 
$(function() { 
    $('#start').on('click', function() {
        let Number = parseInt($('#Number').val());
        while(Number > 0) {
            Circle();
            Number--;
        }
        $('.circle1').css({
            "width": parseInt($('#width').val()),
            "height": parseInt($('#width').val())
        });
    });  
    function Circle() {
       
       

        let Element = $("<div class='circle1'><div>");
        Element.css("background-color", getRandomColor);
        Element.css("right", Math.floor($('#circle').width() * Math.random()));
        Element.appendTo("#circle");

        let temps = setInterval(grand, parseInt($('#Grow-Rate').val()), Element);
        Element.click(() => {
            Element.remove();
            clearInterval(temps);
        });
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function grand(element) {
        element.css('height', element.height() + parseInt($('#Growth-Amount').val()));
        element.css('width', element.width() + parseInt($('#Growth-Amount').val()));
    }

});

