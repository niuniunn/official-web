<template>
	<div class="min-h-screen bg-theme-black"><!-- bg-home bg-140% bg-top bg-no-repeat-->
		<div class="min-h-screen 2k:w-4/5 desktop:w-3/4 laptop:w-4/5 tablet:w-full min-w-[760px] px-4 mx-auto text-white">
			<div class="box-border flex justify-between py-8">
				<router-link to="/home" class="font-bold">
					<i class="inline-block bg-logo w-8 h-8 bg-cover bg-no-repeat"></i>
					luckin coffee
				</router-link>
				<div class="w-1/2 flex justify-between items-center">
					<router-link to="/home" class="hover:slide-line">首页</router-link>
					<router-link to="/product" class="hover:slide-line">小鹿茶</router-link>
					<router-link to="/activity" class="hover:slide-line">最新活动</router-link>
					<router-link to="/cooperation" class="hover:slide-line">合作加盟</router-link>
					<router-link to="/about" class="hover:slide-line">关于我们</router-link>
				</div>
				<div class="font-bold">
					<el-icon>
						<phone class="font-bold" />
					</el-icon>
					400-100-100
				</div>
			</div>
			<router-view></router-view>
			<global-footer />
		</div>
	</div>
</template>

<script lang="ts">
	import {defineComponent} from 'vue'
	import {Phone} from "@element-plus/icons-vue";
	import GlobalFooter from "./components/GlobalFooter.vue";

	export default defineComponent({
		name: 'App',
		components: {GlobalFooter, Phone}
	})
</script>
