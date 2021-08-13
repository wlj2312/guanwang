<template>
	<div class="scrive">
		<div class="mainimg">
			<img  src="../../assets/service/banne1.png" />
		</div>
		<div class="content">
			<div class="content-header flex-space-between">
				<div class="header-3" v-for="(item,index) in headerlist" :key="index" @click="active(index)">
					<div :class="{ header4 : index == isactive}">
						<div>{{item}}</div>
					</div>
				</div>
			</div>
			<Mintelligent v-if='isactive == 0'></Mintelligent>
			<Mwisdom v-else-if="isactive == 1"></Mwisdom>
			<Mheartselection v-else></Mheartselection>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Mintelligent from '@/components/Mintelligent.vue'
import Mwisdom from '@/components/Mwisdom.vue'
import Mheartselection from '@/components/Mheartselection.vue'

export default {
  name: 'home',
  components: {
    Mintelligent,
	Mwisdom,
	Mheartselection
  },
  data(){
	return{
		choose:true,//是否选中
		headerlist:['智能推广','智慧+','心选商城'],
		isactive:0,
	}  
  },
  created() {
	  if(this.$route.query.isactive){
		  this.isactive = this.$route.query.isactive;
	  }
  },
  methods:{
	  active(index){
		  this.isactive = index;
	  }
  }
}
</script>

<style lang="less" scoped>
.scrive{
	.mainimg{
		padding: 0 1.875rem;
		img{
			width: 43.125rem;
		}	
	}
	.content{
		.content-header{
			padding: 1.625rem 0.9375rem 0;
			.header-3{
				width: 33%;
				font-size: 2rem;
				color: #999999;
				text-align: center;
			}
			.header4{
				width: 13.75rem;
				height: 3.75rem;
				background-color: #F1F1F1;
				font-size: 2.25rem;
				color: #009A70;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
 
.layui-tab{
	margin: 0px 0;
}
.layui-tab-title {
	padding: 0 10%;
	text-align: center;
	height: 6.875rem;
	border: none;
	-moz-box-shadow: 0rem 0.125rem 0.125rem #c9c9c9;
	-webkit-box-shadow: 0rem 0.125rem 0.125rem #c9c9c9;
	box-shadow: 0rem 0.125rem 0.125rem #c9c9c9;
}
.layui-tab-title li {
	font-size: 2.5rem;
	font-weight: 300;
	color: #666666;
	min-width: 30%;
	min-height: 6.875rem;
	line-height: 6.875rem;
}
.layui-tab-title .layui-this:after {
	height: 6.875rem;
}
.layui-tab-content{
	
	padding: 0rem;
}
.layui-tab-item{
	width: 100%;
}
.layui-tab-brief > .layui-tab-title .layui-this {
	font-size: 2.5rem;
	font-weight: 300;
	color: #666666;
}
.layui-tab-brief > .layui-tab-more li.layui-this:after,
.layui-tab-brief > .layui-tab-title .layui-this:after {
	border-bottom: 0.25rem solid #009a70;
}
</style>
