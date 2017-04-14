<template>
  <div id='search'>
  	<div class="back">
		<i class="iconfont icon-backandroid" @click="goBack"></i>
		<input class="inp" v-model="search" type="text" placeholder='歌手/歌名/歌词' /> 
		<i class="iconfont icon-search"></i>
	</div>
	<div class="hot" v-show="!isShow">
		<span><i>热门搜索</i><i>换一组</i></span>
		<ul>
			<li>思美人</li>
			<li>三生三世十里桃花</li>
			<li>那片星空那片海</li>
			<li>刘德华</li>
			<li>薛之谦</li>
			<li>高尚</li>
		</ul>
	</div>
	<div class="searchList" v-show="isShow">
			<div v-for="item in searchList" @click="getDetailArr(item)">
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
	  data () {
	    return {
	      isShow: false,
	      searchList: [],
	      search: []
	    }
	  },
	  methods: {
	  	goBack() {
	  		window.history.go(-1);
	  	},
	  	getDetailArr(item) {
	  		this.$store.commit("getDetailArr",item);
	  	},
	  	playControl() {
	  		this.$store.commit("playControl");
	  	},
	  	getSearchList(value) {
	  		if(value) {
		  			this.$http.get(`http://route.showapi.com/213-1?showapi_appid=35530&keyword=${value}&page=&showapi_sign=0e82d665e72047d89be96225dbcb5fdb`).then(function(data) {
							//console.log(data.body.showapi_res_body.pagebean.contentlist);
							this.searchList = data.body.showapi_res_body.pagebean.contentlist;
							this.isShow = true;
						},function(){
							console.log(err);
						});
	  		}else {
	  			alert("不能为空");
	  		}	
			}
	  },
	  watch: {
	  	search(newVal,oldVal) {
	  //		console.log(newVal+"-"+oldVal);
	  		this.getSearchList(newVal);
	  	}
	  },
	  components: {
	  	"v-footer": Footer
	  },
	  computed: {
	  	msg() {
				return this.$store.state.msg;
			}
	  },
	  
	}
</script>
<style lang="scss" scoped>
	
</style>
