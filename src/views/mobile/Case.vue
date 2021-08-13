<template>
	<div class="container">
		<!-- 案例展示主图 -->
		<div class="mainimg">
			<img src="../../assets/case/bannermobile.png">
		</div>
		<!-- 八张图 -->
		<div class="model-title flex-left">
			<div class="green-line"></div>
			<div >实际引流案例</div>
		</div>
		<div class="imgs">
			<div class="imgcotent ">
				<div class="imgcotent-1" v-for="(item,index) in list" :key="index">
					<img class="fengmian" :src="item.img">
					<img class="play" @click="play(item,index)" src="../../assets/case/bofang.png" />
					<p>{{item.title}}</p>
				</div>
			</div>
		</div>
		<div class="mask flex-center" v-if="id" @click="close()">
			<video autoplay="autoplay" class="video-type " controls :id="id">
				<source :src="url" type="video/mp4" />
			</video>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				url:'',
				id:'',
				list:[
					{
						mp4:'https://sanyijiu.oss-cn-beijing.aliyuncs.com/gzh/%E5%88%9D%E5%BF%83(1).mp4',
						img:require("../../assets/case/chuxin.png"),
						title:'小时候的浙江味道',
						id:'video1'
					},
					{
						mp4:'https://sanyijiu.oss-cn-beijing.aliyuncs.com/gzh/%E4%B9%9D%E6%9C%88%20%E4%BA%BA%E5%A3%B0.mp4',
						img:require("../../assets/case/tianpins.png"),
						title:'治愈系的小甜品',
						id:'video2'
					},
					{
						mp4:'https://sanyijiu.oss-cn-beijing.aliyuncs.com/gzh/%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E.mp4',
						img:require("../../assets/case/mixuebingcheng.png"),
						title:'蜜雪冰城甜蜜蜜',
						id:'video3'
					},
					{
						mp4:'https://sanyijiu.oss-cn-beijing.aliyuncs.com/gzh/%E7%87%95%E7%AA%9D.mp4',
						img:require("../../assets/case/yamwo.png"),
						title:'燕窝的生存之道',
						id:'video4'
					},
					{
						mp4:'https://sanyijiu.oss-cn-beijing.aliyuncs.com/gzh/%E6%98%9F%E5%B7%B4%E5%85%8B%20%E4%BA%BA%E5%A3%B0.mp4',
						img:require("../../assets/case/kafei.png"),
						title:'一杯咖啡的方案',
						id:'video5'
					},
					{
						mp4:'https://sanyijiu.oss-cn-beijing.aliyuncs.com/gzh/elusive%20%E6%A1%88%E4%BE%8B%20-%20%E5%A4%8D%E4%BB%B6.mp4',
						img:require("../../assets/case/elusive.png"),
						title:'elusive家上新啦',
						id:'video6'
					}
				],
			}
		},
		mounted() {
			layui.use('form', function(){
			  var form = layui.form;
			});
		},
		methods:{
			close(){
				this.id = "";
			},
			play(item,index){
				let obj = this;
				obj.id = item.id;
				obj.url = item.mp4;
				// console.log(obj.id,obj.url,'obj.id')
				// var myVideo=document.getElementById(obj.id);
				// console.log(myVideo,'myVideo')
				// if (myVideo.paused){
				// 	myVideo.play(); 
				// }else{
				// 	myVideo.pause(); 
				// } 
				// this.timer = setTimeout(()=>{  //设置延迟执行
					
				// },500);
				
				
				
			},
		}
	}
</script>

<style lang="less" scoped>

.mask { 
	width: 46.875rem;
    background-color: rgba(0,0,0,.5,.8);
    position: fixed;
    // opacity: 0.8;
    z-index: 999999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	.video-type{
	 	width: 43.75rem;
	 }
	 img{
	 	position: absolute;
	 	top: 8rem;
	 	left: 21rem;
	 	width: 5rem;
	 }
}
.container{
	.mainimg{
		img{
			width: 46.875rem;
			height: 17.5rem;
		}
	}
	.model-title{
		padding: 1.875rem 2.5rem 1.25rem;
		font-size: 1.875rem;
		font-weight: 500;
	}
	.green-line{
		width: 0.25rem;
		height: 1.875rem;
		background: #009A70;
		margin-right: 0.3125rem;
	}
	.imgs{
		padding: 0 2.5rem;
		.imgcotent{
			display: flex;
			flex-wrap:wrap;
			.imgcotent-1{
				width: 20rem;
				position: relative;
				.fengmian{
					width: 20rem;
					height: 12.5rem;
				}
				.play{
					position: absolute;
					top: 3.625rem;
					left: 7.25rem;
					width: 5rem;
					height: 5rem;
				}
				p{
					padding: 0.875rem 0 1.25rem;
					text-align: center;
					font-size: 1.375rem;
					color: #333333;
				}
				.ci{
					width: 20rem;
					// height: 12.5rem;
				}
				.img1{
					
				}
			}
			.imgcotent-1:nth-child(2n+1){
				margin-right: 1.875rem;
			}
		}
	}
	
}
</style>
