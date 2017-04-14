<template>
	<div id="registor">
		<div class="back">
			<span class="iconfont icon-back" @click="goBack"></span>
			<i>用户注册</i>
		</div>
		<ul class="formUl">
			<li>账号</li>
			<li><input type="text" placeholder="仅支持大陆手机号码" /></li>
			<li>验证码</li>
			<li><input type="password" placeholder="输入验证码" /><button>获取验证码</button></li>
			<li>密码</li>
			<li><input type="password" placeholder="输入密码,不少于6位数字或字母" /></li>
			<li><a>注册</a></li>
			<li><i></i><router-link to="/login">登录账号</router-link></li>
	
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