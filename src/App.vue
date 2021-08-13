<template>
	<div id="app" v-if="!this._isMobile()">
		<Pcheader></Pcheader>
		<router-view />
		<Pcfooter></Pcfooter>
	</div>
	<div id="app1" v-else>
		<Mheader ></Mheader>
		<router-view />
		<Mfooter></Mfooter>
	</div>
</template>
<script>
import Pcheader from '../src/components/pcheader.vue';
import Pcfooter from '../src/components/pcfooter.vue';
import Mheader from '../src/components/mheader.vue';
import Mfooter from '../src/components/mfooter.vue';

export default {
	name: 'home',
	data(){
		return{
		}
	},
	components: {
		Pcheader,
		Pcfooter,
		Mheader,
		Mfooter
	},
	created(){
	},
	watch:{
	},
	mounted() {
		console.log(1)
		if (this._isMobile()) {
		  // 移动端首页路由
		  this.$router.replace('/mobile/home');
		  // require('./mobile.css')
		  let computed = function () {
		    //=>DES-W:设计稿宽度 DEV-W:设备的宽度
		    //设计稿宽度：750
		    let desW = 750;
		    let devW = document.documentElement.clientWidth;
		     document.documentElement.style.fontSize = devW / desW * 16+ 'px';
		  };
		  computed();
		  window.addEventListener('resize', computed, false);
		  
		}else {
		  // pc端首页路由
		  this.$router.replace('/');
		  // require('./pc.css')
		  let computed = function () {
		    //=>DES-W:设计稿宽度 DEV-W:设备的宽度
		    //设计稿宽度：1920
		    let desW = 1920;
		    let devW = document.documentElement.clientWidth;
		    if(devW > 1200){
		  	  document.documentElement.style.fontSize = devW / desW * 16+ 'px';
		  	  console.log(devW / desW * 10 + 'px')
		    }
		  };
		  computed();
		  window.addEventListener('resize', computed, false);
		}
	},
	methods: {
		_isMobile(){
		  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
		  return flag;
		},
		
	},
	
};
</script>
<style lang="less">
.clamp{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: block;
}
	
.oneline{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
}
	
.ellipsis{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.threeline{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}
	
.fiveline{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient :vertical;
	-webkit-line-clamp :5;
}
	
.sevenline{
	overflow: hidden;
	text-overflow:ellipsis;
	display :-webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 8;
}
	
.flex-left{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.flex-wrap{
	display: flex;
	flex-wrap:wrap;
}

.flex-column-center{
	display: flex;
	flex-direction:column;
	align-items: center;
}	
.flex-right{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
	
.flex-center{
	display: flex;
	justify-content: center;
	align-items: center;
}
	
.flex-sx-center{
	display: flex;
	align-items: center;
}
	
.flex-space-between{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
	
.flex-between-start{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
	
.flex-space-around{
	display: flex;
	justify-content :space-around;
	align-items :center;
}
	
.flex-start-start{
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
	
.flex-row-reverse{
	flex-direction: row-reverse;
}
	
.p-t30{padding-top: 1.875rem;}
	
.p-t60{padding-top: 3.75rem;}
	
.p-t70{padding-top: 4.375rem;}
	
.p-b30{padding-bottom: 1.875rem;}
	
.p-b150{padding-bottom: 9.375rem;}

.m-b10{margin-bottom: 0.625rem;}
	
.m-b20{margin-bottom: 1.25rem;}
	
.m-b30{margin-bottom :1.875rem;}
.m-b40{margin-bottom :2.5rem;}
.m-b70{margin-bottom: 4.375rem;}
	
.m-b80{margin-bottom: 5rem;}
	
.m-b180{margin-bottom: 11.25rem;}
	
.m-t10{margin-top: 0.625rem;}
.m-t20{margin-top: 1.25rem;}
.m-t25{margin-top: 1.5625rem;}

.m-t30{margin-top: 1.875rem;}
	
.m-t40{margin-top: 2.5rem;}
	
.m-t50{margin-top: 3.125rem;}
	
.m-t60{margin-top: 3.75rem;}
	
.m-t80{margin-top: 5rem;}
	
.m-t90{margin-top: 5.625rem;}
	
.m-t100{margin-top: 6.25rem;}
	
.m-t170{margin-top: 10.625rem;}

.m-r20{margin-right: 1.25rem;}
.m-r100{margin-right: 6.375rem;}
	
.m-l20{margin-left: 1.25rem;}
</style>