<template>
	<div class="container">
		<div class="first flex-center m-t30">
			<div class="first-1 flex-center">
				<img class="first-img" src="../assets/service/img18.png">
				<div >
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
						<p >构建一个</p>
						<p class="text-green">完整智能家居生态</p>
						<p >布局</p>
					</div>
					<div class="text3">做更懂你的生活智能，服务千家万户</div>
					
				</div>
			</div>
		</div>
		<div class="first2 flex-center m-t90">
			<div class="first-1 flex-space-around">
				<div >
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
		<div class="first3 flex-center ">
			<div class="first-1 flex-space-around">
				<img class="three-img" src="../assets/service/img17.png">
				<div class="three-text">
					<div class="text1">团队优势</div>
					<!-- <div class="green-line"></div> -->
					<!-- <div class="text2">让智能离我们更近</div> -->
					<div class="text3 flex-left" >
						<div class="green-round"></div>
						<div class="letter-spacing0">
							<p class="text-green">专业的研发团队</p>
							<p >，用产品-体验碰撞出各种使用场景，站在</p>
							<p class="text-green">用户角度</p>
						</div>
					</div>
					<div class="text3 text-indent1">
						<p>研发优化，做到最舒适、自然，个性化</p>
					</div>
					<div class="text3 flex-left" >
						<div class="green-round"></div>
						<div class="letter-spacing0">
							<p >产品团队秉着优质、严谨的态度</p>
							<p class="text-green">甄选</p>
							<p >所有商品的产地、工艺、原材料</p>
						</div>
					</div>
					<div class="text3 flex-left" >
						<div class="green-round"></div>
						<p >让我们的生活变得充满“智慧”，让一切</p>
						<p class="text-green">生活智能化</p>
					</div>
					<div class="text3 flex-left" >
						<div class="green-round"></div>
						<p >无需破坏原本物品的架构，</p>
						<p class="text-green">简单安装</p>
						<p >，即可轻松享受智能生活</p>
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

<style scoped>
.line-hight{
	line-height: 0rem;
}
.container{
	letter-spacing: 0.225rem;
}
.letter-spacing0{
	letter-spacing: -0.1rem;
}
.text1{
	font-size: 2.875rem;
	color: #333333;
}
.text2{
	font-size: 2.375rem;
	color: #666666;
	line-height: 2;
}
.text3{
	font-size: 1.875rem;
	color: #999999;
}
p{
	display: inline;
}
.text-green{
	font-size: 1.875rem;
	color: #009A70;
	line-height: 3.4375rem;
}
.green-line{
	width: 5rem;
	height: 0.25rem;
	background: #009A70;
	border-radius: 0.4375rem;
}
.green-round{
	width: 0.9375rem;
	height: 0.9375rem;
	background: #009A70;
	border-radius: 50%;
	margin-right: 0.625rem;
}
#nav{
	width: 100%;
}
.text-indent1{
	text-indent:1em;
}
.first-img{
	width:35.5rem;
	margin-right: 4.375rem;
}
.two-img{
	width:42.9375rem;
	margin-left: 12.8125rem;
}
.three-img{
	width:35.625rem;
	margin-right: 2.5rem;
}
.three-text{
	width:55rem;
}
.first{
	background:url(../assets/service/tuanduibj.png) no-repeat; 
	padding:  7.5rem 16.5625rem 3.4375rem 16.25rem;
	background-size:100% 32.6875rem;
}
.first2{
	background:url(../assets/service/zhihui2bj.png) no-repeat;
	background-size:100% 36.25rem;
}
.first3{
	letter-spacing: 0rem;
	background:url(../assets/service/tuanduibj.png) no-repeat; 
	padding: 10.3125rem 10.9375rem 9.5rem 14.0625rem;
	background-size:100% 42.5rem;
}
.first-1{
}
</style>
