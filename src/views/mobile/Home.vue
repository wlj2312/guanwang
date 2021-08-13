<template>
	<div class="container">
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
			<div class="template1 m-t30 m-b20">技术服务</div>
			<div class="template3 flex-space-between m-b10">
				<img  src="../../assets/home/fuli1.png" @click="nav('/mobile/service',0)"/>
				<img class="border" src="../../assets/home/fuli2.png" @click="nav('/mobile/service',1)"/>
			</div>
			<div class="template3 flex-space-between">
				<img  src="../../assets/home/fuli3.png"  @click="nav('/mobile/service',2)"/>
				<img class="border" src="../../assets/home/fuli4.png" @click="nav('/mobile/screen')"/>
			</div>
		</div>
		<!-- 关于我们 -->
		<div class="template">
			<div class="template1 m-t30 m-b20">关于我们</div>
			<div class="template4">
				<img src="../../assets/home/img12.png" />
				<div class="template4-text m-t30">
					<p>{{ustext}}</p>
					<p class="details" @click="quanweng()">{{text}}</p>
				</div>
			</div>
		</div>
		<!-- 核心优势 -->
		<div class="template">
			<div class="template1 m-t30 m-b20">核心优势</div>
			<div class="template5 flex-space-between">
				<div class="template5-1">
					<div class="template5-header">产品核心技术</div>
					<div class="template5-content">
						公司成功研究数百种具有自主知识产权和核心竞争力的产品，给用户更好的服务
					</div>
				</div>
				<div class="template5-1">
					<div class="template5-header">强大的团队</div>
					<div class="template5-content lue">
						团队成员包括一批中青年科学家、硕士、学士等科研人员,专业的研发、销售人员以及售后等团队为大家高质服务
					</div>
				</div>
			</div>
			<div class="template5 flex-space-between">
				<div class="template5-1">
					<div class="template5-header">高新技术</div>
					<div class="template5-content lue">
						我们致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，获得国家多项知识产权专利
					</div>
				</div>
				<div class="template5-1">
					<div class="template5-header">产权专利</div>
					<div class="template5-content">
						我们拥有国家高新技术认证并荣获数十项自主知识产权以及专利，国家大力扶持产业
					</div>
				</div>
			</div>
		</div>
		<!-- 新闻动态 -->
		<div class="template">
			<div class="template1 m-t30 m-b20">新闻动态</div>
			<div class="template6">
				<div class="template6-model flex-space-between m-b40">
					<img class="r-imgs" src="../../assets/home/xinwen2.png" />
					<div class="r-con  t-l">
						<div class="r-title ">精诚合作共赢未来丨元载TON319服务商签约仪式盛大举行！</div>
						<div class="r-content ellipsis">为了促进通过科技赋能和商业模式创新，进一步推动“助力每个微小个体打造元载版的幸福生活方案”，为帮助B端商户提供整体解决方案……</div>
					</div>
				</div>
				<div class="template6-model flex-space-between m-b40">
					<img class="r-imgs" src="../../assets/home/xinwen3.png" />
					<div class="r-con t-l">
						<div class="r-title  lue">元载科技-TON319,专注为B端商户提供整体解决方案的服务系统</div>
						<div class="r-content ellipsis">元载科技TON319承接抖音、快手、微信等主流媒体的数亿数据，通过科技赋能和商业模式创新进行营销推广…</div>
					</div>
				</div>
			</div>
			<div class="more m-b40 flex-center" @click="nav('/mobile/new')">
				<div>查看更多</div>
				<img src="../../assets/home/img13.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
	data(){
		return{
			text:"查看全文",
			title:'核心优势',
			content:"Partner",
			ustext:'',//关于我们的介绍内容
			USTEXT:'介绍：杭州元载科技有限公司-致力于大数据、AI智能、区块链、云计算、物联网等前沿科技研发以及落地应用，获得国家多项知识产权专利。我们基于目前国内第五代移动通信技术（5th Generation Mobile Communication Technology简称5G）重点支持低时延高可靠业务，实现对5G互联网、工业互联网等应用的支持。运用我们的大数据、AI智能、区块链、云计算、物联网等自主知识产权的前沿科技模块，固定看板、云计算、互动交互承接了用户的需求以及精准化数据并完成相应的行为自动识别，形成万亿个个人生态圈。',
			isshow:false
		}
	},
	components: {
	},
	mounted() {
		layui.use(['carousel'], function(){
		  var carousel = layui.carousel;
		  //图片轮播
		    carousel.render({
		      elem: '#test10',
		      width: '43.125rem',
		      height: '17.5rem',
		      interval: '5000',
			  indicator:'none'
		    });
		});
		var str = this.USTEXT;
		function processStr(str,n)
		{
		    var l = str.length;
			console.log(l,'l')
		    if(l<=n) return str;
		    return str.slice(0,n)+"...";
		}
		this.ustext = processStr(str,68);
	},
	methods:{
		nav(url,index){
			 this.$router.push({path:url,query:{isactive:index}});
		},
		quanweng(){
			if(!this.isshow){
				this.ustext = this.USTEXT;
				this.isshow = !this.isshow;
				
				this.text = '收起'
			}else{
				function processStr(str,n)
				{
				    var l = str.length;
				    if(l<=n) return str;
				    return str.slice(0,n)+"...";
				}
				this.ustext = processStr(this.ustext,68);
				this.isshow = !this.isshow;
				this.text = '查看全文'
			}
			
		}
	}
};
</script>

<style lang="less" scoped>
.container{
	// background-color: #FFFFFF;
	padding: 0 1.875rem;
}
.layui-carousel{
	
	background-color: #FFFFFF;
	img{
		width:43.125rem;
		height:17.5rem;
		border-radius: 1rem;
	}
}
.template{
	.lue{
		letter-spacing: 0rem;
	}
	.more{
		font-size: 1.375rem;
		color: #666666;
		img{
			width: 0.75rem;
			height: 1.375rem;
			margin-left: 1rem;
		}
	}
	.template1{
		font-size: 1.75rem;
		font-weight: bold;
		color: #333333;
	}
	.template3{
		img{
			width: 21rem;
			height: 9.375rem;
		}
	}
	.template4{
		color: #333333;
		img{
			width: 43.125rem;
			height: 13.75rem;
			background: #000000;
			border-radius: 1rem;
		}
		.template4-text{
			font-size: 1.375rem;
			text-indent: 2em;
			line-height: 2.5rem;
			
		}
		p{
			display: inline;
		}
		.details{
			font-size: 1.5rem;
			margin-left: 1.25rem;
			font-weight: bold;
		}
	}
	.template5{
		.template5-1{
			width: 21rem;
			background: #FFFFFF;
			box-shadow: 0px 0.125rem 0.1875rem 0px rgba(0, 0, 0, 0.3);
			border-radius: 0.1875rem;
			margin-bottom: 1.25rem;
			.template5-header{
				text-align: center;
				background: #009A70;
				font-size: 1.5rem;
				color: #FFFFFF;
				border-radius:0.1875rem 0.1875rem 0 0 ;
				line-height: 3.425rem;
			}
			
			.template5-content{
				height:6rem;
				text-indent: 2em;
				padding: 0.925rem;
				font-size: 1.25rem;
				color: #808080;
				line-height: 1.2;
			}
		}
	}
	.template6{
		.template6-model{
			.r-imgs{
				width: 10rem;
				height: 6.875rem;
				border-radius: 0.625rem;
			}
			.r-con{
				width: 31.625rem;
				.r-title{
					font-size: 1.25rem;
					font-weight: bold;
					color: #333333;
					line-height: 1.8125rem;
				}
				.r-content{
					font-size: 1.125rem;
					color: #666666;
					line-height: 1.6875rem;
				}
			}
		}
	}
}
</style>
