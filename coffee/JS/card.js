$(document).ready(function() {
    $('#slider').on('click', 'a', function(e) { 
        e.preventDefault(); 
        var id = $(this).attr('href'); 
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

