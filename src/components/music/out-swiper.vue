<template>
	<div class="out-swiper">
		<div class="swiper-container" id="outSwiper">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
		        	<!--推荐 私人 铃音-->
		        	<div class="commend">
		        		<div class="swiper-container" id="innerSwiper">
						    <div class="swiper-wrapper">
						    	<div class="swiper-slide">
						        	<img src="../../assets/images/b85588e3-849f-40e2-a138-78b01f81344f.jpg" />
						        </div>
						        <div class="swiper-slide">
						        	<img src="../../assets/images/050e46e0-fb33-4a5d-a6fe-c62e5cf1abb3.jpg" />
						        </div>
						        <div class="swiper-slide">
						        	<img src="../../assets/images/208d9d79-1496-4faa-8d48-8f2443a295c8.jpg" />
						        </div>				      
						        <div class="swiper-slide">
						        	<img src="../../assets/images/884ca99a-a6f6-4d6a-9222-5afb8e45baa0.jpg"  />
						        </div>				        
						        <div class="swiper-slide">
						        	<img src="../../assets/images/d6b4bffe-9fe6-4db8-a5c6-11bc54d25017.jpg"  />
						        </div>
						    </div>
						    <!-- 如果需要分页器 -->
						    <div class="swiper-pagination"></div>											  
						</div>
						<ul class="sort">
							<li><i class="iconfont icon-orderlisto"></i><b>今日推荐歌曲</b></li>
							<li><i class="iconfont icon-location"></i><b>私人FM</b></li>
							<li><i class="iconfont icon-filter"></i><b>铃音DIY</b></li>
						</ul>	
		        	</div>
		        	<!--推荐歌单-->
		        	<div class="mu-newMusic">
		        		<v-newMusic></v-newMusic>
		        	</div>
		        </div>
		        <div class="swiper-slide">
		        	<v-menuMusic></v-menuMusic>
		        </div>
		        <div class="swiper-slide"><v-ranking></v-ranking></div>
		       <!-- <div class="swiper-slide">电台</div>-->
		    </div>  
		</div>
	</div>
</template>
<script>
	import newMusic from "./music-new.vue";
	import menuMusic from "./music-menu.vue";
	import Ranking from "./ranking.vue";
	export default {
		data() {
			return {	
			}
		},
		components: {
			"v-newMusic": newMusic,
			"v-menuMusic": menuMusic,
			"v-ranking": Ranking
		},
		mounted() {
			var mySwiper = new Swiper ('#outSwiper', {
				onSlideChangeStart: function(swiper){  
					var index = swiper.activeIndex;
					$(".mu-nav .music-nav ul li").removeClass();
		        	$(".mu-nav .music-nav ul li").eq(index).addClass("active");
			   }
			});
			var mySwiper2 = new Swiper ('#innerSwiper', {		   
			    loop: true,		
			    autoplay: 3000,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',		    		
			  })        
			$('.music-nav li').tap(function(){
			//	console.log($(this).index());
			    mySwiper.slideTo($(this).index());
			    $(this).addClass('active').siblings().removeClass();
			});  
		}	
	}
</script>