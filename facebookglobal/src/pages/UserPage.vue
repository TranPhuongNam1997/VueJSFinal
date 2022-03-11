<template>
    <div>
        <div class="box-info">
            <div class="container" v-if="infouser">
                <img class="info-avt" :src="infouser.profilepicture" @error="getAvatarError" alt="img">
                <div class="info-name">{{infouser.fullname}}<i></i></div>
                <div class="info-sub">
                    <span>
                        {{infouser.description}}
                    </span>
                </div>
                <div class="info-utility">
                    <div class="info-main">
                        <span><i class="fa fa-file-alt"></i>Bài viết: {{posts.length}}</span>
                        <span><i class="fa fa-wifi"></i>Theo dõi: 99999</span>
                        <span><i class="fa fa-spa"></i>Đang theo dõi: 123</span>
                    </div>
                    <div class="info-utility-block">
                        <button v-if="!checkCurrenUser" class="ripple" type="button">
                            <img class=""
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/oABzID6cE5f.png" alt=""
                                height="16" width="16">
                            Theo dõi
                        </button>
                        <template v-else>
                            <a href="javascript:0;" class="ripple">
                                <i class="fa fa-key"></i>
                                Đổi mật khẩu
                            </a>
                            <router-link :to="{name: 'user-profile',params: {id: infouser.USERID}}" class="ripple">
                                <img class=""
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt=""
                                    height="16" width="16">
                                Chỉnh sửa trang cá nhân
                            </router-link>
                        </template>
                        
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="post-list">
                        <template v-if="posts && posts.length">
                            <post-item 
                                v-for="item in posts" 
                                :key="item.PID"
                                :post="item"
                            />

                        </template>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import PostItem from '../component/PostItem.vue'
export default{
    components: { PostItem },
    name: 'UserPage',
    data(){
        return {
            userId: this.$route.params.id,
            infouser: null,
            posts: []
        }
    },

    watch: {
        '$route' (to, from) {
            console.log('to',to);
            
            this.userId = to.params.id;
            this.fetchDataUser()
        }
    },
    created(){
        this.fetchDataUser();
    },
    computed:{
        ...mapGetters(['getterPostCurrentUser','currentUser']),
        checkCurrenUser(){
            if(this.infouser && this.currentUser){
                if(this.infouser.USERID !== this.currentUser.USERID){
                    return false
                }
            }
            
            return true
        }
    },
    methods:{
        ...mapActions([
            'getUserById',
            'getPostListByUserId'
        ]),

        getAvatarError(event) { 
            event.target.src = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg" 
        },
        
        async fetchDataUser(){
            var infouser = this.getUserById(this.userId);
            var infopost = this.getPostListByUserId(this.userId);

            var [plusinfouser , plusinfopost] = await Promise.all([infouser,infopost ])   
            
            console.log('plusinfouser',plusinfouser);
            console.log('plusinfouser',plusinfopost);
            if(plusinfouser && plusinfopost){
                this.infouser = plusinfouser.data;
                this.posts = plusinfopost.data
            }
            else{
                this.$router.push('/')
            }
            
        },
        
    },
}
</script>
<style>
</style>