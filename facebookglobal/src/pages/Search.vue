<template>
    <div class="container">
        <div class="key-search mb-2">Có phải bạn muốn tìm: <span>{{this.textSearch}}</span></div>
        <div class="mb-4 fs-14">Khoảng {{this.listPostSearch.length}} kết quả </div>
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <div class="post-list" v-if="listPostSearch && listPostSearch.length">
                    
                    <post-item
                        v-for="item in listPostSearch" 
                        :key="item.PID"
                        :post="item"
                    />

                </div>
            </div>
            <div class="col-lg-2"></div>

            
        </div>

    </div>
</template>
<script>
import { mapActions } from 'vuex'
import PostItem from '../component/PostItem.vue'
    export default{
  components: { PostItem },
        name: 'Search',
        data(){
            return {
                textSearch: this.$route.query.textQuery,
                listPostSearch: []
            }
        },
        watch: {
            '$route'(to, from) {
                this.textSearch = to.query.textQuery;
                this.fetchDataSearch()
            }
        },
        created(){
            this.fetchDataSearch()
        },
        methods:{
            ...mapActions(['getPostSearch']),
            fetchDataSearch(){
                if(this.textSearch){
                    this.getPostSearch(this.textSearch).then(res =>{
                        // console.log(res);
                        if(res.oke){
                            this.listPostSearch = res.data.posts
                        }
                    })
                }
                
            }
        }

    }
</script>
<style>
</style>