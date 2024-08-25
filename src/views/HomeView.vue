<template>
  <div class="index-box">
    <div ref="indexTitle" class="d-flex index-title justify-contetn-center align-items-center">
      <img ref="indexHeader" class="index-header" src="../assets/header.jpeg" @mousemove="mouseMoveInHeader" @mouseleave="mouseMoveOutHeader"/>
      <div class="index-content">
        <div>Nerakolo</div>
        <div style="font-size: 2vw;">凛川柚莹 • 奶油小鹿炖菜</div>
      </div>
    </div>
    <div ref="indexConnect" :style="{ width: contentWidth + 'px' }" class="index-connect mt-3">
      <bilibili width="34" height="38"></bilibili>
      <logo-github-icon w="36" h="36" />
      <telegram width="32" height="32"></telegram>
      <x width="30" height="30"></x>
    </div>
  </div>
</template>

<script>
import '../assets/thems.css'

import bilibili from '../assets/icons/bilibili.svg'
import telegram from '../assets/icons/telegram.svg'
import tencentqq from '../assets/icons/tencentqq.svg'
import wechat from '../assets/icons/wechat.svg'
import x from '../assets/icons/x.svg'

import gsap from 'gsap'

export default{
  components:{
    bilibili,telegram,tencentqq,wechat,x
  },
  data(){
		return{
      contentWidth:0,
		}
  },
	props:{
		
	},
	inject: [],
  mounted(){
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
    gsap.timeline()
      .from(this.$refs.indexTitle, {
        y: 20, // 从20像素以下开始
        autoAlpha: 0, // autoAlpha是透明度和可见性的组合
        duration: 0.6, // 动画持续时间为0.8秒
        ease: 'power1.out' // 缓动函数
      })
      .from(this.$refs.indexConnect, {
        y: 20, // 从20像素以下开始
        autoAlpha: 0, // 同样使用autoAlpha
        duration: 0.6, // 同样持续时间
        ease: 'power1.out' // 同样缓动函数
      }, "-=0.4"); // 这会让index-connect开始动画在index-title动画结束前0.4秒开始
  },
	methods:{
		updateWidth() {
      if (this.$refs.indexTitle) {
        this.contentWidth = this.$refs.indexTitle.offsetWidth
      }
    },
    mouseMoveInHeader(e){
      if(!this.$refs.indexHeader) return
      const rect = this.$refs.indexHeader.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)

      const xOffset = -x / 20;
      const yOffset = -y / 20;

      this.$refs.indexHeader.style.boxShadow = `${xOffset}px ${yOffset}px 10px 6px var(--box-shadow-color)`
    },
    mouseMoveOutHeader(e){
      this.$refs.indexHeader.style=''
    }
	},
  watch:{

  },
  unmounted(){
    window.removeEventListener('resize', this.updateWidth)
  }
}
</script>

<style scoped>
.index-box{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .index-header{
    width: 20vw;
    border-radius: 50%;
    box-shadow: var(--box-shadow);
    transition: 0.2s ease;
  }
  .index-content{
    height: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--text-theme-color);
    margin-left: 30px;
    font-size: 6vw;
    font-weight: 800;
    letter-spacing: 5px;
    text-shadow: var(--text-shadow);
  }
  .index-connect{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: auto;
  }
}
</style>

<style>
.index-connect{
  svg{
    margin: 10px;
    cursor: pointer;
    path {
      transition: fill 0.2s ease;
      fill: var(--icon-theme-color-blur);
      backdrop-filter: blur(10px);
    }
    &:hover path{
      fill: var(--icon-theme-color-blur-hover);
      box-shadow: var(--box-shadow);
    }
  }
}
</style>