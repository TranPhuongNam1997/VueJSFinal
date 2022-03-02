<template>
	<div id="app">
		<Header v-if="setheader"/>
		<div class="main">
			<router-view></router-view>
		</div>
		<loading :class="{open : isLoading}" />
		<notifications position="bottom right"/>
	</div>
</template>
<script>
import { mapState } from 'vuex';
import Header from "./component/Header.vue"
import Loading from './component/Loading.vue';
import Vue           from 'vue'
import Notifications from 'vue-notification'

Vue.use(Notifications)
export default {
    name: "app",
    data() {
        return {};
    },
	methods:{
		
	},
	
    components: { Header, Loading },
	computed:{
		...mapState(['isLoading']),
		setheader(){
			let arr = ['login','register'];
			let arras = this.$route.name;
			var idx = arr.indexOf(arras);
			if(idx != -1){
				return false;
			}
			return true
		}
	},
}
</script>
<style>
	
</style>