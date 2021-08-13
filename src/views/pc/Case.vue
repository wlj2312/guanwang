<template>
	<div >
		<!-- 案例展示主图 -->
		<div class="mainimg">
			<img src="../../assets/case/banner.png">
		</div>
		<!-- 八张图 -->
		<div class="imgsss">
			<div class="imgcotent flex-center">
				<div class="container" v-for="(item,index) in list">
					<img class="img5" :src="item.img1"/>
					<img class="img6" :src="item.play" />
					<p>{{item.title}}</p>
				</div>
			</div>
			<div class="imgcotent flex-center p-t60">
				<div class="container" v-for="(item,index) in lists">
					<img class="img5" :src="item.img1"/>
					<img class="img6" :src="item.play" />
					<p>{{item.title}}</p>
				</div>
			</div>
		</div>
		<!-- 虚线 -->
		<div class="hackhome-1"></div>
		<!-- 获取方案 -->
		<div class="scheme">
			<div class="scheme-title">获取方案</div>
			<div class="text flex-left">
				<div class="green-line"></div>
				<p>Access to solutions</p>
			</div>
			<div class="flex-space-between m-t90">
				<div class="layui-form-item flex-left ">
				    <label class="layui-form-label">姓名：</label>
				    <div class="layui-input-inline">
				      <input type="text" name="name" style="font-size: 1.25rem;" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
				    </div>
				</div>
				<div class="layui-form-item flex-left ">
				    <label class="layui-form-label">号码：</label>
				    <div class="layui-input-inline">
				      <input type="text" name="photo" style="font-size: 1.25rem;" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
				    </div>
				</div>
				<div class="layui-form-item flex-left ">
				    <label class="layui-form-label">邮箱：</label>
				    <div class="layui-input-inline">
				      <input type="text" name="email" style="font-size: 1.25rem;" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
				    </div>
				</div>
			</div>
			<div class="message m-t90  layui-form-item flex-sx-center">
			    <label class="layui-form-label">请留言：</label>
			    <div class="layui-input-inline">
			      <input type="text" name="photo" style="font-size: 1.25rem" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input">
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				list:[
					{
						img1:require("../../assets/case/shaokao.png"),
						play:require("../../assets/case/bofang.png"),
						title:'烧烤店客源解决方案'
					},
					{
						img1:require("../../assets/case/huoguo.png"),
						play:require("../../assets/case/bofang.png"),
						title:'火锅店新店激增客流量'
					},
					{
						img1:require("../../assets/case/naicha.png"),
						play:require("../../assets/case/bofang.png"),
						title:'一杯奶茶留住客户'
					},
					{
						img1:require("../../assets/case/canting.png"),
						play:require("../../assets/case/bofang.png"),
						title:'中小型餐厅的留客方案'
					}
				],
				lists:[
					{
						img1:require("../../assets/case/jiaju.png"),
						play:require("../../assets/case/bofang.png"),
						title:'生活家居解决方案'
					},
					{
						img1:require("../../assets/case/sanwenyu.png"),
						play:require("../../assets/case/bofang.png"),
						title:'三文鱼的新宠方案'
					},
					{
						img1:require("../../assets/case/tianpin.png"),
						play:require("../../assets/case/bofang.png"),
						title:'甜品新品的解决方案'
					},
					{
						img1:require("../../assets/case/jiuguan.png"),
						play:require("../../assets/case/bofang.png"),
						title:'小酒馆的新天地'
					}
				],
			}
		},
		methods:{
			
		},
		mounted() {
			layui.use('form', function(){
			  var form = layui.form;
			});
		}
	}
</script>

<style scoped>
.mainimg img{
	width: 100%;
}
.layui-form-label{
	font-size:1.25rem;
	color: #333333;
	text-align: left;
	padding: 0.625rem 0;
}
.message{
	margin-right: 0rem;
}
.layui-form-item{
	border-bottom: 0.0625rem solid #949494;
}
.layui-form-item .layui-input-inline{
	width: 14.375rem;
	
}
.layui-input, .layui-select, .layui-textarea{
	height: 2.125rem;
	color: rgba(51, 51, 51, 0.8);
	border: none;
}
/* 获取方案*/
.scheme{
	
	padding: 2.75rem 22.5rem 13.75rem;
	text-align: left;
}
.scheme-title{
	font-size: 2.25rem;
	color: #333333;
}
.text{
	padding: 0.3125rem 0;
	font-size: 1rem;
	font-weight: normal;
	color: #333333;
}
.green-line{
	width: 1.5625rem;
	height: 0.125rem;
	background: #009A70;
	margin-right: 0.625rem;
}

.hackhome-1{border-bottom:0.0625rem dashed #000; height:0.0625rem;width:80%;margin: 0 auto;}
.imgsss{
	padding: 6.875rem 0 7.1875rem;
}

.imgcotent{
	width: 100%;
	margin: 0 auto;
}
.container{
	padding: 0.625rem 0.625rem 0;
	background: #4AB89B;
	margin-right: 1.625rem;
	position: relative;
	font-size: 1.125rem;
	color: #FFFFFF;
	line-height: 1.75rem;
	opacity: 0.8;
}
.img5{
	width:16.25rem;
	position: relative;
}
.img6{
	width: 5rem;
	height: 5rem;
	position: absolute;
	left: 6.25rem;
	top: 3.4375rem;
}
.container p{
	font-size: 1.125rem;
	color: #FFFFFF;
	opacity: 0.8;
	line-height: 2;
}
.imgcotent .container:nth-child(4){
	margin-right: 0rem;
	
}
</style>
