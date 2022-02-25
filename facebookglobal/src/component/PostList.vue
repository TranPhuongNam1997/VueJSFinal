<template>
    <div>
        <post-item 
            v-for="item in listPost" 
            :key="item.PID"
            :post="item"
        />
        <div @click="handleLoadMore" v-if="listPost && listPost.length" class="text-center mt-3 mb-4">
            <button class="view-more">Xem thêm <i class="fa fa-angle-down"></i></button>
        </div>
        
        <h3 v-else>Không có dữ liệu</h3>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import PostItem from './PostItem.vue'
import {PAGE_SIZE,CURREN_PAGE} from '../instant'
    export default{
    components: { PostItem },
        data(){
            return{
                pagesize: PAGE_SIZE,
                currPage: CURREN_PAGE,
                tagIndex: parseInt(this.$route.query.tagIndex)
            }
        },
        watch: {
            '$route'(to, from) {
                this.tagIndex = to.query.tagIndex;
                this.currPage = 1
            }
        },

        methods:{
            ...mapActions(['getListPostAll']),
            handleLoadMore(){
                //click thi tang pagesize len 1 don vi
                this.currPage = this.currPage + 1;
                let obj = {
                    pagesize: this.pagesize,
                    currPage: this.currPage,
                    tagIndex: this.tagIndex,
                }
                this.getListPostAll(obj);

            }
        },
        
        computed:{
            ...mapGetters(['listPost']),
        }
    }
</script>
<style>

</style>