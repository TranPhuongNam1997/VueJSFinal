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
import {PAGE_SIZE,CURREN_PAGE} from '../instant'

export default{
    name: "home-page",
    data() {
        return {
            pagesize: PAGE_SIZE,
            currPage: CURREN_PAGE,
            tagIndex: parseInt(this.$route.query.tagIndex)
        };
    },
    watch: {
        '$route'(to, from) {
            this.tagIndex = to.query.tagIndex;
        }
    },
    computed:{
        ...mapGetters(['listPost'])
    },
    methods:{
        ...mapActions(['getListPostAll'])
    },
    created(){
        let obj = {
            pagesize: this.pagesize,
            currPage: this.currPage,
            tagIndex: this.tagIndex,
        }
        this.getListPostAll(obj);
    },
    components: { PostItem, PostList }
}
</script>
<style>
</style>