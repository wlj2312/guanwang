<template>
	<div class="container">
		
		<div class="mainimg"><img src="../../assets/about/banner.jpg" /></div>
		<!-- 关于元载 -->
		<div class="template flex-space-between">
			<div class="template-left">
				<img src='../../assets/about/img01.png' />
			</div>
			<div class="template-right">
				<div class="template-right-1 ">关于元载</div>
				<div class="template-right-2" @click="navto()">
					<p class="text">杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，
					获得国家多项知识产权专利。 我们基于目前国内的通过第五代移动通信技术（5th Generation Mobile Communication Technology简称5G）
					重点支持低时延高可靠业务，实现对5G车联网、工业互联网等应用的支持......</p>
					<p class="tips">查看全文</p>
				</div>
			</div>
		</div>
		
		<!-- 公司团队 -->
		<Mobileadvantage :list="advantagelist"  :title="title"></Mobileadvantage>
		<!-- 企业文化 -->
		<div class="templates bgc-pink">
			<div class="template1 p-t10">企业文化</div>
			<div class="template2 m-b30">corporate culture</div>
			<div class="template4 ">
				<div class="template4-1 m-b20">企业文化：我们一直秉承着优化社会资源、打造美好生活的理念，紧密结合时代科技，运用信息技术实现万物相息，
				以“帮助一亿个家庭拥有爱的能力”为己任，助力每个微小个体打造元载版的幸福生活方案。</div>
				<div class="m-b20">公司使命：用科技打造智慧幸福生活，传播有价值的思想</div>
				<div class="m-b20">愿景：帮助一亿个家庭拥有爱的能力</div>
				<div class="m-b20">价值观：爱国敬业 创新共享 诚信利他</div>
			</div>
		</div>
		<!-- 企业风采 -->
		<div class="templates">
			<div class="template1 p-30-16">企业风采</div>
			<!-- <div class="template2 m-b30">corporate culture</div> -->
			<div class="template5">
				<img src="../../assets/about/qiyefengcai.png" />
			</div>
		</div>
	</div>
</template>

<script>
import Mobileadvantage from '../../components/mobileadvantage.vue';

export default {
	name: 'home',
	components: {
		Mobileadvantage
	},
	data(){
		return{
			img1:require("../../assets/about/img04.png"),
			title1:'关于元载',
			content:'杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，获得国家多项知识产权专利。',
			content1:'我们基于目前国内的通过第五代移动通信技术（5th Generation Mobile Communication Technology简称5G）重点支持低时延高可靠业务，实现对5G车联网、工业互联网等应用的支持。运用我们的大数据、AI智能、区块链、云计算、物联网等自主知识产权的前沿科技模块，个人生态链将大大的得到快速落地应用，涵盖了用户管理UMS（GPS+BD）系统、Life Service System系统、Medical data interaction系统、体系生态环境，CCS云计算系统，填补国内全面链接数据链物联管理的空白。固定看板、云计算、互动交互承接了用户的需求以及精准化数据并完成相应的行为自动识别，形成万亿个个人生态圈。',
			time:"2021/06/23",
			advantagelist:[
				{
					img1:require("../../assets/about/chanpin2.png"),
					img2:require("../../assets/about/chanpin1.png"),
					title:"产品团队",
					// etitle:"Product team",
					content:"一直专注极致感受的产品设计，一切以“用户体验”为中心，以匠人的精神追求完美让生活变得更美好。",
					title1:"产品团队",
					etitle1:"Product team",
					content1:"一直专注极致感受的产品设计，一切以“用户体验”为中心，以匠人的精神追求完美让生活变得更美好。"
				},
				{
					img1:require("../../assets/about/zhaoshang2.png"),
					img2:require("../../assets/about/zhaoshang1.png"),
					title:"售后团队",
					// etitle:"After sales team",
					content:"提供24小时售后支持，为您保驾护航，不用担心出现问题无法解决。",
					title1:"售后团队",
					etitle1:"After sales team",
					content1:"提供24小时售后支持，为您保驾护航，不用担心出现问题无法解决。"
				},
				// {
				// 	img1:require("../../assets/about/shichang2.png"),
				// 	img2:require("../../assets/about/shichang1.png"),
				// 	title:"市场团队",
				// 	etitle:"Marketing team",
				// 	content:"我们的市场团队不仅是销售的精英，更是服务的翘楚，我们更注重客户以及用户的整体感受，为了他们做更好的服务！",
				// 	title1:"市场团队",
				// 	etitle1:"Marketing team",
				// 	content1:"我们的市场团队不仅是销售的精英，更是服务的翘楚，我们更注重客户以及用户的整体感受，为了他们做更好的服务！"
				// },
				{
					img1:require("../../assets/about/jishu2.png"),
					img2:require("../../assets/about/jishu1.png"),
					title:"技术团队",
					// etitle:"Technical",
					content:"公司的核心技术团队汇聚了大批优秀的技术人员，专注于专业性和开放性的技术研发。",
					title1:"技术团队",
					etitle1:"Technical",
					content1:"公司的核心技术团队汇聚了大批优秀的技术人员，专注于专业性和开放性的技术研发。"
				}
			],
			title:'公司团队'
		}
	},
	created() {},
	methods:{
		navto(){
			this.$router.push({path:'/mobile/newdetails',query:{img1:this.img1,title1:this.title1,content:this.content,content1:this.content1,time:this.time}});
		}
	}
};
</script>

<style lang="less" scoped>
.container{
	.mainimg{
		img{
			width:46.875rem;
			height:17.5rem;
		}
	}
	.bgc-pink{
		background-color: #F7F7F7;
	}
	.templates{
		margin-top: 1.875rem;
		padding: 1.25rem 0 0;
		.p-30-16{
			padding:  1.875rem 0 1rem 0;
		}
		.p-t10{
			padding-top: 0.625rem;
		}
		.template1{
			font-size: 1.75rem;
			color: #000000;
			text-align: center;
		}
		.template2{
			font-size: 1.25rem;
			color: #B1B0B0;
			text-align: center;
		}
		.template4{
			padding: 0 4.375rem 2.5rem 3.75rem;
			font-size: 1.375rem;
			color: #333333;
			.template4-1{
				line-height:2rem;
			}
		}
		.template5{
			padding: 0 1.75rem 1.875rem 1.75rem;
			img{
				width: 43.125rem;
				height: 37.25rem;
			}
		}
	}
	.template{
		padding: 1.875rem 2.0625rem 0 1.75rem;
		
		
		.template-left{
			img{
				width: 14.25rem;
				height: 17.5rem;
				margin-right: 0.625rem;
			}
		}
		.template-right{
			.template-right-1{
				font-size: 1.75rem;
				font-weight: bold;
				color: #333333;
				margin-bottom: 0.625rem;
			}
			.template-right-2 .text{
				font-size: 1.25rem;
				color: #666666;
				display: inline;
			}
			.tips{
				font-size: 1.375rem;
				color: #333333;
				display: inline;
			}
		}
	}
}


</style>
