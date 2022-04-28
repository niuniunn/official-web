<template>
	<div class="overflow-hidden pb-[40px] bg-[url('images/bg-1.png')] bg-no-repeat bg-cover bg-right-top">
		<h1 class="2k:mt-32 2k:mb-20 laptop:mt-20 laptop:mb-12 tablet:mt-6 tablet:mb-2 2k:text-7xl desktop:text-6xl laptop:text-5xl tablet:text-3xl">Luckin coffee</h1>
		<div class="max-w-xl 2k:mb-[100px] laptop:mb-[50px] tablet:mb-[20px]">luckin coffee
			以优选的产品为原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高平直的咖啡消费新体验，推动咖啡文化在中国的普及和发展。
		</div>

		<el-button
			type="primary"
			size="large"
			class="more bg-blue-700 text-white w-32"
		>了解更多
		</el-button>

		<div class="text-right text-2xl text-white mr-32 mt-[60px]">
			<el-icon class="arrow-btn mr-3 hover:expand">
				<arrow-left />
			</el-icon>
			<el-icon class="arrow-btn hover:expand">
				<arrow-right />
			</el-icon>
		</div>
		<div class="float-right max-w-sm text-gray-300 text-xs flex mt-[40px] mr-32 before:content-['丨'] before:text-2xl before:text-white">
			<div class="line-clamp-2">luckin coffee 相信一个崭新的源头永远始于改变，我们以高性价比改变咖啡消费观念，以规格原材料与制程改变咖啡消费品牌，以新零售模式改变咖啡消费体验。</div>
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
	.arrow-btn {
		@apply p-1.5 bg-gray-800 box-content cursor-pointer;
	}

	.more.el-button--large {
		--el-button-bg-color: #2d3399;
		--el-button-border-color: #2d3399;
	}

	.more.el-button:focus,
	.more.el-button:hover {
		--el-button-hover-bg-color: #404594;
		--el-button-hover-border-color: #404594;
	}

	.more.el-button:active {
		--el-button-active-bg-color: #2d3399;
		--el-button-active-border-color: #2d3399;
	}
</style>
