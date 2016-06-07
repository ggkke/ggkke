//top_btn.js
 function top_btn(){
     var top_btn = $('.top_btn');
     
      top_btn.on('click',function(){
        $('html, body').animate({'scrollTop':0},200);
        }); //button
 };