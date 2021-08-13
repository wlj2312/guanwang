<template>
	<div >
		<!-- 案例展示主图 -->
		<div class="mainimg">
			<img src="../../assets/screen/banner.png">
		</div>
		<!-- 八张图 -->
		<div class="imgs">
			<div class="text m-t10">影视</div>
			<div class="imgcotent flex-space-between">
				<div class="container" v-for="(item,index) in list">
					<img class="img1" :src="item.img1"/>
					<img class="img2" :src="item.play" />
					<p>{{item.title}}</p>
				</div>
			</div>
			<div class="text">文化</div>
			<div class="imgcotent flex-space-between m-t30">
				<div class="container" v-for="(item,index) in lists">
					<img class="img1" :src="item.img1"/>
					<img class="img2" :src="item.play" />
					<p>{{item.title}}</p>
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
						img1:require("../../assets/screen/01.png"),
						play:require("../../assets/case/bofang.png"),
						title:'影视01'
					},
					{
						img1:require("../../assets/screen/02.png"),
						play:require("../../assets/case/bofang.png"),
						title:'影视02'
					},
					{
						img1:require("../../assets/screen/03.png"),
						play:require("../../assets/case/bofang.png"),
						title:'影视03'
					},
					{
						img1:require("../../assets/screen/04.png"),
						play:require("../../assets/case/bofang.png"),
						title:'影视04'
					}
				],
				lists:[
					{
						img1:require("../../assets/screen/wen01.png"),
						play:require("../../assets/case/bofang.png"),
						title:'文化01'
					},
					{
						img1:require("../../assets/screen/wen02.png"),
						play:require("../../assets/case/bofang.png"),
						title:'文化02'
					},
					{
						img1:require("../../assets/screen/wen03.png"),
						play:require("../../assets/case/bofang.png"),
						title:'文化03'
					},
					{
						img1:require("../../assets/screen/wen04.png"),
						play:require("../../assets/case/bofang.png"),
						title:'文化04'
					}
				],
			}
		},
		methods:{
			
		},
	}
</script>

<style scoped>
/* 案例展示主图 */
.mainimg img{
	width: 100%;
}
.text{
	font-size: 2.3rem;
	color: #333333;
	text-align: left;
	padding: 3.75rem 0 2.5rem;
}
.layui-form-label{
	width: 5rem;
	font-size: 1.25rem;
	color: #333333;
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
	color: rgba(0,0,0,.85);
	border: none;
}

/* 八张图 */
.imgs{
	padding:0 22.5rem 6.25rem;
}
.imgcotent .container:nth-child(4){
	margin-right: 0rem;
}
.img1{
	width: 16.25rem;
	height: 10.625rem;
	position: relative;
}
.img2{
	width: 5rem;
	height: 5rem;
	/* margin-top: -10.125rem; */
	position: absolute;
	left: 6.5rem;
	top: 3.5rem;
}
.container{
	/* width: 17.5rem;
	height: 13.75rem; */
	background: #4AB89B;
	margin-right: 1.625rem;
	padding: 0.625rem 0.625rem 0;
	position: relative;
}
.container p{
	font-size: 1.125rem;
	color: #FFFFFF;
	opacity: 0.8;
	padding:0.625rem 0;
}

.flex-space-around{
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
