$(document).ready(function(){
   $('#toggleTextFirstIcon').click(function(){
       $('.hideFirstIcon').toggle();
       $('.showFirstText').toggle();
   });
   $('#toggleSecondIcon').click(function(){
       $('.hideSecondIcon').toggle();
       $('.showSecondText').toggle();
   });
   $('#toggleThirdIcon').click(function(){
       $('.hideThirdIcon').toggle();
       $('.showThirdText').toggle();
   });

   $('#project1').mouseenter(function(){
       $('#projectOne').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
       $('#firstOverlay').toggle();
       $('#projectOne').toggle();
   });
   $('#project1').mouseleave(function(){
       $(this).css('background', 'transparent')
    $('#firstOverlay').toggle(); 
    $('#projectOne').toggle();
});

$('#project2').mouseenter(function(){
    $('#projectTwo').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#secondOverlay').toggle();
    $('#projectTwo').toggle();
});
$('#project2').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#secondOverlay').toggle(); 
 $('#projectTwo').toggle();
});

$('#project3').mouseenter(function(){
    $('#projectThree').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#thirdOverlay').toggle();
    $('#projectThree').toggle();
});
$('#project3').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#thirdtOverlay').toggle(); 
 $('#projectThree').toggle();
});

$('#project4').mouseenter(function(){
    $('#projectFour').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#fourthOverlay').toggle();
    $('#projectFour').toggle();
});
$('#project4').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#fourthOverlay').toggle(); 
 $('#projectFour').toggle();
});

$('#project5').mouseenter(function(){
    $('#projectFive').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#fifthOverlay').toggle();
    $('#projectFive').toggle();
});
$('#project5').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#fifthtOverlay').toggle(); 
 $('#projectFive').toggle();
});

$('#project6').mouseenter(function(){
    $('#projectSix').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#SixthOverlay').toggle();
    $('#projectSix').toggle();
});
$('#project6').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#sixthOverlay').toggle(); 
 $('#projectSix').toggle();
});

$('#project7').mouseenter(function(){
    $('#projectSeven').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#SeventhOverlay').toggle();
    $('#projectSeven').toggle();
});
$('#project7').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#seventhOverlay').toggle(); 
 $('#projectSeven').toggle();
});

$('#project8').mouseenter(function(){
    $('#projectEight').css({ 'background': 'rgba(38, 31, 15,0.5', 'border': '10px solid #fff', 'font-weight': '500', 'font-size': '20px' }) ;
    $('#eighthOverlay').toggle();
    $('#projectEight').toggle();
});
$('#project8').mouseleave(function(){
    $(this).css('background', 'transparent')
 $('#eighthOverlay').toggle(); 
 $('#projectEight').toggle();
});



});
