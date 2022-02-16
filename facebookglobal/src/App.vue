<template>
	<div id="app">
		<Header v-if="setheader"/>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Header from "./component/Header.vue"

export default {
    name: "app",
    data() {
        return {};
    },
    components: { Header },

	computed:{
		setheader(){
			let arr = ['login','register'];
			let arras = this.$route.name;
			var idx = arr.indexOf(arras);
			if(idx != -1){
				return false;
			}
			return true
		}
	}

}
</script>
<style>

</style>