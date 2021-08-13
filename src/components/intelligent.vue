<template>
	<div class='container'>
		<!-- 主流推广-短视频新风口 -->
		<div class="title flex-left"><div class="green-line"></div>主流推广-短视频新风口</div>
		<div class="">
			<div  v-for="(item,index) in spreadlist" :key="index">
				<div class="flex-left">
					<div class="model m-t30" v-for="(items,indexs) in item.spredlist1" :key="indexs">
						<div class="model-title flex-left">
							<div class="green-round"></div>
							<div >{{items.title}}</div>
						</div>
						<div class="content ellipsis">{{items.content}}</div>
					</div>
				</div>
				<div class="flex-left">
					<div class="model m-t30" v-for="(items,indexs) in item.spredlist2" :key="indexs">
						<div class="model-title flex-left">
							<div class="green-round"></div>
							<div >{{items.title}}</div>
						</div>
						<div class="content ellipsis">{{items.content}}</div>
					</div>
				</div>
				<div class="flex-left">
					<div class="model m-t30" v-for="(items,indexs) in item.spredlist3" :key="indexs">
						<div class="model-title flex-left">
							<div class="green-round"></div>
							<div >{{items.title}}</div>
						</div>
						<div class="content ellipsis">{{items.content}}</div>
					</div>
				</div>
			</div>
			
		</div>
		
		<!-- 视频营销系统 -->
		<div class="title flex-left"><div class="green-line"></div>视频营销系统</div>
		<div class=" ">
			<div  v-for="(item,index) in videolist" :key="index">
				<div class="flex-left">
					<div class="model m-t30" v-for="(items,indexs) in item.videolist1" :key="indexs">
						<div class="model-title flex-left">
							<div class="green-round"></div>
							<div >{{items.title}}</div>
						</div>
						<div class="content ellipsis">{{items.content}}</div>
					</div>
				</div>
				<div class="flex-left">
					<div class="model m-t30" v-for="(items,indexs) in item.videolist2" :key="indexs">
						<div class="model-title flex-left">
							<div class="green-round"></div>
							<div >{{items.title}}</div>
						</div>
						<div class="content ellipsis">{{items.content}}</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="tem2 m-t30">
			<img src="../assets/service/img08.png"/>
		</div> -->
		
		<!-- 商家营销活动 -->
		<div class="title flex-left"><div class="green-line"></div>商家营销活动</div>
		<div class="flex-left tem1">
			<div class="model2 m-t30"  v-for="(item,index) in merchantslist" :key="index">
				<div class="merchants-title">{{item.title}}</div>
				<div class="contents">{{item.content}}</div>
			</div>
		</div>
		<!-- <div class="tem3 m-t30">
			<img src="../assets/service/img09.png"/>
		</div> -->
		
		<!-- 用户使用流程 -->
		<div class="title flex-left"><div class="green-line"></div>用户使用流程</div>
		<div class="flex-left tem1">
			<div class="user-model m-t50" v-for="(item,index) in userlist" :key="index">
				<div class="text-img flex-center" >
					<div class='text-img-1'>
						<img src='../assets/service/pen.png' />
						<div class="text-img-text">0{{index+1}}</div>
					</div>
				</div>
				<div class="model3 m-t40">
					<div class="contents">{{item.content}}</div>
				</div>
			</div>
		</div>
		<!-- <div class="tem4 m-t30">
			<img src="../assets/service/img10.png"/>
		</div> -->
		
		<!-- 全行业适用 -->
		<div class="title flex-left">
			<div class="green-line"></div>
			全行业适用
		</div>
		<div class="industry-model flex-space-between tem5  m-b30">
			<div class="industry">
				<img src="../assets/service/img11.png" />
				<div>丽人</div>
			</div>
			<div class="industry">
				<img src="../assets/service/img12.png" />
				<div>休闲娱乐</div>
			</div>
			<div class="industry">
				<img src="../assets/service/img13.png" />
				<div>餐饮</div>
			</div>
			<div class="industry">
				<img src="../assets/service/img14.png" />
				<div>酒店</div>
			</div>
			<div class="industry">
				<img src="../assets/service/img15.png" />
				<div>教育</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			spreadlist:[
				{
					"spredlist1":[
						{
							"title":"抖音推广",
							"content":"超低成本实现高倍曝光,用户辐射“亲朋好友”,增加曝光信任感,事半功倍"
						},
						{
							"title":"快手推广",
							"content":"推广霸屏，顾客直接将推广视频发送给'好友'，简单一步轻松搞定"
						}
					],
					"spredlist2":[
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
						}
					],
					"spredlist3":[
						{
							"title":"AI智能剪辑系统",
							content:"根据上传的素材智能剪辑成不同且完整的视频素材，精炼体验好"
						}
					]
				},
			],
			videolist:[
				{
					"videolist1":[
						{
							"title":"LBS精准曝光",
							"content":"顾客扫码发布视频，显示店铺位置，视频会在店铺附近曝光，引流新客"
						},
						{
							"title":"老客户裂变曝光",
							"content":"客户扫码发布视频，曝光给通讯录的朋友以粉丝，完成裂变曝光"
						},
						{
							"title":"高倍曝光",
							"content":"一个客户扫一次码浏览量约500次，100个码即可为5w次浏览量"
						}
					],
					"videolist2":[
						{
							"title":"运营支持",
							content:"24小时客服在线回复*专业服务团队*专业的营销方案"
						}
					]
				},
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
	mounted() {
		
	}
}
</script>

<style scoped>
.container{
	margin: 0px 14.65rem;
}
.industry-model{
	padding: 0 1.75rem;
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
.model{
	padding: 2.5rem 2.1875rem 2.5rem;
	background: #FFFFFF;
	border: 0.0625rem solid #F7F7F7;
	box-shadow: 0px 0.375rem 0.625rem 0rem rgba(153, 153, 153, 0.2);
	border-radius: 0.125rem;
	margin-right: 1.625rem;
}
.model2{
	text-align: center;
	box-shadow: -0.0625rem -0.4375rem 0.5rem 0rem rgb(99 100 100 / 6%), 0.4375rem 0.4375rem 0.5rem 0rem rgb(99 100 100 / 10%);
	-webkit-box-shadow: -0.0625rem -0.4375rem 0.5rem 0rem rgb(99 100 100 / 6%), 0.4375rem 0.4375rem 0.5rem 0rem rgb(99 100 100 / 10%);
	padding:1.125rem 1.25rem 1.875rem;
	border-radius: 0.1875rem;
	margin-right: 1.25rem;
}
.model3{
	text-align: left;
	box-shadow: -0.0625rem -0.4375rem 0.5rem 0rem rgb(99 100 100 / 6%), 0.4375rem 0.4375rem 0.5rem 0rem rgb(99 100 100 / 10%);
	-webkit-box-shadow: -0.0625rem -0.4375rem 0.5rem 0rem rgb(99 100 100 / 6%), 0.4375rem 0.4375rem 0.5rem 0rem rgb(99 100 100 / 10%);
	padding:1.125rem 1.25rem 1.875rem;
	border-radius: 1.25rem;
	margin-right: 0.8125rem;
}
.merchants-title{
	font-size: 1.875rem;
	color: #009A70;
	margin-bottom: 1.625rem;
	width: 18.125rem;
}
.model-title{
	font-size: 1.875rem;
	font-weight: 500;
	letter-spacing: 0.3125rem;
}
.content{
	font-size: 1.25rem;
	width: 24.625rem;
	font-weight: 500;
	color: #999999;
	margin-top: 0.675rem;
	letter-spacing: 0.2125rem;
}
.contents{
	width:19.1rem;
	height: 4rem;
	font-size: 1.275rem;
	color: #999999;
	line-height: 2.625rem;
	text-align: left;
	letter-spacing: 0rem;
}
.green-round{
	width: 0.7375rem;
	height: 0.7375rem;
	background: #009A70;
	border-radius: 50%;
	margin-right: 0.625rem;
}
.green-line{
	width: 0.25rem;
	height: 2.625rem;
	background: #009A70;
	margin-right: 0.5rem;
	border-radius: 0.4375rem;
}

.title{
	font-size: 2.25rem;
	font-weight: 500;
	margin-top: 1.125rem;
}
</style>
