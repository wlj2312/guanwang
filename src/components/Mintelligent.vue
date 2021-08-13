<template>
	<div class='container'>
		<!-- 主流推广-短视频新风口 -->
		<div class="title flex-left"><div class="green-line"></div>主流推广-短视频新风口</div>
		<div class="m-b20 flex-wrap ">
			<div class="video-model flex-space-between" v-for="(item,index) in spreadlist" :key="index">
				<div>
					<div class="model-title flex-left">
						<div class="green-round"></div>
						<div >{{item.title}}</div>
					</div>
					<div class="content ">{{item.content}}</div> <!-- ellipsis -->
				</div>
				<div class="vertical-line" v-if="index%2 == 0"></div>
			</div>
		</div>
		
		<!-- 视频营销系统 -->
		<div class="title1 flex-left"><div class="green-line"></div>视频营销系统</div>
		<div class="model1  flex-left" v-for="(items,indexs) in videolist" :key="indexs">
			<div class="model-title m-r20 flex-left">
				<div class="green-round"></div>
				<div >{{items.title}}</div>
			</div>
			<div class="content">{{items.content}}</div>
		</div>
		<!-- 商家营销活动 -->
		<div class="title2">商家营销活动</div>
		<div class="model2 flex-wrap">
			<div :class="isgreens == index ?  'model2-2 m-b30' :'model2-1 m-b30' "  v-for="(item,index) in merchantslist" :key="index" @click="isgreen(index)">
				<div class="merchants-title">{{item.title}}</div>
				<div class="contents">{{item.content}}</div>
			</div>
		</div>
		
		<!-- 用户使用流程 -->
		<div class="user flex-center">
				<div class="huiline"></div>
				<div class="bor-hui">用户使用流程</div>
				<div class="huiline"></div>
		</div>
		<div class="user-model flex-right">
			<div class="user-title">扫完1步操作即可</div>
			<div class="m-l240">
				<div class="user-title">覆盖客户</div>
				<div class="user-content1">抖音/快手锁定周边流量，占领抖音/快手同城视频页</div>
			</div>
		</div>
		<div class="time-line">
			<div class="line"></div>
			<div class="rounds flex-left">
				<div class="green-round m-l45"></div>
				<div class="green-round m-l160"></div>
				<div class="green-round m-l150"></div>
				<div class="green-round m-l177"></div>
			</div>
		</div>
		<div class="user-model flex-left">
			<div class="m-r170">
				<div class="user-title">到店扫码</div>
				<div class="user-content2">顾客到店消费用抖音或快手扫商家活动二维码</div>
			</div>
			<div>
				<div class="user-title">一键领券</div>
				<div class="user-content3">领取商家优惠券/礼品券/菜品券</div>
			</div>
		</div>
		
		
		<!-- 全行业适用 -->
		<div class="title3">
			全行业适用
		</div>
		<div class="industry-model">
			<img src="../assets/service/shiyong.png" />
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isgreens:0,
			spreadlist:[
				{
					"title":"抖音推广",
					"content":"超低成本实现高倍曝光，实现用户辐射“亲朋好友”，增加曝光信任感，事半功倍"
				},
				{
					"title":"快手推广",
					"content":"推广霸屏，顾客直接将推广视频发送其“好友”，简单一步轻松搞定"
				},
				{
					"title":"视频营销系统",
					content:"承接抖音快手、快手、微信数亿数据，助理商家快速曝光推广"
				},
				{
					"title":"全员营销码",
					content:"商家只需一个营销码，即可辐射N个客户的速度开启老客户裂变营销之旅"
				},
				{
					"title":"自主营销系统",
					content:"智能系统分析编辑优化，每条都是爆款"
				},
				{
					"title":"AI智能剪辑系统",
					content:"根据上传的素材智能剪辑成不同且完整的视频素材，精炼体验好"
				}
			],
			videolist:[
				{
					"title":"LBS精准曝光",
					"content":"顾客扫码发布视频，显示店铺精准位置，视频会在店铺附近曝光，引流新顾客到店消费"
				},
				{
					"title":"老客户裂变",
					"content":"客户扫码发布视频，曝光给通讯录的朋友以及关注自己的粉丝，完成裂变曝光"
				},
				{
					"title":"高倍曝光",
					"content":"一个客户扫一次码浏览量约500次，100个码即可为5w次浏览量"
				},
				{
					"title":"运营支持",
					content:"24小时客服在线回复*专业服务团队*专业的营销方案"
				}
			],
			merchantslist:[
				{
					"title":"创建营销",
					"content":"TON319App 创建活动页面开始营销"
				},
				{
					"title":"审核优化",
					"content":"TON319自主运营系统智能编辑优化视频，符合用户浏览习惯"
				},
				{
					"title":"查看素材",
					"content":"TON319活动编辑处查看宣传视频"
				},
				
				{
					"title":"引入私域营销",
					"content":"引入私域营销（锁定周边/用户的朋友引入消费，导入私域流量）"
				}
			],
			userlist:[
				{
					"content":"到店扫码（顾客到店消费用抖音或快手扫商家活动二维码）"
				},
				{
					"content":"1步操作（扫完1步操作即可）"
				},
				{
					"content":"一键领券（领取商家优惠券/礼品券/菜品券）"
				},
				{
					"content":"覆盖客户（抖音/快手锁定周边流量，占领抖音/快手同城视频页）"
				}
			],
		}
	},
	methods:{},
	mounted() {},
	methods:{
		isgreen(index){
			this.isgreens = index;
		}
	}
}
</script>

<style lang="less" scoped>
.container{
	.title{
		margin: 1.875rem 1.6875rem 0;
		font-size: 1.75rem;
		color: #333333;
	}
	.title1{
		margin: 0.625rem 1.6875rem 0;
		font-size: 1.75rem;
		color: #333333;
	}
	.title2{
		margin: 1.9625rem 0 1.625rem;
		font-size: 1.75rem;
		color: #333333;
		text-align: center;
	}
	.title3{
		margin: 2.5rem 0 1.25rem;
		font-size: 1.75rem;
		color: #333333;
		text-align: center;
	}
	.vertical-line{
		width: 0.1875rem;
		height: 3.75rem;
		background-color: #F1F1F1;
		margin-left: 1.5625rem;
	}
	.video-model{
		padding: 1.45rem 0.775rem 1.15rem 2.525rem;
		.model-title{
			font-size: 1.625rem;
			color: #333333;
		}
		.content{
			font-size: 1.375rem;
			width: 18.25rem;
			color: #999999;
			margin-top: 0.675rem;
			line-height: 1.725rem;
		}
	}
	.green-round{
		width: 0.625rem;
		height: 0.625rem;
		background: #009A70;
		border-radius: 50%;
		margin-right: 0.625rem;
	}
	.model1{
		padding: 1rem 1.6875rem;
		border-radius: 0.125rem;
		margin-right: 1.625rem;
		.model-title{
			font-size: 1.625rem;
			color: #333333;
			width: 13.0625rem;
			height: 4.45rem;
			background: #F1F1F1;
			border: 0.0625rem solid #F7F7F7;
			border-radius: 0.125rem;
			padding-left: 1rem;
		}
		.content{
			font-size: 1.375rem;
			width: 25.8125rem;
			color: #999999;
			line-height: 1.725rem;
		}
	}
	.model2{
		padding: 0 1.6875rem;
		.model2-1{
			padding: 1.25rem 1.65rem;
			background: #FFFFFF;
			box-shadow: 0px 0.375rem 0.625rem 0px rgba(153, 153, 153, 0.2);
			border-radius: 0.125rem;
			.merchants-title{
				font-size: 1.875rem;
				color: #009A70;
				margin-bottom: 0.625rem;
				text-align: center;
			}
			.contents{
				width:18.125rem;
				font-size: 1.375rem;
				color: #999999;
				line-height: 1.6875rem;
				text-align: left;
				letter-spacing: 0rem;
			}
		}
		.model2-1:nth-child(2n+1){
			margin-right: 0.625rem;
		}
		.model2-2{
			padding: 1.25rem 1.65rem;
			background: linear-gradient(-45deg, #009A70 0%, #83EDD0 100%);
			box-shadow: 2px 3px 8px 0px rgba(104, 11, 21, 0.25);
			border-radius: 0.125rem;
			.merchants-title{
				font-size: 1.875rem;
				color: #FFFFFF;
				margin-bottom: 0.625rem;
				text-align: center;
			}
			.contents{
				width:18.125rem;
				font-size: 1.375rem;
				color: #FFFFFF;
				line-height: 1.6875rem;
				text-align: left;
				letter-spacing: 0rem;
			}
		}
	}
	.user{
		margin-top: 1.875rem;
		.huiline{
			width: 8rem;
			height: 0.125rem;
			background-color: #f0f0f0;
		}
		.bor-hui{
			font-size: 1.875rem;
			color: #333333;
			padding: 0.625rem 1.5625rem;
			border: 0.0625rem solid  #f0f0f0;
			border-radius: 0.3125rem;
		}
	}
	.user-model{
		font-size: 1.125rem;
		color: #999999;
		line-height: 1.75rem;
		padding: 0 4.375rem 0 2.3125rem;
		margin: 1.65rem 0 0.625rem;
		.m-l240{
			margin-left: 15rem;
		}
		.m-r170{
			margin-right: 10.625rem;
		}
		.user-title{
			font-size: 1.25rem;
			color: #333333;
			width: 5.875rem;
		}
		.user-content1{width: 10rem;}
		.user-content2{width: 8.75rem;}
		.user-content3{width: 12.25rem;}
	}
	.time-line{
		margin: 0.625rem 0 1.5625rem;
		
		.line{
			width: 46.6875rem;
			height: 0.125rem;
			background-color:#f0f0f0 ;
			margin: 0 auto;
		}
		.rounds{
			width: 46.875rem;
			height: 0.25rem;
			margin-top: -0.3125rem;
		}
		.m-l45{margin-left: 3.2125rem;}
		.m-l160{margin-left: 9.6rem;}
		.m-l150{margin-left: 9.375rem;}
		.m-l177{margin-left: 10.6625rem;}
	}
	.industry-model{
		padding: 0 1.6875rem 2.5rem;
		img{
			width: 43.125rem;
			height: 18.75rem;
		}
	}
}

.industry{
	width: 14.75rem;
	display: inline-block;
	text-align: center;
	font-size: 1.825rem;
	margin-top: 1.875rem;
}
.industry img{
	width: 100%;
}
.text-img{
	
}
.text-img-1{
	position: relative;
}
.text-img img{
	width: 3.1875rem;
	height: 1.3125rem;
	font-size: 1.875rem;
}
.text-img-text{
	font-size: 1.875rem;
	color: #333333;
	position: absolute;
	top: -0.9rem;
	left:1.1rem;
}





.green-line{
	width: 0.25rem;
	height:2.5rem;
	background: #009A70;
	margin-right: 0.5rem;
	border-radius: 0.4375rem;
}



</style>
