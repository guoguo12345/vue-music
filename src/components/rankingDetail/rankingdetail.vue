<template>
	<div class="ranking">
		<div class="back">
			<i class="iconfont icon-backandroid" @click="goBack"></i>
			<span>{{title[$route.params.imgIndex]}}</span>
			<i class="iconfont icon-attachment"></i>
		</div>
		<div class="pic">
			<img :src="imgList[$route.params.imgIndex]" />
		</div>
		<div class="musicList">
			<div v-for="item in list" @click="getDetailArr(item)">
				<span>
					<b>{{item.songname}}</b>
					<i>{{item.singername}}</i>
				</span>
				<i class="iconfont icon-moreandroid"></i>
			</div>
		</div>
		<div class="mu-footer">
			<v-footer></v-footer>
		</div>
		
	</div>
</template>
<script>
	import Footer from "../footer/footer.vue";
	export default {
		data() {
			return {
				title: ["网络红歌榜","K歌榜","日韩榜","欧美榜","热歌榜"],
				imgList: [
					"/src/assets/images/1741e0cb-fcae-43e3-840c-4b06b3fa79dc.jpg" ,
					"/src/assets/images/1baf2579-c3d0-43f6-a168-e91808ceb0f0.jpg",
					"/src/assets/images/6e9fd619-4e5f-4d69-8bc3-b65d2357a25c.jpg",
					"/src/assets/images/1baf2579-c3d0-43f6-a168-e91808ceb0f0.jpg",
					"/src/assets/images/93801d2e-da1a-4c36-9e41-db5f98b3f6db.jpg"
				],
				imgIndex: "", 
			}
		},
		beforeMount() {
			this.getList();
		},
		methods: {
			goBack() {
				window.history.go(-1);
			},
			getList() {
				this.$store.commit("getList");
			},
			getDetailArr(item) {
				this.$store.commit("getDetailArr",item);
//				this.msg = item;
//				console.log(this.msg);
			}
		},
		components: {
			"v-footer": Footer
		},
		mounted() {
			console.log(this.imgIndex);
		},
		computed: {
			list() {
				return this.$store.state.list;
			},
			msg() {
				return this.$store.state.msg;
			}
		}
	}
</script>