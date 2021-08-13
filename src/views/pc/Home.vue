<template>
	<div class="home">
		<div class="layui-carousel" id="test10">
		  <div carousel-item="">
		    <div><img src="../../assets/home/banner1.jpg"></div>
		    <div><img src="../../assets/home/banner2.jpg"></div>
		    <div><img src="../../assets/home/banner3.jpg"></div>
		    <div><img src="../../assets/home/banner4.jpg"></div>
		  </div>
		</div>
		<!-- <div class="mainimg"><img src="../assets/home/img03.png" /></div> -->
		<!-- 技术服务 -->
		<div class="template">
			<div class="template1 m-t100">技术服务</div>
			<div class="template2">Technical Service</div>
			<div class="template3 flex-center">
				<img  src="../../assets/home/img04.png" />
				<img class="border" src="../../assets/home/img05.png" />
			</div>
			<div class="template3 flex-center">
				<img  src="../../assets/home/img06.png" />
				<img class="border" src="../../assets/home/img07.png" />
			</div>
		</div>
		<!-- 关于我们 -->
		<div class="template">
			<div class="template1 m-t80">关于我们</div>
			<div class="template2">Service Content</div>
			<div class="template4">
				<img src="../../assets/home/img08.png" />
				<div class="template4-text sevenline">
					介绍：杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，获得国家多项知识产权专利。我们基于目前国内的通过第五代移动通信技术（5th
					Generation Mobile Communication
					Technology简称5G）重点支持低时延高可靠业务，实现对5G车联网、工业互联网等应用的支持。运用我们的大数据、AI智能、区块链、云计算、物联网等自主知识产权的前沿科技模块，固定看板、云计算、互动交互承接了用户的需求以及精准化数据并完成相应的行为自动识别，形成万亿个个人生态圈。
				</div>
			</div>
		</div>
		<!-- 核心优势 -->
		<Advantages :list="advantagelist" :content="content" :title="title"></Advantages>
		<!-- 新闻动态 -->
		<div class="template">
			<div class="template1 m-t100">新闻动态</div>
			<div class="template2 m-b30">News</div>
			<div class="template5 flex-space-between">
				<div class="left">
					<img class="left-img" src="../../assets/home/xinwen1.png" />
					<div class="left-title">热烈欢迎!杭州归国华侨联合会领导莅临指导工作</div>
					<div class="left-content">6月23日，杭州市归国华侨联合会副主席陶晓亮、经科部部长李
						孟波等领导一行莅临北美浙江华侨联盟高端人才交流中心科技项
						目成果转化中心（中国·杭州代表处）、元载科技有限公司总部考察调研……</div>
				</div>
				<div class="right">
					<div class="right-model flex-space-between m-b30">
						<img class="r-imgs" src="../../assets/home/xinwen2.png" />
						<div class="r-con  t-l">
							<div class="r-title clamp">精诚合作共赢未来丨元载TON319服务商签约仪式盛大举行！</div>
							<div class="r-content ellipsis">为了促进通过科技赋能和商业模式创新，进一步推动“助力每个微小个体打造元载版的幸福生活方案”，为帮助B端商户提供整体解决方案……</div>
						</div>
					</div>
					<div class="right-model flex-space-between m-b30">
						<img class="r-imgs" src="../../assets/home/xinwen3.png" />
						<div class="r-con t-l">
							<div class="r-title clamp">元载科技-TON319,专注为B端商户提供整体解决方案的服务系统</div>
							<div class="r-content ellipsis">元载科技TON319承接抖音、快手、微信等主流媒体的数亿数据，通过科技赋能和商业模式创新进行营销推广……</div>
						</div>
					</div>
					<div class="right-model flex-space-between">
						<img class="r-imgs" src="../../assets/home/xinwen4.png" />
						<div class="r-con t-l">
							<div class="r-title clamp">2021新税来临，实体店的春天来了？</div>
							<div class="r-content ellipsis">
								互联网伴随着我国经济的发展得到了非常快速的发展，新科技更是得到了蓬勃的发展空间。电商税的推出，不仅仅让电商行业变得更加的规范了，同时也让实体店有了更好的发展的机会……
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="height: 5rem;"></div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Advantages from '@/components/advantages.vue';

export default {
	name: 'home',
	data(){
		return{
			advantagelist:[
				{
					title:"产品核心技术",
					etitle:"Product core technology",
					content:"公司成功研究数百种具有自主知识产权和核心竞争力的产品，给用户更好的服务。"
				},
				{
					title:"强大的团队",
					etitle:"Srong team",
					content:"团队成员包括一批中青年科学家、硕士、学士等科研人员,专业的研发、销售人员以及售后等团队为大家高质服务。"
				},
				{
					title:"高新技术",
					etitle:"High tech",
					content:"我们致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，获得国家多项知识产权专利。"
				},
				{
					title:"产权专利",
					etitle:"24 hours after sales service",
					content:"我们拥有国家高新技术认证并荣获数十项自主知识产权以及专利，国家大力扶持产业。"
				}
			],
			title:'核心优势',
			content:"Partner"
		}
	},
	components: {
		Advantages
	},
	methods:{
		
	},
	mounted() {
		layui.use(['carousel', 'form'], function(){
		  var carousel = layui.carousel
		  ,form = layui.form;
		  //图片轮播
		    carousel.render({
		      elem: '#test10',
		      width: '100%',
		      height: '50rem',
		      interval: '5000',
			  indicator:'none'
		    });
		});
	}
};
</script>

<style lang="stylus" scoped>
.layui-carousel-arrow{
	width 6.25rem
	height 6.25rem
	font-size 2.0625rem
}
.layui-carousel{
	img{
		width 100%
		height 50rem
	}
}
.home
	background-image url('../../assets/home/img01.png')
	background-size 100% 100%

.t-l
	text-align left 
.mainimg
	img
		width 100%
.template
	.template1
		font-size 2.5rem
		font-weight 500
		color #333333
	.template2
		font-size 1rem
		color #333333
		opacity 0.8
		margin-top 1.0625rem
	.template3
		padding 0 22.5rem
		img
			width 34.375rem
			padding-top 3.125rem
		.border
			padding-left 6.25rem
	.template4
		padding 0 20.9375rem 0 20.3125rem
		display flex
		justify-content space-between
		align-items center
		img
			width 36rem
			
		.template4-text
			width 41rem
			font-size 1.125rem
			color #333333
			text-align left
			line-height: 2.625rem;
	.template5
		margin 0 22.5rem
		// height: 26.875rem;
		background #FFFFFF
		box-shadow -0.0625rem -0.4375rem 0.5rem 0rem rgba(99, 100, 100, 0.06), 0.4375rem 0.4375rem 0.5rem 0rem rgba(99, 100, 100, 0.1)
		padding 3.125rem
		.left
			width 25rem
			.left-img
				width:25rem;
			.left-title
				font-size: 1rem;
				font-weight: bold;
				color: #333333;
				margin 1rem 0
			.left-content 
				font-size: 0.875rem;
				color: #666666;
				text-align left
				line-height: 1.5625rem;
		.right
			.right-model
				.r-imgs
					width:8.75rem;
					margin-right 1.25rem
				.r-con 
					width: 29.0625rem;
					.r-title 
						font-size: 1rem;
						font-weight: bold;
						color: #333333;
						line-height: 1.75rem;
					.r-content 
						font-size: 0.875rem;
						color: #666666;
						line-height: 1.5625rem;
</style>
