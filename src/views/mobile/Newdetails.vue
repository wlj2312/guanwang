<template>
	<div class="container">
		<div class="img" v-if="img">
			<img :src="img" />
		</div>
		<div class="img3" v-if="img1">
			<img :src="img1" />
		</div>
		<div class="title1">{{title1}}</div>
		<div class="title1">{{title2}}</div>
		<div class="title2 m-t50">{{content}}</div>
		<div class="title2" v-if="content1">{{content1}}</div>
		<div class="title3">{{time}}</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			img:require("../../assets/new/xinwen001.png"),
			img1:'',
			title1:'',
			title2:'',
			content:'',
			content1:'',
			time:''
		}
	},
	created() {
		console.log(this.$store.state.isfooter,'this.$store.state.isfooter')
	},
	mounted() {
		this.img = this.$route.query.img;
		this.img1 = this.$route.query.img1;
		this.title1 = this.$route.query.title1;
		this.title2 = this.$route.query.title2;
		this.content = this.$route.query.content;
		if(this.$route.query.content1){
			this.content1 = this.$route.query.content1;
		}
		
		this.time = this.$route.query.time;
	},
	beforeUnmount(){
		this.$store.state.isfooter = true;
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
