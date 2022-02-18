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
        return {
            
        };
    },
    methods:{
        // ...mapActions(['getListPost'])
    },
    // mouted(){
    //     axios.get('https://api-meme-zendvn-01.herokuapp.com/api/post/getListPagination.php?pagesize=3&currPage=1').then(res => {
    //         res.json().then(post =>{
    //             this.post = post
    //             console.log(post)
    //         })
    //     })
    // },
    created(){
        
        // console.log(this.$store);

        // this.$store.dispatch('getListPost',{});
        // this.getListPost()
        // var resuilt = fetch('https://api-meme-zendvn-01.herokuapp.com/api/post/getListPagination.php?pagesize=3&currPage=1');
        // resuilt.then(res=>{
        //     console.log(res)
        // })
        // console.log(resuilt);

    },
    components: { PostItem, PostList }
}
</script>
<style>
</style>