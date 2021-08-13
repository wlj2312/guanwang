<template>
	<div class="container">
		<div class="img" >
			<img src="../../assets/new/xinwen001.png" />
		</div>
		<div class="title1">热烈欢迎！</div>
		<div class="title1">杭州市归国华侨联合会领导莅临指导工作</div>
		<div class="title2 m-t50">6月23日，杭州市归国华侨联合会副主席陶晓亮、经科部部长李孟波等领导一行莅临北美浙江华侨联盟高端人才交流中心科技项目成果转化中心（中国·杭州代表处）、元载科技有限公司总部考察调研。</div>
		<div class="title2 m-t50">杭州市归国华侨联合会副主席陶晓亮、李孟波部长等领导一行对元载公司进行了实地考察调研，在周总等高层领导的陪同带领下，大家共同参观了公司运营产品展示区、新型发明专利展示区等。</div>
		<div class="title2 m-t50">在座谈交流会上，元载科技公司周建宏总经理首先简要介绍了公司目前发展情况、公司核心技术产品及各项目资金来源等；北美浙江华侨联盟高端人才交流中心朱婕会长对陶主席一行莅临项目成果转化中心调研指导表示热烈欢迎，并介绍了中心科技项目成果转化情况，以及中心与科学家们加强合作的新思路、新模式。</div>
		<div class="title2 m-t50">陶晓亮副主席、李孟波部长等领导对项目成果转化中心在全方位、多元化、多领域的智慧科技创新发展给予高度评价，陶副主席表示将在近期会同相关部门领导再次前来对中心的科技项目成果转化技术创新板块内容进行深层次的调研。</div>
		<div class="title2 m-t50">最后，周总代表元载科技再一次感谢杭州市归国华侨联合会各位领导莅临公司指导，并表示：此次杭州市归国华侨联合会领导的来访，进一步坚定了公司项目成果转化创新的理念和思路，元载科技将坚持自主创新，踏实做好科技成果转化服务工作，为高质量创新发展、构建新发展格局作出更大贡献！</div>
		<div class="img" >
			<img src="../../assets/new/img01.jpg" />
		</div>
		<div class="img" >
			<img src="../../assets/new/img02.jpg" />
		</div>
		<div class="title3">2021/06/24</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			img:require("../../assets/new/xinwen001.png"),
		}
	},
	created() {
		console.log(this.$store.state.isfooter,'this.$store.state.isfooter')
	},
	mounted() {
	},
	beforeUnmount(){
	}
}
</script>

<style lang="less" scoped>
.footer{
	display: none;
}
.container{
	background-color: #FFFFFF;
	padding: 0 7.75rem 0 6rem;
	.img{
		padding: 5rem 4.375rem 2rem 6.25rem;
		img{
			width: 22.5rem;
			height: 13.75rem;
		}
	}
	.img3{
		padding: 3.125rem 4.0625rem 1.375rem;
		img{
			width: 26.25rem;
			height: 17.5rem;
		}
	}
	.title1{
		font-size: 1.75rem;
		font-weight: bold;
		color: #333333;
		line-height: 2.375rem;
		text-align: center;
	}
	.title2{
		font-size: 1.5rem;
		color: #666666;
		line-height: 2.0625rem
	}
	.title3{
		font-size: 1.25rem;
		color: #666666;
		margin-top: 2.5rem;
		text-align: right;
	}
}
</style>
