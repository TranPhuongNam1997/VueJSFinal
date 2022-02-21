<template>
    <div>
        <post-item 
            v-for="item in listPost.posts" 
            :key="item.PID"
            :post="item"
        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PostItem from './PostItem.vue'
    export default{
    components: { PostItem },
        data(){
            return{

            }
        },
        computed:{
            ...mapGetters(['listPost']),
        }
    }
</script>
<style>

</style>