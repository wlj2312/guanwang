<template>
	<div id="nav">
		<div class="content">
			
			<!-- 专注调理“暗淡肌” -->
			<div class="content-title flex-center">
					<div class="huiline"></div>
					<div class="bor-hui">专注调理“暗淡肌”</div>
					<div class="huiline"></div>
			</div>
			<div class="text-gray">每一次呼吸都是氧化的过程，皮肤无法代谢多余的自由基，抗氧补水至关重要！苏莱曼美颜靓肤面膜3重玻尿酸，积雪草精粹修复屏障，舒缓修缮肌肤问题，抵御外界伤害</div>
			<img class="icon1" src="../assets/service/mianmo.png"/>
			<!-- 让停车找车不再是难题 -->
			<div class="content-title flex-center">
					<div class="huiline"></div>
					<div class="bor-hui">让停车找车不再是难题</div>
					<div class="huiline"></div>
			</div>
			<div class="text-gray">道路停车系统、停车场管理系统、诱导 信息管理系统、停车云大数据实现泊位实时 监控、报表统计、停车点管理等，为用户解决停车找车难题</div>
			<img class="icon2" src="../assets/service/zhinnegjiankong.png"/>
			<!-- 让睡眠更加轻松 -->
			<div class="content-title flex-center">
					<div class="huiline"></div>
					<div class="bor-hui">让睡眠更加轻松</div>
					<div class="huiline"></div>
			</div>
			<div class="text-gray">5000+开放式【透气孔】，能够拍出人体多余热量及潮气，保持干爽舒适的睡眠环境，解决睡眠闷/湿/热，远离螨虫，透气舒适</div>
			
			<div class="icon3">
				<img class="icon3-1" src="../assets/service/chuandian.png"/>
				<div class="icon6">
					<img class="icon6-1" src="../assets/service/lvsebj.png"/>
				</div>
			</div>
			
			
			
			
			
			
			<!-- 轻生活，深睡眠 -->
			<div class="content-title flex-center">
					<div class="huiline"></div>
					<div class="bor-hui">轻生活，深睡眠</div>
					<div class="huiline"></div>
			</div>
			<div class="text-gray">泰国天然乳胶被，轻松人体工学改善睡眠三部曲，深度放松肌肉，提升睡眠舒适度，调整全身状态，来自泰国王室的睡眠体验</div>
			<img class="icon4" src="../assets/service/beizi.png"/>
			
			<div class="content-title flex-center">
					<div class="huiline"></div>
					<div class="bor-hui">夏季最好的陪伴</div>
					<div class="huiline"></div>
			</div>
			<div class="text-gray">C+凉感乳胶凉席含纳米级玉石粉末，凉而不冰，清爽透气，加速排汗，让您清凉一夏，把季节最舒适的感觉送给你</div>
			<img class="icon5" src="../assets/service/liangxi.png"/>
			
			<div class="text-black">更多优质好物 尽在叁壹玖App</div>
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

<style lang="less" scoped>
.content{
	text-align: center;
	z-index: 0;
}
.content-title{
	margin: 1.875rem 1.875rem;
	.huiline{
		width: 8.125rem;
		height: 0.125rem;
		background-color: #f0f0f0;
	}
	.bor-hui{
		font-size: 1.75rem;
		color: #666666;
		padding: 0.625rem 1.5625rem;
		border: 0.0625rem solid  #f0f0f0;
		border-radius: 0.3125rem;
	}
}
.text-gray{
	font-size: 1.5rem;
	color: #999999;
	line-height: 2.75rem;
	width: 34.125rem;
	text-align: center;
	margin: 0 auto;
	letter-spacing:0.2rem;
}
.text-black{
	font-size: 1.25rem;
	color: #333333;
	margin: 2.9rem 0 1.875rem;
}
.icon1{
	width: 28.125rem;
	margin-top: -4rem;
}
.icon2{
	width: 16.25rem;
}
.icon3{
	position: relative;
	.icon3-1{
		width:30.9375rem ;
		margin: 2.5rem 0;
	}
	.icon6{
		width: 46.875rem;
		position: absolute;
		z-index: -10;
		top: -10rem;
		.icon6-1{
			width: 46.875rem;
		}
		
	}
	
}
.icon4{
	width: 28.125rem;
	margin: 0.625rem 0;
}
.icon5{
	width:34.375rem ;
	margin: 1.25rem 0;
}

</style>
