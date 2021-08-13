<template>
	<div id="nav">
		<div class="text">优质好物&nbsp;&nbsp;&nbsp;&nbsp;替您甄选</div>
		<div class='content '>
			<div class="flex-center p-b150" v-for="(item,index) in list" :key="index" :class="Number.isInteger(index/2)? '' : 'flex-row-reverse' ">
				<img :class="Number.isInteger(index/2)? 'products2' : 'products1'"  :src="item.img" />
				<div class="content-text">
					<div class="text-green">{{item.title}}</div>
					<div class="text-gray">{{item.content}}</div>
					<img class="icon" src="../assets/search/6.png"/>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default{
	data(){
		return{
			list:[
				{
					title:'专注调理“暗淡肌”',
					content:'每一次呼吸都是氧化的过程，皮肤无法代谢多余的自由基抗氧补水至关重要！苏莱曼美颜靓肤面膜3重玻尿酸，积雪草精粹修复屏障，舒缓修缮肌肤问题，抵御外界伤害',
					img:require("../assets/search/1.png")
				},
				{
					title:'让停车找车不再是难题',
					content:'道路停车系统、停车场管理系统、诱导信息管理系统、停车云大数据实现泊位实时监控、报表统计、停车点管理等，为用户解决停车找车难题',
					img:require("../assets/search/2.png")
				},
				{
					title:'让睡眠更加轻松',
					content:'5000+开放式【透气孔】，能够排出人体多余热量及潮气，保持干爽舒适的睡眠环境，解决睡眠闷/湿/热，远离螨虫，透气舒适',
					img:require("../assets/search/3.png")
				},
				{
					title:'轻生活，深睡眠',
					content:'泰国天然乳胶被，轻松人体工学改善睡眠三部曲，深度放松肌肉，提升睡眠舒适度，调整全身状态，来自泰国王室的睡眠体验',
					img:require("../assets/search/4.png")
				},
				{
					title:'夏季最好的陪伴',
					content:'C+凉感乳胶凉席含纳米级玉石粉末，凉而不冰，清爽透气，加速排汗，让您清凉一夏，把季节最舒适的感觉送给你',
					img:require("../assets/search/5.png")
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
#nav{
	background-color: #F7F7F7;
	background-image: url(../assets/service/xinxuanbei.png);
	background-size:100%;
	z-index: -100;
	
}
.text{
	font-size: 2.875rem;
	color: #333333;
	text-align: center;
	padding: 8.125rem 0;
}
.content{
	width: 80%;
	margin: 0 auto;
	
}
.products1{
	width: 23.75rem;
	margin-left: 6rem;
}
.products2{
	width: 23.75rem;
	margin-right: 6rem;
}
.icon{
	width: 4.6875rem;
	height: 4.6875rem;
	position: absolute;
	top: -1.25rem;
	right: 6.25rem;
}
.content-text{
	background: #FFFFFF;
	padding:4rem 2.1875rem 3.75rem;
	box-shadow: 0px 0.625rem 1.875rem 0px rgba(16, 124, 91, 0.08);
	border-radius: 0.625rem;
	position: relative;
}
.text-gray{
	width: 50.625rem;
	font-size: 1.75rem;
	color: #999999;
	line-height: 3.4375rem;
	letter-spacing: 0.1125rem;
}
.text-green{
	font-size: 2.375rem;
	color: #009A70;
	margin-bottom: 0.6rem;
}
</style>
