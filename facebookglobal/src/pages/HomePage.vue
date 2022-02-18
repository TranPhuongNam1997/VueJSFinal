<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="post-list">
                    <PostList/>
                    
                    <div class="text-center mt-3 mb-4">
                        <button class="view-more">Xem thêm <i class="fa fa-angle-down"></i></button>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="box-post-right">
                    <div class="box-post-title">Bài viết gần đây của bạn.</div>
                    <div class="mt-2">Vui lòng bấm <router-link to="/login" class="link-post-login">Đăng nhập</router-link> để xem nội dung này</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions } from 'vuex';
import PostItem from "../component/PostItem.vue"
import PostList from "../component/PostList.vue";
export default{
    name: "home-page",
    data() {
        return {};
    },
    methods:{
        // ...mapActions({ getListPost: 'post/getListPost'})
    },
    created(){
        console.log('da chay home');
        console.log(this.$store);
        
        // let data = {
        //     pagesize,
        //     currPage
        // }
        
        this.$store.dispatch('getListPost',{});

        // this['getListPost']();
        
    },
    components: { PostItem, PostList }
}
</script>
<style>
</style>