import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';  
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex);

import './assets/scss/app.scss';

import My from './components/my/my.vue';
import Music from './components/music/music.vue';
import Discover from './components/discover/discover.vue';
import Search from './components/search/search.vue';
import Details from './components/details/details.vue';
import Rankingdetail from './components/rankingDetail/rankingdetail.vue';
import Login from "./components/login-registor/login.vue";
import Registor from "./components/login-registor/registor.vue";
const store = new Vuex.Store({
	state: {
		data: [],
		list: [],
		topid: 26,
		lyric: "",
		msg: {
			songname: "You Don't Know Me",
			seconds: 147,
			albummid: "002MYcCp4RX9uy",
			songid: 105051015,
			singerid: 1051037,
			albumpic_big: "http://i.gtimg.cn/music/photo/mid_album_300/u/y/002MYcCp4RX9uy.jpg",
			albumpic_small: "http://i.gtimg.cn/music/photo/mid_album_90/u/y/002MYcCp4RX9uy.jpg",
			downUrl: "http://dl.stream.qqmusic.qq.com/105051015.mp3?vkey=D7A5DE388C8D4D4112AFBB258F4D6A7F27F4082B119FC32080DB827E5DB512B21AA790F5C5BEC9C76BDB4B13D72C17B5ECE7517C05FAB424&guid=2718671044",
			url: "http://ws.stream.qqmusic.qq.com/105051015.m4a?fromtag=46",
			singername: "Ofenbach",
			albumid: 1214628
		},
		isPlay: false
	},
	mutations: {
		changeTopid(state,topid) {
			state.topid = topid;
			console.log(state.topid);
		},
		getData(state) {
			Vue.http.get("http://localhost:8888/commend").then((data) => {
			//	console.log(data.body.data);
				state.data = data.body.data;
			//	console.log(state.data);
			//	return state.data;
			},function(){
				console.log(err);
			});
		},
		getList(state) {
			Vue.http.get(`http://route.showapi.com/213-4?showapi_appid=35530&topid=${state.topid}&showapi_sign=0e82d665e72047d89be96225dbcb5fdb`).then(function(data) {
				
				if(data.body.showapi_res_body.pagebean.songlist) {
					state.list = data.body.showapi_res_body.pagebean.songlist;
				//	console.log(state.list);
				}else {
					console.log("网络错误");
				}
			},function(){
				console.log(err);
			});
		},
		getLyric(state) {
			Vue.http.get(`http://route.showapi.com/213-2?showapi_appid=35530&musicid=${state.msg.songid}&showapi_sign=0e82d665e72047d89be96225dbcb5fdb`).then(function(data){
				state.lyric = data.body.showapi_res_body.lyric;
				console.log(state.lyric);
			},function() {
				console.log(err);
			});
		},
		goBack() {
			window.history.go(-1);
		},
		getDetailArr(state,item) {
			state.msg = item;
			console.log(state.msg);
			if(state.isPlay==false) {
				$("audio").attr("autoplay",true);
				$(".playBtn").removeClass("icon-ttpodicon").addClass("icon-weibiaoti1");
				state.isPlay = true;
				console.log(state.isPlay);
				console.log($("audio")[0].autoplay);
			}
			
		},
		playControl(state) {
			if(state.isPlay) {
				$("audio")[0].pause();
				$(".playBtn").removeClass("icon-weibiaoti1").addClass("icon-ttpodicon");
				state.isPlay = false;
			}else {
				$("audio")[0].play();
				$(".playBtn").removeClass("icon-ttpodicon").addClass("icon-weibiaoti1");
				state.isPlay = true;
			}
		}
	},
	
});
const router = new VueRouter({
	routes: [
		{
			path: '/my',
			name: "my",
			component: My
		},
		{
			path: '/music',
			component: Music
		},
		{
			path: '/discover',
			component: Discover
		},
		{
			path: '/search',
			component: Search
		},
		{
			path: '/details',
			component: Details
		},
		{
			path: '/rankingdetail/:imgIndex',
			component: Rankingdetail
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/registor',
			component: Registor
		},
		{
			path: "*",
			redirect: "my"
		}
	],
	linkActiveClass: 'active'
});
new Vue({
	router,
	store,
	el: '#app',
    render: h => h(App)
})
export default store;
