<template>
    <div class="post-item-flex">
        <router-link :to="linkProfile" class="box-img"><img :src="getAvatar" @error="getAvatarError" :alt="post.fullname"></router-link>
        <div>
            <router-link :to="linkProfile" class="name-post">{{post.fullname}}</router-link>
            <div class="post-time">{{setTime}} <i class="hu5pjgll m6k467ps"></i></div>
        </div>
    </div>
</template>
<script>
    import setMoment from '../plugins/moment'
    export default{
        name: 'head-postitem',
        data(){
            return{
                
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
                        id: this.post.USERID
                    }
                }
            },
            setTime(){
                return setMoment(this.post.time_added)
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