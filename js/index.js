$(document).ready(function() {
	var m=0;
//menu
    var _span=$('#menubox').find('ul li span'),
	    _dl=$('#menubox').find('ul li dl');
		
	$('#menuDl').css('color','red');
    _span.each(function(i) {
		  $(this).bind('click',function(){
			 _span.css({
				 'background':'url(imgs/menu7.png) #fff no-repeat right center'
				 }).eq(i).css({
					 'background':'url(imgs/menu7.png) #eee no-repeat right center'
					 });
			 _dl.stop().eq(i).slideToggle(400);
		     });
	     });
	    _dl.each(function(i) {
			 _this=_dl.eq(i).children();
			 _this.children('a').bind('click',function(){					
			      var  index=$(this).index();
			      _dl.eq(i).children('dd').children('a').css('background','#fafbfc');
			    $(this).eq(index).css('background','#e6f3f9');
	     })
   });

/*
	$('.menuBox').find('ul li a').each(function(i) {
		
		$('.menuBox').find('ul li .children-dl').hide();
		$('.right').hide().eq(0).show();
		
		$('.menuBox ul li a').eq(0).css({
					'background':'url(imgs/selectedArrow.png) no-repeat right center',
					'padding-left':'2px',
					'color':'#de5a48'
		});	   
		$(this).bind('click',function(){

			//$('.menuBox').find('ul li .children-dl').stop().slideUp(300).eq(i).slideDown(300);
			$('.menuBox').find('ul li .children-dl').stop().eq(i).slideToggle(300);
			$('.right').hide().eq(i).show();
			$('.menuBox ul li a').css({
				   'background':'url(imgs/Rarrow.png) no-repeat right center',
				   'color':'#666'
				}).eq(i).css({
					'background':'url(imgs/selectedArrow.png) no-repeat right center',
					'color':'#de5a48'
				})
		})
    });
	
    var menudl=$("#menubox").find(".children-dl");
	var numLi=$('#menubox').find("ul li").size();
	
	    menudl.each(function(i){
			
		    $(this).children().last().css({
			    'background':'url(imgs/unselect-gray2.png) no-repeat 20px center'
			   });

			$(this).children().bind('click',function(){
				        // index=$(this).index();
						$("#menubox").find(".children-dl dd").css({
							 'color':'#666',
							 'background':'url(imgs/unselect-gray1.png) no-repeat 20px center'
							 });
						menudl.each(function(){
							   $(this).children().last().css({
								  'background':'url(imgs/unselect-gray2.png) no-repeat 20px center'
								 });
	
							  });
						$(this).css({
							'color':'red',
							'background':'url(imgs/selected-red1.png) no-repeat 20px center'
							});
			  });
			$(this).children().last().bind('click',function(){
				$(this).css({
					'background':'url(imgs/selected-red2.png) no-repeat 20px center'
					})
				})
        });
	
*/
//switch切换
     var  li=$(".switch-box").find('.switch-head li ');
	 var  box=$(".switch-box").find(".switch-info");
	 var  strongcolor=$(".switch-box").find('.switch-head li .strongcolor');
	 li.eq(1).css({'left':'120px'});
		 li.each(function(i) {
			 $(this).bind('click',function(){
				 li.css({'background-color':'#fff','border-bottom':'1px solid #eee'}).eq(i).css({'background-color':'#f6f6f6','border-bottom':'1px solid #f6f6f6'});
			      box.hide().eq(i).show().css({'border':'1px solid #eee'}); 
		    })
    });
	
//slider
   var img = $("#box ul li"); 
	var imgSize  = img.size();
	var span = "";
	var imgWidth = 1440; //图片宽度
	var index = 0;
	var bftime = 1500;//自动播放时间
	var T=500;
	
	//图片总数大于一张时才执行
	if(imgSize>1){
		
		for (var i=1;i<=imgSize;i++) {
			span += "<span>"+i+"</span> ";
		}
		
		//$("#idNum").append(span);
		var $span = $("#idNum span");
		//$span.eq(0).addClass("sel");
		//点击播放
		$span.click(function(){
		
			index = $(this).index();
			$span.removeClass("sel").eq(index).addClass("sel");
			$("#box ul").stop().animate({left:-index*imgWidth},T);
		
		})
		//自动播放
		function img_bf() {
			index++;
			if(index==imgSize) index=0;
			//$span.removeClass("sel").eq(index).addClass("sel");
			$("#box ul").animate({left:-index*imgWidth},T);
		}
		
		var bf=setInterval(img_bf,bftime);
		
		//鼠标放在#box时，停止播放
		$("#box").hover(function(){
			clearInterval(bf);						
		},function(){
			bf=setInterval(img_bf,bftime);
		})
		
	}

 function sHow(obj){
	 $("#welcom-box").animate({
		 top:'20'
		 },500)  
	 }
 setTimeout(sHow,700);
 
//QR 动画

  var a=0;
  function QR(){
	  $('#QR-Code-swich img').stop(true,false).animate({
					   'right':0,
					   'top':-50
					   },400);   
   }
  function RQ(){
	  $('#QR-Code-swich img').stop(true,false).animate({
				   'right':-50,
				   'top':0
				   },400);
   }
  $('#QR-Code-swich img').bind('click',function(){
	  if(a==0){
		   QR();
		   a=1
		   $('.box aside form').hide().eq(a).show();
		  }else if(a==1){
		   RQ()
		   a=0;
		  $('.box aside form').hide().eq(a).show();
	  }
	})

//slidermenu
   $('#sliderarrow').bind('click',function(){
	   	  if(a==0){
		  	  $('#slidermenu').stop(true,false).animate({
		         'left':'-227'
		         },400)
		       a=1
		 
		  }else if(a==1){
		  	  $('#slidermenu').stop(true,false).animate({
		        'left':'0'
		         },400)
		        a=0;
	       }
    })



    //pannel 效果


(function pannel(){
	$('.section_pannel h3 img').each(function(){
		$(this).attr('onoff','on')
	})

	$('.section_pannel h3 img').click(function(){
		if($(this).attr('onoff')=='on'){
			$(this).parent().parent().find('.pannerl_con').slideUp()
			$(this).attr('src','imgs/pannel_caret.png')
			$(this).attr('onoff','off')
		}else if($(this).attr('onoff')=='off'){
			$(this).parent().parent().find('.pannerl_con').slideDown()
			$(this).attr('src','imgs/pannel_caret_up.png')
			$(this).attr('onoff','on')
		}

	})
})()



		
});



function adaptationHeight(obj)
	 {
		var _this = obj;
		if (document.getElementById)
		 {
			if (_this && !window.opera)
			 {
				if (_this.contentDocument && _this.contentDocument.body.offsetHeight)
				 {
					_this.height =_this.contentDocument.body.offsetHeight + 20;
				 }
				else if (_this.Document && _this.Document.body.scrollHeight)
				 {
					 _this.height = _this.Document.body.scrollHeight + 10;
				 }
			}
			 else
			 {
				if (_this.contentWindow.document && _this.contentWindow.document.body.scrollHeight)
				 {
					 _this.height = _this.contentWindow.document.body.scrollHeight;
				 }
			}
		}
}








