<template>
    <div>
        <div class="box-post-right" v-if="!isLogin">
            <div class="box-post-title">Bài viết gần đây của bạn.</div>
            <div class="mt-2">Vui lòng bấm <router-link to="/login" class="link-post-login">Đăng nhập</router-link> để xem nội dung này</div>
        </div>
        <template v-if="getterPostCurrentUser && getterPostCurrentUser.length">
                <post-item 
                    v-for="item in getterPostCurrentUser" 
                    :key="item.PID"
                    :post="item"
                />

            </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostItem from './PostItem.vue'
    export default {
        components: { PostItem },
        name: 'Sidebar',
        data(){
            return{
                
            }
        },
        computed:{
            ...mapGetters(['getterPostCurrentUser','isLogin'])
        }
    }
</script>
<style >

</style>