<template>
    <div class="service">
        <div class="service-title1">
            {{title}}
        </div>
		<div class="service-title2">
			{{content}}
		</div>
        <div class="service-container flex-space-between">
			<!-- 模块 -->
            <div class="service-item" v-for="item in list " >
                <div class="service-item-common">
					<img class='img' v-if="item.img1" :src="item.img1">
                    <div class="service-item-title1">
						{{item.title}}
                    </div>
					<div class="service-item-title2 oneline">
					    {{item.etitle}}
					</div>
					<div class="service-item-title3 fiveline">
					    {{item.content}}
					</div>
                </div>
				<div class="service-item-hover">
					<img class='img' v-if="item.img2" :src="item.img2">
					<div class="service-item-title-hover1">
						{{item.title}}
					</div>
					<div class="service-item-title-hover2 clamp">
						{{item.etitle}}
					</div>
					<div class="service-item-content-hover3 fiveline">
						{{item.content}}
					</div>
				</div>
            </div>
			
        </div>
    </div>
</template>

<script>
export default{
	data(){
		return{
		}
	},
	props:{
		list:{
			type:Array
		},
		title:{
			type:String
		},
		content:{
			type:String
		}
	},
	mounted() {
	}
}
</script>

<style lang="stylus" scoped>

.service {
	width 100%
	letter-spacing 0rem
	.service-title1 {
        font-size 2.5rem
        font-weight 500
        color: #333333;
        margin-top 6.25rem
    }
	.service-title2 {
		text-align center
	    font-size: 1rem
	    font-weight: 400;
	    color: #333333;
	    opacity: 0.8;
	    line-height 2
	}
	.service-container {
		width 70%
		margin 0 auto
		margin-top: 3.75rem;
		height 24rem
	.service-item:nth-last-child(1){
		margin-right :0rem;
	}
	.service-item {
		// width 20%;
		margin: 0 2.5rem;
		background: #FFFFFF;
		border: 0.0625rem solid #009A70;
		// border-image: linear-gradient(0deg, #009A70, #41BEC9) 10 10;
		box-shadow: 0rem 0.125rem 0.1875rem 0rem rgba(0, 0, 0, 0.1);
		border-radius: 0.4375rem;
		transition: all 0.4s ease; /* 柔和过渡 */
		padding 3.125rem 2.625rem 4.5625rem
		display: flex;
		justify-content center
		
		.service-item-common {
			text-align center
			img{
				width 2.375rem
				margin-bottom 1.25rem
			}
			.service-item-title1 {
				font-size: 1.25rem;
				font-weight: 400;
				color: #009A70;
				line-height: 1.125rem;
			}
			.service-item-title2{
				font-size: 0.625rem;
				font-weight: 400;
				color: #999999;
				line-height 1.125rem
				margin: 0.9375rem 0 2.25rem;
			}
			.service-item-title3{
				margin 0 auto
				height 6.4rem
				width 9.6875rem
				font-size: 0.875rem;
				font-weight: 400;
				color: #808080;
				text-align left
			}
			
		}
		.service-item-hover {
			display: none;
		}
		.service-item-icon {
			  display: flex;
			  justify-content: center;
			  margin-top: 3.5rem;
			img {
				width 12.5rem
				height 12.5rem
			}	
		  }
	}
	.service-item:hover {
		// width 23%;
		margin: 0 2.5rem;
		background: linear-gradient(-45deg, #009A70 0%, #83EDD0 100%);
		box-shadow: 2px 3px 8px 0px rgba(104, 11, 21, 0.25);
		border-radius: 0.4375rem;
		transition: all 0.4s ease; /* 柔和过渡 */
		padding 4.375rem 4.375rem 5.625rem 
		display: flex;
		justify-content center
		.service-item-common{
			display none
		}
		.service-item-hover {
			display: block;
			img{
				width 2.375rem
				margin-bottom 1.25rem
			}
			.service-item-title-hover1 {
				font-size: 1.25rem;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 1.125rem;
			}
			.service-item-title-hover2 {
				font-size: 0.625rem;
				font-weight: 400;
				color: #FFFFFF;
				line-height 1.125rem
				margin: 0.9375rem 0 2.25rem;
			}
			.service-item-content-hover3 {
				margin 0 auto
				height 6.4rem
				width 9.6875rem
				font-size: 0.875rem;
				font-weight: 400;
				color: #FFFFFF;
				text-align left
			}
		}
	}
	.service-item:nth-child(n+2) {
	  margin-left: 0.125rem;
	}
  }
}
</style>