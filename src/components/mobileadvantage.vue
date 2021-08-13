<template>
    <div class="service">
        <div class="service-title1 flex-center">
            <div class="gray-line"></div>
			<div class="zi">{{title}}</div>
			<div class="gray-line"></div>
        </div>
        <div class="service-container flex-space-between">
			<!-- 模块 -->
            <div class="service-item" v-for="item in list " >
                <div class="service-item-common">
					<img class='img' v-if="item.img1" :src="item.img1">
                    <div class="service-item-title1">
						{{item.title}}
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
	width:100%;
	letter-spacing 0rem
	.service-title1 {
        font-size:1.875rem;
        color: #333333;
        margin:2.5rem 0 1.525rem;
		.zi{
			margin:0 0.625rem;
		}
    }
	.gray-line{
		width: 14.0625rem;
		height: 0.0625rem;
		background: #F0F0F0;
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
		margin-top:0.625rem;
		height:17.5rem;
		padding: 0 2rem;
	.service-item:nth-last-child(1){
		margin-right :0rem;
	}
	.service-item {
		background: #FFFFFF;
		border: 0.0625rem solid #009A70;
		// border-image: linear-gradient(0deg, #009A70, #41BEC9) 10 10;
		box-shadow: 0rem 0.125rem 0.1875rem 0rem rgba(0, 0, 0, 0.1);
		border-radius: 0.4375rem;
		transition: all 0.4s ease; /* 柔和过渡 */
		padding: 2.05rem 1.025rem;
		display: flex;
		justify-content center
		
		.service-item-common {
			text-align center
			img{
				width:1.875rem;
				margin-bottom: 0.625rem;
			}
			.service-item-title1 {
				font-size: 1.25rem;
				color: #333333;
				line-height: 1.125rem;
			}
			.service-item-title3{
				margin-top:0.9375rem;
				height:7rem;
				width: 11.25rem;
				font-size: 1.125rem;
				line-height: 1.45rem;
				font-weight: 400;
				color: #808080;
				text-align: left;
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
		background: linear-gradient(-45deg, #009A70 0%, #83EDD0 100%);
		box-shadow: 2px 3px 8px 0px rgba(104, 11, 21, 0.25);
		border-radius: 0.4375rem;
		transition: all 0.4s ease; /* 柔和过渡 */
		padding: 2.05rem 1.7rem;
		display: flex;
		justify-content center
		.service-item-common{
			display none
		}
		.service-item-hover {
			display: block;
			text-align:center;
			img{
				width:1.875rem;
				margin-bottom: 0.625rem;
			}
			.service-item-title-hover1 {
				font-size: 1.25rem;
				color: #FFFFFF;
				line-height: 1.125rem;
			}
			.service-item-content-hover3 {
				margin-top:0.9375rem;
				height:7rem;
				width: 11.25rem;
				font-size: 1.125rem;
				line-height: 1.45rem;
				font-weight: 400;
				color: #FFFFFF;
				text-align: left;
			}
		}
	}
  }
}
</style>