<template>
	<div>
    <div class="font-bold text-7xl pt-32 pb-20">Luckin coffee</div>
    <div class="max-w-xl mb-28">luckin coffee 以优选的产品为原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高平直的咖啡消费新体验，推动咖啡文化在中国的普及和发展。</div>
    <el-button
        type="primary"
        size="large"
        class="bg-blue-700 text-white w-32"
    >了解更多</el-button>
    <div class="text-right text-2xl text-white">
      <el-icon class="p-1.5 bg-gray-800 box-content mr-3 cursor-pointer">
        <arrow-left />
      </el-icon>
      <el-icon class="p-1.5 bg-gray-800 box-content cursor-pointer">
        <arrow-right />
      </el-icon>
    </div>
    <div class="float-right max-w-sm text-gray-300 text-xs flex mt-10">
      <div class="text-xl text-white align-text-top">丨</div>
      <div>luckin coffee 相信一个崭新的源头永远始于改变，我们以高性价比改变咖啡消费观念，以规格原材料与制程改变咖啡消费品牌，以新零售模式改变咖啡消费体验。</div>
    </div>
  </div>
</template>

<script>
import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";
  export default {
		name: "Home",
    components: {ArrowRight, ArrowLeft}
  };
</script>

<style scoped>

</style>
