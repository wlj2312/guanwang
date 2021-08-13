<template>
	<div class="container">
		<div class="first flex-left m-t30">
			<div class="first-1 flex-center l-2">
				<img class="first-img" src="../assets/service/img18.png">
				<div class="first-text">
					<div class="text1">智慧+</div>
					<div class="green-line"></div>
					<div class="text2">帮助一亿个家庭拥有爱的能力</div>
					<div class="text3">
						元载科技智慧+
						<p class="text-green">多维度</p>
						<p>实现智能化</p>
					</div>
					<div class="text3">
						<p class="text-green">物联网</p>
						<p >+</p>
						<p class="text-green">场景</p>
						<p >+</p>
						<p class="text-green">技术</p>
					</div>
					<div class="text3">
						<p >构建</p>
						<p class="text-green">完整智能家居生态</p>
						<p >布局</p>
					</div>
					<div class="text3">做更懂你的生活智能，服务千家万户</div>
					
				</div>
			</div>
			<div class="back-img">
				<img class="back" src="../assets/service/zhihuibeijing.png" />
			</div>
		</div>
		
		<div class="first2  m-t80">
			<div class="first-1 flex-left">
				<div class="m-l50 l-2">
					<div class="text1">智慧+</div>
					<div class="green-line"></div>
					<div class="text2">让智能离我们更近</div>
					<div class="flex-left text3 " v-for="(item,index) in list1">
						<div class="green-round"></div>
						<div class="text-green">{{item.text1}}</div>
						<div>&nbsp;-&nbsp;{{item.text2}}</div>
					</div>
				</div>
				<img class="two-img" src="../assets/service/img19.png">
			</div>
		</div>
		
		<div class="first3 m-t80">
			<div class="first-1 flex-space-around m-b40 m-t50">
				<img class="three-img" src="../assets/service/img17.png">
				<div class="three-text">
					<div class="text5">团队优势</div>
					<div class="text4 flex-start-start" >
						<div class="green-round1"></div>
						<div class="text4-1">
							<p class="text-green1">专业研发团队</p>
							<p >，用产品-体验碰撞出</p>
							<p>使用场景，站在</p>
							<p class="text-green1">用户角度</p>
							<p>研发优化</p>
						</div>
					</div>
					<!-- <div class="text4 flex-start-start" >
						<div class="green-round1"></div>
						<div class="text4-1">
							<p >产品团队秉着优质、严谨的态度</p>
							<p class="text-green1">甄选</p>
							<p >商品的产地、工艺、原材料等</p>
						</div>
					</div> -->
					<div class="text4 flex-start-start" >
						<div class="green-round1"></div>
						<div class="text4-1">
							<p >让我们的生活变得充满“智慧”，让一切</p>
							<p class="text-green1">生活智能化</p>
						</div>
					</div>
					<div class="text4 flex-start-start" >
						<div class="green-round1"></div>
						<div class="text4-1">
							<p >无需破坏原本物品的架构，</p>
							<p class="text-green1">简单安装</p>
							<p >，即可轻松享受智能生活</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default{
	name: 'new',
	components: {},
	data(){
		return {
			list1:[
				{
					text1:"智慧城市",
					text2:'让城市更智能'
				},
				{
					text1:"智慧出行",
					text2:'让出行更智能'
				},
				{
					text1:"智慧健康",
					text2:'让健康更智能'
				},
				{
					text1:"智慧家居",
					text2:'让家居更智能'
				},
				{
					text1:"智慧安防",
					text2:'让安防更智能'
				}
			]
		}
	},
	methods:{
		
	},
	mounted() {
	}
}
</script>

<style lang="less" scoped>
.line-hight{
	line-height: 0rem;
}
.m-l50{
	margin-left: 3.25rem;
}
.container{
	letter-spacing: 0.125rem;
	.first{
		position: relative;
	}
}
.letter-spacing0{
	letter-spacing: -0.1rem;
	width: 19.5rem;
}
.text1{
	font-size: 1.625rem;
	color: #333333;
}
.text2{
	font-size: 1.5rem;
	color: #666666;
}
.text3{
	font-size: 1.375rem;
	color: #999999;
}
.text4{
	font-size: 1.25rem;
	color: #999999;	
	line-height:1.3;
}
.text5{
	font-size: 1.5rem;
	color: #333333;	
	margin-bottom: 0.625rem;
}
.text4-1{
	width: 20rem;
	line-height: 1.9rem;
}
p{
	display: inline;
}
.text-green{
	font-size: 1.375rem;
	color: #009A70;
}
.text-green1{
	font-size: 1.25rem;
	color: #009A70;
}
.l-2{
	line-height: 2rem;
}
.green-line{
	width: 3.125rem;
	height: 0.1875rem;
	background: #009A70;
	border-radius: 0.4375rem;
}
.green-round{
	width: 0.5rem;
	height: 0.5rem;
	background: #009A70;
	border-radius: 50%;
	margin: 0.225rem 0.625rem 0 0;
}
.green-round1{
	width: 0.5rem;
	height: 0.5rem;
	background: #009A70;
	border-radius: 50%;
	margin: 0.625rem 0.625rem 0 0;
}
#nav{
	width: 100%;
}
.text-indent1{
	text-indent:1em;
}
.first-img{
	width:17rem;
	margin-left: 1.875rem;
}
.first-text{
	margin-left: 1rem;
}
.two-img{
	width:17.5rem;
	margin-left:3.875rem;
}
.three-img{
	width:20.25rem;
	margin:0  1rem 0 1.625rem;
}
.three-text{
	width:55rem;
	letter-spacing: 0rem;
	padding-right: 0.625rem;
}
.back-img{
	position: absolute;
	top: 3rem;
	z-index: -10;
}
.back{
	width: 46.875rem;
	height: 35.625rem;
}
.first-3{
	line-height: 1;
}
</style>
