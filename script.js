$(document).ready(function () {
    $('#toggleTextFirstIcon').click(function () {
        $('.hideFirstIcon').toggle(500);
        $('.showFirstText').toggle(500);
    });
    $('#toggleSecondIcon').click(function () {
        $('.hideSecondIcon').slideToggle(500);
        $('.showSecondText').slideToggle(500);
    });
    $('#toggleThirdIcon').click(function () {
        $('.hideThirdIcon').toggle(500);
        $('.showThirdText').toggle(500);
    });

    $('#project1').mouseenter(function () {
        $('#projectOne').css({
            'background': 'rgba(255, 255, 255,0.5',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#firstOverlay').toggle(500);
        $('#projectOne').toggle(500);
    });
    $('#project1').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#firstOverlay').fadeToggle(500);
        $('#projectOne').fadeToggle(500);
    });

    $('#project2').mouseenter(function () {
        $('#projectTwo').css({
            'background': 'rgba(255, 255, 255,0.8',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#secondOverlay').fadeToggle(500);
        $('#projectTwo').fadeToggle(500);
    });
    $('#project2').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#secondOverlay').fadeToggle(500);
        $('#projectTwo').fadeToggle(500);;
    });

    $('#project3').mouseenter(function () {
        $('#projectThree').css({
            'background': 'rgba(255, 255, 255,0.7',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': 'black'
        });
        $('#thirdOverlay').fadeToggle(500);
        $('#projectThree').fadeToggle(500);
    });
    $('#project3').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#thirdtOverlay').fadeToggle(500);
        $('#projectThree').fadeToggle(500);
    });

    $('#project4').mouseenter(function () {
        $('#projectFour').css({
            'background': 'rgba(255, 255, 255,0.7',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#fourthOverlay').fadeToggle(500);
        $('#projectFour').fadeToggle(500);
    });
    $('#project4').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#fourthOverlay').fadeToggle(500);
        $('#projectFour').fadeToggle(500);
    });

    $('#project5').mouseenter(function () {
        $('#projectFive').css({
            'background': 'rgba(255, 255, 255,0.8',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#fifthOverlay').fadeToggle(500);
        $('#projectFive').fadeToggle(500);
    });
    $('#project5').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#fifthtOverlay').fadeToggle(500);
        $('#projectFive').fadeToggle(500);
    });

    $('#project6').mouseenter(function () {
        $('#projectSix').css({
            'background': 'rgba(255, 255, 255,0.4 ',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#SixthOverlay').fadeToggle(500);
        $('#projectSix').fadeToggle(500);
    });
    $('#project6').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#sixthOverlay').fadeToggle(500);
        $('#projectSix').fadeToggle(500);
    });

    $('#project7').mouseenter(function () {
        $('#projectSeven').css({
            'background': 'rgba(255, 255, 255,0.7',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#SeventhOverlay').fadeToggle(500);
        $('#projectSeven').fadeToggle(500);
    });
    $('#project7').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#seventhOverlay').fadeToggle(500);
        $('#projectSeven').fadeToggle(500);
    });

    $('#project8').mouseenter(function () {
        $('#projectEight').css({
            'background': 'rgba(255, 255, 255,0.7',
            'border': '10px solid #fff',
            'font-weight': '900',
            'font-size': '20px',
            'color': '#000092'
        });
        $('#eighthOverlay').fadeToggle(500);
        $('#projectEight').fadeToggle(500);
    });
    $('#project8').mouseleave(function () {
        $(this).css('background', 'transparent')
        $('#eighthOverlay').fadeToggle(500);
        $('#projectEight').fadeToggle(500);
    });


    $('#messageForm').submit(function (event) {
        event.preventDefault();
        var userName = $('#nameInput').val();
        var userEmail = $('#emailInput').val();
        var message = $('#messageInput').val();


        $('.mailchimp').fadeToggle(1000);
        $('.form-section').fadeToggle(1000);
        $('body').css('opacity', '0.5')




        if (userName === '') {
            alert('Please enter your user name');
        } else if (userEmail === '') {
            alert('Enter your email address too')
        } else if (message === '') {
            alert('Input your message below')
        } else if (message.length <= 10) {
            alert('Please enter at least one line of text')
        } else {
            alert('Hello ' + userName + ' , we have received your message and ' + ' we will get back to you in a few. ' + ' Thank you for contacting us ' + userName);
        }



        //reset form after submission
        document.getElementById('messageForm').reset();

    })



});