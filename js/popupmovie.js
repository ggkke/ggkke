/*popupmovie.js*/
function popupmovie(){
    var popupBtn = $('.movie_btn');
    var close= $('.close');
    var popup = $('.popup1')
    
    
    popupBtn.on('click',function(){

        popup.fadeIn(300).find('iframe');
        
    });
    close.on('click',function(){
         popup.fadeOut(300);
    });
    popup.on('click',function(){
        popup.fadeOut(100);
    });
};