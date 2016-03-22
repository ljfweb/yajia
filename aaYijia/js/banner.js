var tbanner=setInterval("change()",4000);
				var $li=$(".full-screen-slides li");
				var $count=$(".full-screen-slides-pagination li")
				var $num=$li.size();
				var index=0;
				$count.click(function(){
					var Dindex=$(this).index();
					$(this).stop().addClass("current").siblings().stop().removeClass("current");
					clearInterval(tbanner);
					$li.eq(Dindex).stop().css({zIndex:"800",display:"none"}).siblings().stop().css({zIndex:"900",display:"list-item"});
					setInterval("change()",3000);
				})
				function change(){
					index++;
					if(index==$num){
						index=0;
					}
					$li.eq(index).animate({zIndex:800}).css("display","none").siblings().animate({zIndex:900}).css("display","list-item");
					$count.eq(index).addClass("current").siblings().removeClass("current");
				}