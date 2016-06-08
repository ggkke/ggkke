/*bestitem.js*/

function bestitem(){
var bestitem = $('#best_item_image').find('ul'),
          bestLi = bestitem.find('li'),
          banLiFirst = bestitem.find('li').first(),
          bestLiWid = parseInt(bestLi.width()),
          bestLihei = bestitem.find('li').height(),
          r_btn = $('.bestbtn_r'),
          l_btn = $('.bestbtn_l'),
          slideTime = 1000, //1초 : 배너움직이는 시간
          settingTime = 2100; //1.1초 : 슬라이드가 작동되게 하는 시간(버튼)
         
      // 첫번째 이미지 보이기
        bestLi.last().clone().prependTo('#best_item_image').find('ul'); //banLi 배너 내부의 li(하나의 배너부분)
    
       l_btn.on('click', function(){
          var bannerML = parseInt(bestitem.css('margin-left'));
          if(bannerML == -bestLiWid){
            bestitem.stop().delay(200).animate({'margin-left':"+="+bestLiWid},slideTime, function(){
              bestitem.css({'margin-left':-bestLiWid*2})
            });
           
          }else{
            bestitem.stop().delay(200).animate({'margin-left':"+="+bestLiWid},slideTime)
            var bannerMarginCut = Math.abs( parseInt($('#best_item_image').find('li').css('margin-left') ) ) / $('#best_item_image').find('li').width();
            
            console.log(bannerMarginCut);
          };
        });
    
    var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(bestitem.css('margin-left'));
            if(bannerML <= -bestLiWid*2){
              bestitem.css({'margin-left':0}).stop().delay(200).animate({'margin-left':"-="+bestLiWid},slideTime);
            }else{
              bestitem.stop().delay(200).animate({'margin-left':"-="+bestLiWid},slideTime)
            };
          var bannerMarginCut = Math.abs( parseInt($('#best_item_image').find('li').css('margin-left') ) ) / $('#best_item_image').find('li').width();
          /* $('#indicator_box li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');*/
          console.log(bannerMarginCut);
        });
      }
      rightBtn();
    
    
    // 자동움직임
       var timer;
      // 일정한 시간간격을 두고 움직이는기능 : setInterval
      function startBtn(){ settingTime = setInterval('$(".bestbtn_r").click()', 3000)};
     // setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('#best_item_image').on({mouseenter:stopBtn ,mouseleave:startBtn});
 };
    
