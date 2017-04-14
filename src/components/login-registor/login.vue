<template>
	<div id="login">
		<div class="back">
			<span class="iconfont icon-back" @click="goBack"></span>
			<i>登录爱音乐</i>
			<a>忘记密码</a>
		</div>
		<ul class="formUl">
			<li>账号</li>
			<li><input type="text" placeholder="手机号码" /></li>
			<li>密码</li>
			<li><input type="password" placeholder="输入密码" /></li>
			<li><a>登录</a></li>
			<li><i></i><router-link to="/registor">注册账号</router-link></li>
	
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
			goBack() {
		  		window.history.go(-1);
		  	}
		}
	}
</script>