<template>
	<div class="footer1" v-if="$route.meta.keepAlive" >
		<div class="footer-1 flex-space-between">
			<div class="footer-1-left">
				<div class="title">联系我们</div>
				<div class="title11">CONTACT US</div>
				<div class='m-t25'>咨询热线：0571-8858-2572</div>
				<div class='m-t25'>工作时间：09：00-18:00 工作日</div>
				<div class='m-t25'>主办单位：杭州元载科技有限公司</div>
			</div>
			<div class="footer-1-right">
				<img class="gzh" src="../assets/home/img14.png" />
				<div >关注公众号</div>
			</div>
		</div>
		<div class="footer-2">
			<div>Copyright ©2020 杭州元载科技有限公司</div>
			<div class="m-t25">
				<a href="https://beian.miit.gov.cn" style="font-size: 1.375rem;" target="_blank">备案号：浙ICP备2020031269号</a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
.footer1{
	background: #F1F1F1;
	font-size: 1.375rem;
	.footer-1{
		padding: 0.9375rem  2.5rem 1.5625rem;
		.footer-1-left{
			font-size: 1.375rem;
			color: #666666;
			.title{
				color: #333333;
			}
			
			.title11{
				color: #333333;
				font-size: 1.25rem;
				letter-spacing: 0px;
				margin-top: 0.625rem;
			}
		}
		.footer-1-right{
			font-size: 1.25rem;
			text-align: center;
			.gzh{
				width: 10rem;
				height: 10rem;
				margin-bottom: 0.625rem;
			}
		}
	}
	.footer-2{
		padding: 0.9375rem 2.5rem 1.5625rem;
		background: #333333;
		opacity: 0.82;
		color: #FFFFFF;
		text-align: center;
	}
}
</style>
