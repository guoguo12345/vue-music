<template>
	<div class="details">
		<div class="top">
			<a class="iconfont icon-moreunfold" @click="goBack"></a>
			<span> {{msg.songname}} <i>  ~ {{msg.singername}} </i></span>
			<i class="iconfont icon-attachment"></i>
		</div>
		<div class="pic">
			<img :src="msg.albumpic_big" /></div>
		<div class="lyrics">
			<!-- test.replace(/&nbs p;/ig, ""); -->

			<p v-for="(item,index) in lyric"
			v-if='item.split("]")[1]&&item.split("]")[1]!= "&#10;"'>
				<span class="lyricword">{{ item.split("]")[1] }}</span>
				<span class="time" v-if="">{{ item.split("]")[0].substring(0,9) }}</span>
			</p>
		</div>
		<div class="ado">
			<audio :src="msg.url" controls></audio>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				currentTime: "",
				allTime: "",
				average: ""
			}
		},
		methods: {
			goBack() {
				window.history.go(-1);
			},
			getLyric() {
				this.$store.commit("getLyric",this.$store.state.msg.songid);
			},
			timeFormat(time) {
				var minutes = Math.floor(time/60);
				var seconds = Math.floor(time%60);
				minutes = minutes<10? "0"+minutes:minutes;
				seconds = seconds<10? "0"+seconds:seconds;
				return (minutes+":"+seconds);
			},
			changeTime() {
				var allTime = $("audio")[0].duration;
				allTime = this.timeFormat(allTime);
				var currentTime = $("audio")[0].currentTime;
				this.currentTime = this.timeFormat(currentTime);
				// console.log(this.currentTime);
				var timeList = $(".time");
				for(var i=0;i<timeList.length;i++) {
					// console.log(timeList[1].innerHTML);
					if(timeList[i].innerHTML == currentTime) {
						console.log(222222222);
					}
				}
				
			}
		},
		computed: {
			msg() {
				return this.$store.state.msg;
			},
			lyric() {
				return this.$store.state.lyric;
			}  
		},
		mounted() {
			this.getLyric();
			$("audio")[0].addEventListener("timeupdate", this.changeTime);
			
		}
	}
</script>