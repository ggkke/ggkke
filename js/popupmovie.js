/*popupmovie.js*/
function popupmovie(){
    var popupBtn = $('.movie_btn');
    var close= $('.close');
    var popup = $('.popup1');
    var url = popup.find('iframe').attr('src');
    
    popupBtn.on('click',function(){

        popup.fadeIn(300).find('iframe').attr('src', url);
        
    });
    close.on('click',function(){
        //popup.fadeOut(300);
        $('iframe').attr('src', '');
       

//    popup.on('click',function(){
        popup.fadeOut(100);
//    });
    });
 }