<template>
    <div class="post-item-flex">
        <router-link :to="linkProfile" class="box-img"><img :src="getAvatar" @error="getAvatarError" :alt="post.fullname"></router-link>
        <div>
            <router-link v-if="this.textSearch" :to="linkProfile" class="name-post" v-html="namePost"></router-link>
            <router-link v-else :to="linkProfile" class="name-post">{{namePost}}</router-link>
            <div class="post-time">{{setTime}} <i class="hu5pjgll m6k467ps"></i></div>
        </div>
    </div>
</template>
<script>
    import {replaceAll} from '../helper'
    import setMoment from '../plugins/moment'
    export default{
        name: 'head-postitem',
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
            getAvatar(){
                if(this.post.profilepicture){
                    return this.post.profilepicture
                }

                return 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg'
            },
            linkProfile(){
                return {
                    name: 'user-page',
                    params:{
                        id: this.post.USERID || 1
                    }
                }
            },
            setTime(){
                return setMoment(this.post.time_added)
            },

            namePost(){
                if(this.textSearch){
                    return replaceAll(this.post.fullname.toLowerCase(),this.textSearch.toLowerCase(), `<mark>${this.textSearch}</mark>`)
                }
                else{
                    return this.post.fullname
                }
                
            }
            
            
        },
        methods:{
            getAvatarError(event) { 
                // event.target.src = "http://humg.edu.vn/Publishing_Resources/web/images/noavatar.gif" 
                event.target.src = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg" 
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

<style>
    .name-post{
        text-transform: capitalize;
    }
</style>