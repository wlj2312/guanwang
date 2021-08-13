<template>
	<div id="app">
		<div class="mainimg">
			<img src="../../assets/new/zixunbanner.png">
		</div>
		<div class="template">
			<div class="template1">最新资讯</div>
			<div class="template2">New information</div>
			<div class="m-t30">
				<div class="template6 flex-space-around ">
					<img class="l-imgs" src="../../assets/new/xinwen001.png" />
					<div class='right'>
						<div class="">
							<div class='title1 clamp'>热烈欢迎！杭州市归国华侨联合会领导莅临指导工作</div>
							<div class='title2'>6月23日，杭州市归国华侨联合会副主席陶晓亮、经科部部长李孟波等领导一行莅临北美浙江华侨联盟高端人才交流中心科技项目成果转化中心（中国·杭州代表处）、元载科技有限公司总部考察调研。</div>
							<div class='title3 m-t40'>2021/06/24</div>
						</div>
					</div>
				</div>
				<div class="template6 flex-space-around ">
					<img class="l-imgs" src="../../assets/new/xinwen002.png" />
					<div class='right'>
						<div class="">
							<div class='title1 clamp'>精诚合作共赢未来丨元载TON319服务商签约仪式盛大举行！</div>
							<div class='title2'>为了促进通过科技赋能和商业模式创新，进一步推动“助力每个微小个体打造元载版的幸福生活方案”，为帮助B端商户提供整体解决方案，降低商户推广成本做出积极的贡献，2021年6月22日下午，张总对元载科技进行考察，并进行服务商合作签约仪式。</div>
							<div class='title3 m-t30'>2021/06/23</div>
						</div>
					</div>
				</div>
				<div class="template6 flex-space-around ">
					<img class="l-imgs" src="../../assets/new/xinwen003.png" />
					<div class='right'>
						<div class="">
							<div class='title1 clamp'>2021新税来临，实体店的春天来了？</div>
							<div class='title2'>互联网伴随着我国经济的发展得到了非常快速的发展，新科技更是得到了蓬勃的发展空间。电商税的推出，不仅仅让电商行业变得更加的规范了，同时也让实体店有了更好的发展的机会。</div>
							<div class='title3 m-t40'>2021/06/21</div>
						</div>
					</div>
				</div>
				<div class="template6 flex-space-around ">
					<img class="l-imgs" src="../../assets/new/xinwen004.png" />
					<div class='right'>
						<div class="">
							<div class='title1 clamp'>元载科技，专注为B端商户提供整体解决方案的服务系统</div>
							<div class='title2'>杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发及落地应用，获得国家多项知识产权专利。 旗下【TON319】承接抖音、快手、微信等主流媒体的数亿数据，通过科技赋能和商业模式创新进行营销推广，是一家为B端商户提供整体解决方案的服务系统。</div>
							<div class='title3 m-t30'>2021/05/21</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<!-- <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
		  <legend>将一段已知数组分页展示</legend>
		</fieldset>
		 -->
		<!-- <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
		  <legend>总页数大于页码总数</legend>
		</fieldset> -->
		 
		<div id="demo1"></div>
	</div>
</template>

<script>
import laypage from "../../../public/layui/layui.js"
export default{
	name: 'new',
	components: {},
	data(){
		return {
			list:[
				{
					img:require("../../assets/new/xinwen001.png"),
					title:'热烈欢迎！杭州市归国华侨联合会领导莅临指导工作',
					content:'6月23日，杭州市归国华侨联合会副主席陶晓亮、经科部部长李孟波等领导一行莅临北美浙江华侨联盟高端人才交流中心科技项目成果转化中心（中国·杭州代表处）、元载科技有限公司总部考察调研。',
					time:'2021/06/24'
				},
				{
					img:require("../../assets/new/xinwen002.png"),
					title:'精诚合作共赢未来丨元载TON319服务商签约仪式盛大举行！',
					content:'为了促进通过科技赋能和商业模式创新，进一步推动“助力每个微小个体打造元载版的幸福生活方案”，为帮助B端商户提供整体解决方案，降低商户推广成本做出积极的贡献，2021年6月22日下午，张总对元载科技进行考察，并进行服务商合作签约仪式。',
					time:'2021/06/23'
				},
				{
					img:require("../../assets/new/xinwen003.png"),
					title:'2021新税来临，实体店的春天来了？',
					content:'互联网伴随着我国经济的发展得到了非常快速的发展，新科技更是得到了蓬勃的发展空间。电商税的推出，不仅仅让电商行业变得更加的规范了，同时也让实体店有了更好的发展的机会。',
					time:'2021/06/21'
				},
				{
					img:require("../../assets/new/xinwen004.png"),
					title:'元载科技，专注为B端商户提供整体解决方案的服务系统',
					content:'杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发及落地应用，获得国家多项知识产权专利。 旗下【TON319】承接抖音、快手、微信等主流媒体的数亿数据，通过科技赋能和商业模式创新进行营销推广，是一家为B端商户提供整体解决方案的服务系统。',
					time:'2021/05/21'
				}
			]
		}
	},
	methods:{
		
	},
	mounted() {
		layui.use(['laypage', 'layer'], function(){
		  var laypage = layui.laypage,layer = layui.layer;
		  //总页数大于页码总数
		    laypage.render({
		      elem: 'demo1',
			  count: 30 ,//数据总数
			  prev:false,
			  jump: function(obj){
		        console.log(obj)
		      }
		    });
		});
	}
}
</script>

<style lang="stylus" scoped>
.m-t40{
	margin-top 3.4rem
}
.m-t30{
	margin-top 1.5rem
}
.mainimg
	img
		width 100%
.layui-laypage a, .layui-laypage span{
	height 2.5rem
	padding: 0px 1.5rem;
	line-height: 2.5rem;
	font-size: 0.75rem;
}
.layui-laypage{
}
.template
	.template1
		font-size 2.5rem
		font-weight 500
		color #333333
		margin-top 6.25rem
	.template2
		font-size: 1rem
		color: #333333;
		opacity: 0.8;
		line-height 2
		margin-bottom 4.375rem
	.template6
		margin  0 22.5rem 4.375rem
		display flex
		justify-content flex-start
		align-items center
		background: #FFFFFF;
		box-shadow: 0rem 0.1875rem 0.4375rem 0rem rgba(67, 51, 110, 0.06);
		border-radius: 0.625rem;
		margin-bottom 5rem
		.l-imgs
			width:25rem;
			border-radius: 0.625rem;
			margin-right 2.8125rem
		.right
			text-align left
			width 45.9375rem
			margin-right 1.25rem
			.title1
				font-size: 1.55rem;
				font-weight: bold;
				color: #333333;
				margin-bottom 1.6625rem
			.title2
				font-size: 1.25rem;
				color: #666666;
				line-height: 2.125rem;
			.title3
				
				font-size: 0.875rem;
				color: #999999;
				line-height: 1.6875rem;
</style>
