<template>
	<div class="musicMenu">
		<div>分类</div>
		<ul>
			<li v-for="item in list">
				<img :src="item.img"  />
				<i>{{item.title}}</i>
				<span><img :src="item.smImg"  /><i>月上满江楼</i></span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			getData() {
				this.$store.commit("getData");
			}
		},
		beforeMount() {
			this.getData();
		},	
		mounted() {
			
		},
		computed: {
			list() {
				
				return this.$store.state.data
			}
		}
	}
</script>