$(document).ready(function(){

    $('#openNav').click(function () {
        if ($("#mySidenav").width() == "250") {
            $('#closeBtn').click();
        } else {
            $("#mySidenav").width("250px");
            $("#main").css("margin-left", "250px");
        }
    })
    
    $('#closeBtn').click(function () {
        $("#mySidenav").width("0px");
        $("#main").css("margin-left", "0px");
    })


    $("a[href^='#']").click(function(e){
        let linkHref = $(e.target).attr('href');
        let sectionOffset = $(linkHref).offset().top;
        $('html,body').animate({scrollTop:sectionOffset} , 500);
    })

    $('#loading .sk-chase').fadeOut( 1000 , function(){
        $('#loading').fadeOut(1000 , function(){
            $('#loading').remove();
            $('body').css('overflow' , 'auto')
        })
    });

    
    function countdown() {
        let countDownDate = new Date("Nov 11, 2022 7:00 am").getTime();

        let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = "<h3>" + days + " D" + "</h3>";
        document.getElementById("hours").innerHTML = "<h3>" + hours + " h" + "</h3>";
        document.getElementById("minutes").innerHTML = "<h3>" + minutes + " m" + "</h3>";
        document.getElementById("seconds").innerHTML = "<h3>" + seconds + " s" + "</h3>";

        if (distance < 0) 
        {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }, 1000);
    }
    countdown();



    $(document).ready(function () {
        $("#singers div:first").css("display", "block");
        $("#singers h3").click(function () {
            $(this).next().slideToggle(500);
            $("#singers div").not($(this).next()).slideUp(500);
        });
    });


    $(window).scroll(function(){
        let aboutOffset = $('#singers').offset().top;
        let windowScroll = $(window).scrollTop();
        if( windowScroll > aboutOffset - 50)
        {
            $('#btnUp').fadeIn(500)
        }
        else
        {
            $('#btnUp').fadeOut()
        }
    })


    $('#btnUp').click(function(){
        $('html,body').animate({scrollTop:0} , 1000);
    })


    $(function () {
        let values = 100;
        $("textarea").keyup(function () {
            let length = $(this).val().length;
            let character = values - length;
            
            if (character <= 0) {
                $("#char").text("your available character finished");
            } 
            else {
                $("#char").text(character);
            }
        });
    });
})