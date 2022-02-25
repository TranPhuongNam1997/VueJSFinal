<template>
    <div>
        <div class="post-status">
            {{post.post_content}}
        </div>
        <div class="post-img">
            <router-link :to="toPostDetail">
                <img @error="getImageError" :src="getImagePost" alt="img" class="w-100">
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
    export default{
        name:'body-postitem',
        data(){
            return{
                
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
                        id: this.post.PID
                    }
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