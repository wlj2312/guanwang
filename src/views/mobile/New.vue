<template>
	<div class="container">
		<div class="mainimg">
			<img src="../../assets/new/xixunbanne1.png">
		</div>
		<div class="model-title flex-left">
			<div class="green-line"></div>
			<div >新闻资讯</div>
		</div>
		<div class="template">
			<div class="template6 flex-space-around " v-for="(item,index) in list" @click="navto(item.path)">
				<img class="l-imgs" :src="item.img" />
				<div class='right'>
					<div class='title2 ellipsis'>{{item.content}}</div>
					<div class='title3 m-t40'>{{item.time}}</div>
				</div>
			</div>
			<div class="xixi flex-center"><button class="anniu">下一页</button></div>
		</div>
		
	</div>
</template>

<script>
export default{
	name: 'new',
	components: {},
	data(){
		return {
			list:[
				{
					img:require("../../assets/new/img03.jpg"),
					title1:'热烈欢迎！',
					title2:'杭州市归国华侨联合会领导莅临指导工作',
					content:'希望通过这个项目，全面带动余杭区等片区开发，产生“引进一个项目、形成一个总部基地、更好的解决商户推广难”的综合效益。',
					time:'2021/08/06',
					path:'https://mp.weixin.qq.com/s/-lFqYADn6w-ee89N_MylaQ'
				},
				{
					img:require("../../assets/new/xinwen001.png"),
					title1:'热烈欢迎！',
					title2:'杭州市归国华侨联合会领导莅临指导工作',
					content:'6月23日，杭州市归国华侨联合会副主席陶晓亮、经科部部长李孟波等领导一行莅临北美浙江华侨联盟高端人才交流中心科技项目成果转化中心（中国·杭州代表处）、元载科技有限公司总部考察调研。',
					time:'2021/06/24',
					path:'https://mp.weixin.qq.com/s/WRWC6MWaNSXLDB-abVuEJQ'
				},
				{
					img:require("../../assets/new/xinwen002.png"),
					title1:'精诚合作共赢未来丨',
					title2:'元载TON319服务商签约仪式盛大举行！',
					content:'为了促进通过科技赋能和商业模式创新，进一步推动“助力每个微小个体打造元载版的幸福生活方案”，为帮助B端商户提供整体解决方案，降低商户推广成本做出积极的贡献，2021年6月22日下午，张总对元载科技进行考察，并进行服务商合作签约仪式。',
					time:'2021/06/23',
					path:'https://mp.weixin.qq.com/s/nF-y9_AIQNVPWddhlY3HfQ'
				},
				{
					img:require("../../assets/new/xinwen003.png"),
					title1:'TON319同城推广码',
					title2:'助力商户抢占流量红海！',
					content:'传统的宣传方式，不管是代金券还是小礼物，通常是把活动印在宣传单页上发给路人，导致了虽然商家用心做了活动印了宣传单页，但是客流量还是不理想。',
					time:'2021/06/21',
					path:'https://mp.weixin.qq.com/s/uzYUb8dVBau4IgwYthJSQA'
				},
				{
					img:require("../../assets/new/xinwen004.png"),
					title1:'元载科技，专注为B端商户',
					title2:'提供整体解决方案的服务系统',
					content:'杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发及落地应用，获得国家多项知识产权专利。 旗下【TON319】承接抖音、快手、微信等主流媒体的数亿数据，通过科技赋能和商业模式创新进行营销推广，是一家为B端商户提供整体解决方案的服务系统。',
					time:'2021/05/21',
					path:'https://mp.weixin.qq.com/s/SBEbC9gv0knCWCU87WcoSQ'
				}
			]
		}
	},
	methods:{
		navto(path){
			// console.log(item,'item')
			// this.$router.push({path:path});
			window.location.href= path;
		}
	},
	mounted() {
		
	}
}
</script>

<style lang="less" scoped>
.mainimg{
	img{
		width:46.875rem;
	}	
}
.model-title{
	padding: 1.875rem 2.5rem 1.25rem;
	font-size: 1.875rem;
	font-weight: 500;
	background-color: #FAFAFA;
}
.green-line{
	width: 0.25rem;
	height: 1.875rem;
	background: #009A70;
	margin-right: 0.3125rem;
}
.template{
	padding: 0 1.875rem;
	background-color: #FAFAFA;
	.template6{
		padding: 1.25rem;
		background-color: #FFFFFF;
		margin-bottom: 1rem;
		.l-imgs{
			width: 16.25rem;
			height: 10rem;
			margin-right: 1.875rem;
		}
		.right{
			font-size: 1.5rem;
			color: #666666;
			.title2{
				line-height: 2.125rem;
			}
			.title3{
				text-align: right;
			}
		}
	}
	.xixi{
		padding: 0.9375rem 0 2.1875rem;
		.anniu{
			font-size: 1.25rem;
			font-weight: bold;
			color: #666666;
			background-color: #FFFFFF;
			border: none;
			padding: 0.925rem 1.3375rem;
		}
	}
}




.m-t40{
	margin-top:3.4rem;
}
.m-t30{
	margin-top:1.5rem;
}

</style>
