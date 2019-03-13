<script>
			// 侧边栏的显示与隐藏
			var bar = document.querySelector(".switchBar");
			var lg =document.querySelector(".login")
			document.onmouseenter=function(event){
				bar.style.transform="translatex("+0+"px)";
				document.onmouseleave=function(event){
					bar.style.transform="translatex("+-150+"px)";
				}
				lg.onmouseenter=function(){
					bar.style.transform="translatex("+-150+"px)";
					lg.onmouseleave=function(){
					bar.style.transform="translatex("+0+"px)";
				}
			}		
		}
		// 背景切换
			var li = $(".list");
        	li.click(function(){
            var index = $(this).index();
            $(".wrap").eq(index).fadeIn().siblings(".wrap").fadeOut(); 
		})
		
		</script>