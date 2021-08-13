<template>
	<div id="nav">
		<div class="mainimg"><img src="../../assets/service/img01.png" /></div>
		<div class="layui-tab layui-tab-brief">
			<ul class="layui-tab-title">
				<li class="layui-this">智能推广</li>
				<li>智慧+</li>
				<li>心选</li>
			</ul>
			<div class="layui-tab-content">
				<!-- 智能推广 -->
				<div class="layui-tab-item layui-show p-t70">
					<Intelligent></Intelligent>
				</div>
				<div class="layui-tab-item">
					<Wisdom></Wisdom>
				</div>
				<div class="layui-tab-item">
					<Heartselection></Heartselection>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Intelligent from '@/components/intelligent.vue'
import Wisdom from '@/components/wisdom.vue'
import Heartselection from '@/components/heartselection.vue'

export default {
  name: 'home',
  components: {
    Intelligent,
	Wisdom,
	Heartselection
  },
  created() {
  }
}
</script>

<style>
.mainimg img{
	width: 120rem;
}
.layui-tab{
	margin: 0px 0;
}
.layui-tab-title {
	padding: 0 10%;
	text-align: center;
	height: 6.875rem;
	border: none;
	-moz-box-shadow: 0rem 0.125rem 0.125rem #c9c9c9;
	-webkit-box-shadow: 0rem 0.125rem 0.125rem #c9c9c9;
	box-shadow: 0rem 0.125rem 0.125rem #c9c9c9;
}
.layui-tab-title li {
	font-size: 2.5rem;
	font-weight: 300;
	color: #666666;
	min-width: 30%;
	min-height: 6.875rem;
	line-height: 6.875rem;
}
.layui-tab-title .layui-this:after {
	height: 6.875rem;
}
.layui-tab-content{
	
	padding: 0rem;
}
.layui-tab-item{
	width: 100%;
}
.layui-tab-brief > .layui-tab-title .layui-this {
	font-size: 2.5rem;
	font-weight: 300;
	color: #666666;
}
.layui-tab-brief > .layui-tab-more li.layui-this:after,
.layui-tab-brief > .layui-tab-title .layui-this:after {
	border-bottom: 0.25rem solid #009a70;
}
</style>
