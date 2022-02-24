<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="post-list">
                    <PostList/>
                    
                   

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
import { mapActions, mapGetters } from 'vuex';
import PostItem from "../component/PostItem.vue"
import PostList from "../component/PostList.vue";

export default{
    name: "home-page",
    data() {
        return {
            
        };
    },
    watch: {
        '$route'(to, from) {
            var tagIndex = to.query.tagIndex
            this.getListPostAll({tagIndex});
        }
    },
    computed:{
        ...mapGetters(['listPost'])
    },
    methods:{
        ...mapActions(['getListPostAll'])
    },
    created(){
        var tagIndex = this.$route.query.tagIndex
        this.getListPostAll({tagIndex});

    },
    components: { PostItem, PostList }
}
</script>
<style>
</style>