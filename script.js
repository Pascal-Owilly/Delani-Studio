$(document).ready(function(){
   $('#toggleTextFirstIcon').click(function(){
       $('.hideFirstIcon').toggle(500);
       $('.showFirstText').toggle(500);
   });
   $('#toggleSecondIcon').click(function(){
       $('.hideSecondIcon').slideToggle(500);
       $('.showSecondText').slideToggle(500);
   });
   $('#toggleThirdIcon').click(function(){
       $('.hideThirdIcon').toggle(500);
       $('.showThirdText').toggle(500);
   });

   $('#project1').mouseenter(function(){
       $('#projectOne').css({ 'background': 'rgba(255, 255, 255,0.5', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
       $('#firstOverlay').toggle(500);
       $('#projectOne').toggle(500);
   });
   $('#project1').mouseleave(function(){
       $(this).css('background', 'transparent')
    $('#firstOverlay').fadeToggle(500); 
    $('#projectOne').fadeToggle(500);
});

$('#project2').mouseenter(function(){
    $('#projectTwo').css({ 'background': 'rgba(255, 255, 255,0.8', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
    $('#secondOverlay').fadeToggle(500);
    $('#projectTwo').fadeToggle(500);
});
$('#project2').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#secondOverlay').fadeToggle(500);
 $('#projectTwo').fadeToggle(500);;
});

$('#project3').mouseenter(function(){
    $('#projectThree').css({ 'background': 'rgba(255, 255, 255,0.7', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'black'}) ;
    $('#thirdOverlay').fadeToggle(500);
    $('#projectThree').fadeToggle(500);
});
$('#project3').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#thirdtOverlay').fadeToggle(500);
 $('#projectThree').fadeToggle(500);
});

$('#project4').mouseenter(function(){
    $('#projectFour').css({ 'background': 'rgba(255, 255, 255,0.7', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
    $('#fourthOverlay').fadeToggle(500);
    $('#projectFour').fadeToggle(500);
});
$('#project4').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#fourthOverlay').fadeToggle(500);
 $('#projectFour').fadeToggle(500);
});

$('#project5').mouseenter(function(){
    $('#projectFive').css({ 'background': 'rgba(255, 255, 255,0.8', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
    $('#fifthOverlay').fadeToggle(500);
    $('#projectFive').fadeToggle(500);
});
$('#project5').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#fifthtOverlay').fadeToggle(500); 
 $('#projectFive').fadeToggle(500);
});

$('#project6').mouseenter(function(){
    $('#projectSix').css({ 'background': 'rgba(255, 255, 255,0.4 ', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
    $('#SixthOverlay').fadeToggle(500);
    $('#projectSix').fadeToggle(500);
});
$('#project6').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#sixthOverlay').fadeToggle(500);
 $('#projectSix').fadeToggle(500);
});

$('#project7').mouseenter(function(){
    $('#projectSeven').css({ 'background': 'rgba(255, 255, 255,0.7', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
    $('#SeventhOverlay').fadeToggle(500);
    $('#projectSeven').fadeToggle(500);
});
$('#project7').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#seventhOverlay').fadeToggle(500);
 $('#projectSeven').fadeToggle(500);
});

$('#project8').mouseenter(function(){
    $('#projectEight').css({ 'background': 'rgba(255, 255, 255,0.7', 'border': '10px solid #fff', 'font-weight': '900', 'font-size': '20px', 'color':'#000092'}) ;
    $('#eighthOverlay').fadeToggle(500);
    $('#projectEight').fadeToggle(500);
});
$('#project8').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#eighthOverlay').fadeToggle(500);
 $('#projectEight').fadeToggle(500);
});

// $('#formContent').submit(function(event){
//     event.preventDefault();
//     var info = $('#textInput').val();
//     $('#userText').html(info);
// });


$('#messageForm').submit(function(event){
    event.preventDefault();
    var userName = $('#nameInput').val();
    var userEmail = $('#emailInput').val();
    var message = $('#messageInput').val();

    


if (userName.length <= 1 ){
    alert('Please enter a valid user name');
}
else if (userEmail.length <= 10){
    alert('Enter a valid email address')
}
else if(message.length < 1){
    alert('Input your message below')
}
else if(message.length <= 1){
    alert('Please enter a valid message')
}

else {
    alert('Hello ' + userName + ' , we have received your message and ' + ' we will get back to you in a few. ' + ' Check your email,' + ' Thank you for contacting us ' + userName );
}
})

});