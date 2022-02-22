<template>
    <div>
        <div class="post-status">
            {{post.post_content}}
        </div>
        <div class="post-img">
            <a href="#">
                <img @error="getImageError" :src="getImagePost" alt="img" class="w-100">
            </a>
        </div>
    </div>
</template>
<script>
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
        },
        methods:{
            getImageError(event) { 
                event.target.src = "https://www.bukandroid.com/wp-content/uploads/2020/04/Cara-Hapus-Data-Thumbnail-Android.png" 
            }
        },
        props:{
            post:{
                type: Object,
                default: null
            }
        },
    }
</script>