<template>
	<div id='app1' class="header">
		<div :class="ish ? 'header-1 flex-space-between' : 'header-2 flex-space-between'">
			<img class="img1" src='../assets/home/img11.png' />
			<img  class="img2" src="../assets/home/img10.png" @click="show_a = !show_a"/>
		</div>
		<transition name="slide-fade">
			<div class="nav1" @click="luyou()" v-if="show_a">
				<div class="link"><router-link to="/mobile/home">首页</router-link></div>
				<div class="link"><router-link to="/mobile/service">服务范围</router-link></div>
				<div class="link"><router-link to="/mobile/case">案例展示</router-link></div>
				<div class="link"><router-link to="/mobile/new">新闻资讯</router-link></div>
				<div class="link"><router-link to="/mobile/about">关于我们</router-link></div>
				<div class="link"><router-link to="/mobile/screen">影视文化</router-link></div>
			</div>
		</transition>
	</div>
</template>

<script>
export default{
	data(){
		return{
			show: true,
			ish:false,//页头是否更改背景色
			show_a:this.show
		}
	},
	props:{
	},
	mounted() {
	},
	methods:{
		luyou(){
			let path = this.$route.path;
			// console.log(this.$route.path,'this.$route.path');
			if(path == '/mobile/new' || path == 'mobile/newdetails'){
				this.ish =true;
			}else{
				this.ish = false;
			}
		},
	}
}
</script>

<style lang="less">
#app1{
	font-family: 'pingfang';
	line-height: 1;
	.router-link-exact-active,.router-link-active{
		font-size: 2rem;
		color: #009A70;
	}
	a{
		font-size: 2rem;
		color: #FFFFFF;
	}
	.link{
		padding: 0.9375rem 0;
	}
	.nav1{
		position: absolute;
		top: 5.25rem;
		right: 0rem;
		width: 9.6875rem;
		text-align: center;
		background-color: rgba(158, 158, 158, 0.5);
	}
	.slide-fade-enter-active {
	  transition: all 0.5s ease;
	}
	.slide-fade-leave-active {
	  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
	  transform: translateX(10px);
	  opacity: 0;
	}
	.header{
		position: relative;
		z-index: 100;
	}
	.header:hover ~ .nav1 {
		animation-play-state: paused;
	}
	.header-1{
		padding: 1.25rem 1.5625rem;
		background-color: #F1F1F1;
	}
	.header-2{
		padding: 1.25rem 1.5625rem;
	}
	.img1{
		width: 9.5625rem;
		height: 2.6875rem;
	}
	.img2{
		width: 2.125rem;
		height: 1.75rem;
	}
}
</style>
