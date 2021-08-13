<template>
	<div  class="header flex-space-around">
		<img class="loog" src="../assets/home/img02.png" />
		<div class="nav4">
			<router-link to="/">首页</router-link>
			<router-link to="/pc/service">服务范围</router-link>
			<router-link to="/pc/case">案例展示</router-link>
			<router-link to="/pc/new">新闻资讯</router-link>
			<router-link to="/pc/about">关于我们</router-link>
			<router-link to="/pc/screen">影视文化</router-link>
		</div>
		<div class="flex-center">
			<div class="layui-input-inline">
				<input type="text" name="photo" style="font-size: 1.25rem;" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input" />
			</div>
			<i class="layui-icon layui-icon-search" style="font-size:1.075rem; color: #ffffff;background-color: #009A70;"></i>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
#app{
	font-family: 'pingfang';
	/* font-family: 'Avenir', Helvetica, Arial, sans-serif */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	body{
		color: #333333;
		letter-spacing: 0.0625rem;
	}
	.header{
		margin:0 auto;
		text-align: center;
		padding: 0.9375rem 17.1875rem;
		.loog{
			width:15.9375rem;
			margin-right:10%;
		}
		.search{
			width: 8.75rem;
			height: 1.25rem;
			margin-left: 8%;
		}
		.nav4 a{
			font-size: 0.875rem;
			color: #000000;
			margin-right: 1.5rem;
		}
		.router-link-exact-active.router-link-active{
			color: #009A70;
		}
		.layui-input, .layui-select, .layui-textarea{
			height: 1.25rem;
			width: 7.5rem;
		}
	}
	
	
}

</style>
