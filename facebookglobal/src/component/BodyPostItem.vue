<template>
    <div>
        <div class="post-status" v-if="!this.textSearch">
            {{statusPost}}
        </div>
        
        <div class="post-status" v-else v-html="statusPost">
        </div>

        <div class="post-img">
            <router-link :to="toPostDetail">
                <img @error="getImageError" :src="getImagePost" alt="img" class="w-100">
            </router-link>
        </div>
    </div>
</template>
<script>
import {replaceAll} from '../helper'
import { mapActions } from 'vuex'
    export default{
        name:'body-postitem',
        data(){
            return{
                textSearch: this.$route.query.textQuery,
            }
        },
        watch: {
            '$route'(to, from) {
                this.textSearch = to.query.textQuery;
            }
        },

        computed:{
            getImagePost(){
                if(this.post.url_image){
                    return this.post.url_image
                }

                return 'https://www.bukandroid.com/wp-content/uploads/2020/04/Cara-Hapus-Data-Thumbnail-Android.png'
            },
            toPostDetail(){
                return {
                    name: 'post-detail',
                    params:{
                        id: this.post.PID ||1
                    }
                }
            },
            statusPost(){
                if(this.textSearch){
                    if(this.post.post_content){
                        return replaceAll(this.post.post_content.toLowerCase(),this.textSearch.toLowerCase(), `<mark>${this.textSearch}</mark>`)
                    }
                }
                else{
                    return this.post.post_content
                }
                
            }
            
        },
        methods:{
            ...mapActions(['getPostDetailByPostId']),
            getImageError(event) { 
                event.target.src = "https://www.bukandroid.com/wp-content/uploads/2020/04/Cara-Hapus-Data-Thumbnail-Android.png" 
            },
            
        },
        props:{
            post:{
                type: Object,
                default: null
            }
        },
    }
</script>