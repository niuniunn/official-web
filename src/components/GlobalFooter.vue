<template>
	<footer class="text-white mt-20">
		<div class="flex justify-between items-center">
			<img class="inline-block w-[118px]" src="/images/logo-1.png" alt="">
			<div class="flex justify-between w-1/2">
				<span>丨</span>
				<router-link to="/home" class="hover:slide-line">首页</router-link>
				<router-link to="/product" class="hover:slide-line">小鹿茶</router-link>
				<router-link to="/activity" class="hover:slide-line">最新活动</router-link>
				<router-link to="/cooperation" class="hover:slide-line">合作加盟</router-link>
				<router-link to="/about" class="hover:slide-line">关于我们</router-link>
				<span>丨</span>
			</div>
			<div>
				<el-icon>
					<chat-round />
				</el-icon>
				<el-icon class="ml-[20px]">
					<chat-round />
				</el-icon>
				<el-icon class="ml-[20px]">
					<chat-round />
				</el-icon>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { ref } from 'vue'
import {ChatRound} from "@element-plus/icons-vue";

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>

</style>
