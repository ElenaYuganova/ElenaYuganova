$(document).ready(function() {
    

    $('#menu').click(function(){
        $('#header').slideToggle(300);      
        return false;
    });

   /* $('#humb_button').click(function(){
        if (isMobile())
            $('#one').slideToggle(1000);      
        return false;
    });

    $('#humb_button_2').click(function(){
        if (isMobile())
            $('#two').slideToggle(1000);      
        return false;
    });

    $('#humb_button_3').click(function(){
        if (isMobile())
            $('#three').slideToggle(1000);      
        return false;
    });

    $('#humb_button_4').click(function(){
        if (isMobile())
            $('#four_2').slideToggle(1000);      
        return false;
    });*/

    $('#slider').on('click', 'a', function(e) { 
        e.preventDefault(); 
        var id = $(this).attr('href'); 
        // toogle
        $('#one').removeClass('show');
        $('#two').removeClass('show');
        $('#three').removeClass('show');
        $('#four').removeClass('show');
        if ($(window).width() <= 640)
            $(id).addClass('show');      
        // scroll
        var top = $(id).offset().top-160; 
        $('html, body').animate({scrollTop: top}, 1500); 
    });
});


    var minus = document.getElementById("minus");
    var plus = document.getElementById("plus");
    var res = document.getElementById("res");

    let count = 1;

    minus.addEventListener('click', function (){
        if(count <= 1) {
            return;
        }
        count--;
        render();
    });

    plus.addEventListener('click', function (){
        count++;
        render();
    });

    render();
    function render() {
        res.innerText = count.toString();
    }

