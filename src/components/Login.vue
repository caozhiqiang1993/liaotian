<template>
	<div class="loginPage" ref="loginPage">

		<div class="L_enter">
			<p class="l_same_P">
				<input type="text" placeholder="EMAIL" v-model="username">
			</p>
			<p class="l_same_P">
				<input type="password" placeholder="PASSWORD" v-model="userpsd">
			</p>
			<div class="loginBtn" @click="loginSubmit">
				LOGIN
			</div>
			<div class="rORf">
				<span><router-link to="/registe">REGISTER HERE</router-link></span>
				<span><router-link to="/forget">FORGET PASSWORD</router-link></span>
			</div>
			<p class="l_same_P l_same_OR">
				<span class="span_or">OR</span>
			</p>
			<div class="l_third">
				<img src="../assets/Facebook.png" alt="">
				<img src="../assets/weixin.png" alt="">
				<img src="../assets/Google.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>


//创建ajax函数

export default {
	data() {
		return {
			username: '',
			userpsd: '',
			ws:{}
		}
	},
	props: [],
	methods: {
		loginSubmit() {
			console.log(this.username)
			this.$http.jsonp('http://192.168.2.52:333/api/login/login', {
				params:{
					user: this.username,
					psd: this.userpsd
				}
			}).then(msg => {
				console.log(msg);
				if (msg.body.status) {
					this.storage.set('key',msg.body.data.key)
					router.push({path:'/'})
				}else{
					this.$messagebox.alert(msg.body.msg, 'error');
				}
			}, response => {
				console.log('error', response)
			})
		}
	},
	mounted() {
		// router.push({path:'/index'})
	},
	created(){

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.loginPage{
	min-height: calc(100vh + 1px);
	background: #0094da;
	padding: 0 2rem;
}

.L_enter input::-webkit-input-placeholder{
    color:#fff;
}

.L_enter input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#fff;
}

.L_enter input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#fff;
}

.L_enter input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#fff;
}

.L_enter .l_same_P{
	padding: 0.8rem 0 0.4rem;
	border-bottom:0.2rem solid #007ec5;
}

.L_enter .l_same_P	input{
	background:#0094da;
	width:100%;
	font-size:0.75rem;
	color: white;
	outline: none;
}

.L_enter .l_same_OR{
	text-align:center;
	color:#fff;
	padding-top:0.5rem;
}




.loginBtn{
	text-align: center;
	color: #555;
	padding: 0.4rem;
	margin-top: 0.4rem;
	background: #fff;
	font-size: 0.65rem;
    box-shadow: 0 0 1px 1px #ababab;
}

.rORf{
	padding:0.8rem 0 0.4rem;
	color: #fff;
}
.rORf span:last-child{
	float:right;
}
.rORf span{
	font-size:0.5rem;
}

.l_third{
	text-align:center;
}


.l_third img{
	width: 1.6rem;
	margin: 0.7rem;
}

</style>