<template>
	<div class="ranking">
		<router-link to="/rankingdetail/0" @click.native="changeTopid(5)">
			<img src="/src/assets/images/1baf2579-c3d0-43f6-a168-e91808ceb0f0.jpg" />
			<div>网络红歌榜</div>
		</router-link>
		<router-link to="/rankingdetail/1" @click.native="changeTopid(6)" data-id="3">
			<img src="/src/assets/images/c09838ab-d900-409d-9497-cc3acf5a650e.jpg" />
			<div>K歌榜</div>
		</router-link>
		<router-link to="/rankingdetail/2" @click.native="changeTopid(16)">
			<img src="/src/assets/images/6e9fd619-4e5f-4d69-8bc3-b65d2357a25c.jpg" />
			<div>日韩榜</div>
		</router-link>
		<router-link to="/rankingdetail/3" @click.native="changeTopid(3)">
			<img src="/src/assets/images/1741e0cb-fcae-43e3-840c-4b06b3fa79dc.jpg" />
			<div>欧美榜</div>
		</router-link>
		<router-link to="/rankingdetail/4" @click.native="changeTopid(26)">
			<img src="/src/assets/images/93801d2e-da1a-4c36-9e41-db5f98b3f6db.jpg" />
			<div>热歌榜</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			changeTopid(topid) {
				this.$store.commit("changeTopid",topid);
			}
		}

	}
</script>