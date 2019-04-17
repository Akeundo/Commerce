/*$("mineralwater").css({"background", "white",});
$("vitamin").css({"background, red",});
$("proteinbar").css({"background-color","blue",});
*/

$('li h2[data-type="vitamin"]').css('background', '#101231');
$('li h2[data-type="mineralwater"]').css('background', '#d14348');
$('li h2[data-type="proteinbar"]').css('background', '#06c4ab');

$("li").css("cursor","pointer");

$(document).ready(function() {
    $('#main-nav li a').click(function(e) {
        
        var targetHref = $(this).attr('href');
         
       $('html, body').animate({
           scrollTop: $(targetHref).offset().top
       }, 1000);
   
      e.preventDefault();
    });
   });
   // or same codes as above
   /*var x = $('#history').clone().prop({'id' : 'history-clone'})
$('#history').after(x)
$('.navbar a[href*="#"]').on('click', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});*/
// codes below clone the element history then reasign the ID history-clone to hostory
var x = $('#history').clone().prop({'id' : 'history-clone'})
$('#history').after(x)

//x[0].innerText = 'something here'
//OR
$(x).text('Ronaldinho');
$(x).css('background', '#9e9e9e');


//codes below uses javascript 
//$('a[href="#history"]').clone().prop({'href':'#history-clone'}).appendTo('.navbar').text('history-clone')
// creating new li element inside ul
/*var ul = document.querySelector('.navbar');
var li = document.createElement('li');
var anchor = document.createElement('a');
anchor.setAttribute('href','#history-clone')
anchor.textContent = 'history-clone';
li.appendChild(anchor);

ul.appendChild(li);*/
//codes below uses jquery for same task as above(i.e clone and create a link for the clone element)
$( "ul.navbar li:eq(1)" ).attr('id', 'cloneMe')

$('#cloneMe').clone().find('a').prop({'href':'#history-clone'}).appendTo('.navbar').text("history clone")