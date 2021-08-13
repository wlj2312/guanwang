<template>
	<div class="screen">
		<!-- 案例展示主图 -->
		<div class="mainimg">
			<img src="../../assets/screen/mbanner.png">
		</div>
		<!-- 八张图 -->
		<div class="imgs">
			<div class="text m-b20 flex-left">
				<div class="green-line"></div>
				<div>影视</div>
			</div>
			<div class="imgcotent flex-space-between">
				<div class="container" >
					<img class="img1" src="../../assets/screen/01.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>影视01</p>
				</div>
				<div class="container" >
					<img class="img1" src="../../assets/screen/02.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>影视02</p>
				</div>
			</div>
			<div class="imgcotent flex-space-between">
				<div class="container" >
					<img class="img1" src="../../assets/screen/03.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>影视03</p>
				</div>
				<div class="container" >
					<img class="img1" src="../../assets/screen/04.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>影视04</p>
				</div>
			</div>
			<div class="text m-b20 flex-left">
				<div class="green-line"></div>
				<div>文化</div>
			</div>
			<div class="imgcotent flex-space-between">
				<div class="container" >
					<img class="img1" src="../../assets/screen/wen01.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>文化01</p>
				</div>
				<div class="container" >
					<img class="img1" src="../../assets/screen/wen02.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>文化02</p>
				</div>
			</div>
			<div class="imgcotent flex-space-between">
				<div class="container" >
					<img class="img1" src="../../assets/screen/wen03.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>文化03</p>
				</div>
				<div class="container" >
					<img class="img1" src="../../assets/screen/wen04.png"/>
					<img class="img2" src="../../assets/case/bofang.png" />
					<p>文化04</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		methods:{
			
		},
	}
</script>

<style lang="less" scoped>
.screen{
	letter-spacing: 0rem;
}
/* 案例展示主图 */
.mainimg img{
	width: 46.875rem;
	height: 17.5rem;
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
	padding:1.875rem 2.5rem 0;
}
.text{
	text-align: left;
	font-size: 1.75rem;
	color: #333333;
}
.green-line{
	width: 0.25rem;
	height: 1.875rem;
	background-color: #3FAB8D;
	margin-right: 0.3125rem;
}
.container{
	position: relative;
}
.container p{
	font-size: 1.375rem;
	color: #333333;
	opacity: 0.8;
	padding:1.125rem 0 1.25rem;
	text-align: center;
}
.img1 {
	width: 20rem !important; 
	height:12.5rem !important;
	position: relative !important;
}
.img2{
	width: 5rem !important;
	height: 5rem !important;
	position: absolute !important;
	left: 7.5rem !important;
	top: 3.75rem !important;
}

</style>
