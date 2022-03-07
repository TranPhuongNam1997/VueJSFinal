<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="post-list">
                    <PostList/>
                </div>
            </div>
            <div class="col-lg-4">

                <sidebar />

            </div>
        </div>

    </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';
import PostItem from "../component/PostItem.vue"
import PostList from "../component/PostList.vue";
import Sidebar from '../component/Sidebar.vue';

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
    components: { PostItem, PostList, Sidebar }
}
</script>
<style>
</style>