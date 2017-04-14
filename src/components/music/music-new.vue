<template>
	<div class="newMusic">
		<h3>新歌速递   <i class="iconfont icon-zanting"></i></h3>
		<ul>
			<a to="/details" v-for="item in newMusicList" @click="getDetailArr(item)">		
				<img :src="item.albumpic_small" />
				<span>{{item.songname}}</span>
				<i class="iconfont icon-moreandroid"></i>
			</a>	
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			//	newMusicList: []
			}
		},
		methods: {
			getList() {
				this.$store.commit("getList");
			},
			getDetailArr(item) {
				this.$store.commit("getDetailArr",item);
			}
		},
		beforeMount() {
//			this.$http.get("http://localhost:8888/commend").then(function(data){
//			//	console.log(data.body.data);
//				this.newMusicList = data.body.data;
//			},function(){
//				console.log(err);
//			});
			this.getList();
		},
		mounted: {
			
		},
		computed: {
			newMusicList() {
				return this.$store.state.list;
			},
			msg() {
				return this.$store.state.msg;
			}
		}
	}
	
</script>