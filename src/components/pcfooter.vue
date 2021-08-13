<template>
	<div class="footer">
		<div class="fangwei">
			<div class="footer-template">
				<div class="fotter-header" @click="home">首页</div>
				<div class="fotter-conter">技术服务</div>
				<div class="fotter-conter">关于我们</div>
				<div class="fotter-conter">核心优势</div>
				<div class="fotter-conter">新闻资讯</div>
			</div>
			<div class="footer-template">
				<div class="fotter-header" @click="service">服务范围</div>
				<div class="fotter-conter">营销推广</div>
				<div class="fotter-conter">智慧+</div>
				<div class="fotter-conter">心选</div>
			</div>
			<div class="footer-template">
				<div class="fotter-header" @click="casea">案例展示</div>
				<div class="fotter-conter">案例展示</div>
				<div class="fotter-conter">获取方案</div>
			</div>
			<div class="footer-template">
				<div class="fotter-header" @click="news">新闻资讯</div>
				<div class="fotter-conter">新闻资讯</div>
			</div>
			<div class="footer-template">
				<div class="fotter-header" @click="about">关于我们</div>
				<div class="fotter-conter">公司介绍</div>
				<div class="fotter-conter">公司团队</div>
				<div class="fotter-conter">企业文化</div>
				<div class="fotter-conter">联系我们</div>
			</div>
			<div class="footer-template">
				<div class="fotter-header" @click="screen">影视文化</div>
				<div class="fotter-conter">影视</div>
				<div class="fotter-conter">文化</div>
			</div>
			<div class="footer-template">
				<div class="fotter-conter">地址: 杭州市余杭区欧美金融城T4美国中心</div>
				<div class="fotter-conter">联系方式: 0571-8858-2572</div>
				<div class="fotter-conter" >网址:http://www.ton319.com/</div>
			</div>
		</div>
		<div style="height: 3.5625rem;"></div>
		<div class="line"></div>
		<div class="tips">版权所有：Copyright ©2020 杭州元载科技有限公司 &nbsp;<a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2020031269号</a></div>
	</div>
</template>

<script>
export default{
	data(){
		return{}
	},
	methods:{
		home() {
			this.$router.push({ path: '/' });
		},
		service() {
			this.$router.push({ path: '/pc/service' });
		},
		casea() {
			this.$router.push({ path: '/pc/case' });
		},
		news() {
			this.$router.push({ path: '/pc/new' });
		},
		about() {
			this.$router.push({ path: '/pc/about' });
		},
		screen() {
			this.$router.push({ path: '/pc/screen' });
		}
	}
}
</script>

<style lang="less">

body{
	color: #333333;
	letter-spacing: 0.0625rem;
}

	
.router-link-exact-active.router-link-active{
	color: #009A70;
}
	
.nav a{
	font-size: 0.875rem;
	color: #000000;
	margin-right: 1.5rem;
}
	
.layui-input, .layui-select, .layui-textarea{
	height: 1.25rem;
	width: 7.5rem;
}
	
#app{
	font-family: 'pingfang';
	/* font-family: 'Avenir', Helvetica, Arial, sans-serif */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
}
.footer{
	padding: 3.125rem 22.5rem 1.4375rem;
	background: #F7F7F7;
	color: #333333;
	position: relative;
	bottom: 0px;
}
.fangwei{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
.tips{
	margin: 1.125rem 0 0;
	font-size: 0.75rem;
	font-weight: 400;
	color: #333333;
	line-height: 1.625rem;
}
.line{
	margin: 0 auto;
	width: 100%;
	height: 1px;
	background: #ADADAD;
}
.footer-template{
	text-align: left;
}
.fotter-header{
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 1rem;
}
.fotter-conter{
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 1.625rem;
	
}
#header{
	margin:0 auto;
	text-align: center;
	padding: 0.9375rem 17.1875rem;
}
.loog{
	width:15.9375rem;
	margin-right:10%;
}
.search{
	width: 8.75rem;
	height: 1.25rem;
	margin-left: 8%;
}
</style>
