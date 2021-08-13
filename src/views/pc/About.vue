<template>
	<div class="home">
		<div class="mainimg"><img src="../../assets/about/banner.jpg" /></div>
		<!-- 关于元载 -->
		<div class="template p-t70">
			<div class="template1">关于元载</div>
			<div class="template2">About Yuanzai</div>
			<div class="template3 p-b30 m-t50">
				杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，获得国家多项知识产权专利。
				我们基于目前国内的通过第五代移动通信技术（5th Generation Mobile Communication Technology简称5G）重点支持低时延高可靠业务，
				实现对5G车联网、工业互联网等应用的支持。运用我们的大数据、AI智能、区块链、云计算、物联网等自主知识产权的前沿科技模块，
				个人生态链将大大的得到快速落地应用，涵盖了用户管理UMS（GPS+BD）系统、Life Service System系统、Medical data interaction系统、
				体系生态环境，CCS云计算系统，填补国内全面链接数据链物联管理的空白。固定看板、云计算、互动交互承接了用户的需求以及精准化数据并完成相应的行为自动识别，
				形成万亿个个人生态圈。
			</div>
			<!-- <div class="template3 ">
				旗下【TON319】承接抖音、快手、微信等主流媒体的数亿数据，通过科技赋能和商业模式创新进行营销推广，专注为B端商户提供整体解决方案的服务系统，
				帮助B端商户精准触达目标用户，降低商户推广成本，在全国范围内为客户提供高效、高质的技术系统服务。
			</div> -->
		</div>
		
		<!-- 公司团队 -->
		<Advantage :list="advantagelist" :content="content" :title="title"></Advantage>
		<!-- 企业文化 -->
		<div class="template bgc-pink">
			<div class="template1 p-t30">企业文化</div>
			<div class="template2 m-b30">corporate culture</div>
			<div class="template4 ">
				<div class="m-b70">企业文化：我们一直秉承着优化社会资源、打造美好生活的理念，紧密结合时代科技，运用信息技术实现万物相息，
				以“帮助一亿个家庭拥有爱的能力”为己任，助力每个微小个体打造元载版的幸福生活方案。</div>
				<div class="m-b70">公司使命：用科技打造智慧幸福生活，传播有价值的思想</div>
				<div class="m-b70">愿景：帮助一亿个家庭拥有爱的能力</div>
				<div >价值观：爱国敬业 创新共享 诚信利他</div>
			</div>
			<div style="height: 5rem;"></div>
		</div>
		<!-- 企业风采 -->
		<div class="template">
			<div class="template1">企业风采</div>
			<div class="template2 m-b30">corporate culture</div>
			<div class="template5 flex-space-around tem5 m-t30 m-b30">
				<img src="../../assets/about/qiye1.png" />
				<img src="../../assets/about/qiye2.png" />
				<img src="../../assets/about/qiye3.png" />
				<img src="../../assets/about/qiye4.png" />
				<img src="../../assets/about/qiye5.png" />
			</div>
			<div style="height: 5rem;"></div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Advantage from '@/components/advantage.vue';

export default {
	name: 'home',
	components: {
		Advantage
	},
	data(){
		return{
			advantagelist:[
				{
					img1:require("../../assets/about/chanpin2.png"),
					img2:require("../../assets/about/chanpin1.png"),
					title:"产品团队",
					etitle:"Product team",
					content:"一直专注极致感受的产品设计，一切以“用户体验”为中心，以匠人的精神追求完美让生活变得更美好。",
					title1:"产品团队",
					etitle1:"Product team",
					content1:"一直专注极致感受的产品设计，一切以“用户体验”为中心，以匠人的精神追求完美让生活变得更美好。"
				},
				{
					img1:require("../../assets/about/zhaoshang2.png"),
					img2:require("../../assets/about/zhaoshang1.png"),
					title:"售后团队",
					etitle:"After sales team",
					content:"提供24小时售后支持，为您保驾护航，不用担心出现问题无法解决。",
					title1:"售后团队",
					etitle1:"After sales team",
					content1:"提供24小时售后支持，为您保驾护航，不用担心出现问题无法解决。"
				},
				{
					img1:require("../../assets/about/shichang2.png"),
					img2:require("../../assets/about/shichang1.png"),
					title:"市场团队",
					etitle:"Marketing team",
					content:"我们的市场团队不仅是销售的精英，更是服务的翘楚，我们更注重客户以及用户的整体感受，为了他们做更好的服务！",
					title1:"市场团队",
					etitle1:"Marketing team",
					content1:"我们的市场团队不仅是销售的精英，更是服务的翘楚，我们更注重客户以及用户的整体感受，为了他们做更好的服务！"
				},
				{
					img1:require("../../assets/about/jishu2.png"),
					img2:require("../../assets/about/jishu1.png"),
					title:"技术团队",
					etitle:"Technical",
					content:"公司的核心技术团队汇聚了大批优秀的技术人员，专注于专业性和开放性的技术研发。",
					title1:"技术团队",
					etitle1:"Technical",
					content1:"公司的核心技术团队汇聚了大批优秀的技术人员，专注于专业性和开放性的技术研发。"
				}
			],
			title:'公司团队',
			content:"COMPANY TEAM"
		}
	},
	created() {}
};
</script>

<style lang="stylus" scoped>

.t-l
	text-align left
.mainimg
	img
		width 100%
.bgc-pink{
	background: #F7F7F7;
}
.template
	.template1
		font-size 2.5rem
		font-weight 500
		color #333333
		margin-top 2.5rem
	.template2
		font-size 1rem
		color #333333
		margin-top 1.25rem
	.template3
		padding 0 20.9375rem 1.875rem
		font-size: 1.5rem;
		color: #333333;
		text-align left
		line-height 2
	.template4
		width 78.125rem
		margin 0 auto
		font-size: 1.5rem;
		color: #333333;
		text-align left
		line-height 2.85rem
	.template5
		padding  0 18.125rem
		img{
			width: 16.25rem;
			background: #999999;
			border-radius: 0.1875rem;
			margin-right 0.9375rem
		}
		img:nth-last-child(1){
			margin-right 0rem
		}
</style>
