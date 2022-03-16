<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="post-list post-detail" v-if="postDetail && postDetail.post">
                    <post-item :post="postDetail.post" />
                    <div class="sort-cmt">
                        <div></div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sắp xếp theo
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    <span>Cũ nhất</span>
                                    <span>Hiển thị bình luận từ cũ nhất đến mới nhất</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    <span>Gần đây nhất</span>
                                    <span>Hiển thị bình luận từ mới nhất đến cũ nhất</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="your-cmt">
                        <router-link 
                            :to="{ name: 'user-page', params:{ id: this.currentUser.USERID }}"
                            class="avt-yourcmt"
                        >
                            <img :src="getAvatar" @error="getAvatarError" alt="img">
                        </router-link>
                        <form @submit.prevent="handleComment" class="field-yourcmt">
                            <input type="text" v-model="ipComment" placeholder="Viết bình luận..." id="text-cmt" >
                            <button class="ripple fly-cmt" @click.prevent="handleComment">

                                <svg class="crt8y2ji" width="18px" height="18px" viewBox="0 0 24 24">
                                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                                            fill-rule="evenodd" stroke="none" fill="#616770"></path>
                                </svg>
                            </button>
                            <span>{{checkNumberCmt}}/180</span>
                        </form>
                    </div>
                    <div class="list-cmt">
                        <ul class="list-cmt-parent" v-if="postDetail.comments && postDetail.comments.length">
                            <item-comment v-for="item in postDetail.comments" :key="item.CID" :comment="item"/>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="box-post-right">
                    <div class="box-post-title">Bài viết gần đây.</div>
                </div>
                <sidebar/>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import PostItem from '../component/PostItem.vue'
import Sidebar from '../component/Sidebar.vue';
import ItemComment from '../component/ItemComment.vue';
    export default{
    components: { PostItem, Sidebar, ItemComment },
        name: 'PostDetail',
        
        data(){
            return {
                postId : this.$route.params.id,

                numberTextCmt: 180,
                ipComment: ''
            }
        },
        watch: {
            '$route' (to, from) {
                this.postId = to.params.id;
                this.fetchgetPostDetailByPostId()
            }
        },
        
        created(){
            console.log('PostDetail postId = ',this.postId);
            
            this.fetchgetPostDetailByPostId()
        },
        methods:{
            ...mapActions(['getPostDetailByPostId','atcAddComment']),
            fetchgetPostDetailByPostId(){
                this.getPostDetailByPostId(this.postId).then(res =>{
                    if(!res.oke){
                        this.$router.push('/')
                    }
                })
            },
            getAvatarError(event){
                event.target.src = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg" 

            },
            handleComment(){
                if(this.checkNumberCmt.length < this.numberTextCmt){
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Thông báo',
                        text: 'Vui lòng nhập bình luận'
                    });
                }
                let data = {
                    comment: this.ipComment,
                    postid: this.postDetail.post.PID
                }

                this.atcAddComment(data).then(res =>{
                    if(res.oke){
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Thông báo',
                            text: 'Bạn đã bình luận bài viết này'
                        });
                    }
                })
            }
            
        },
        computed:{
            ...mapGetters(['postDetail','currentUser']),
            getAvatar(){
                if(this.currentUser){
                    return this.currentUser.profilepicture
                }
                return 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg'
            },

            checkNumberCmt(){
                return  this.numberTextCmt - this.ipComment.length
            }
        }
    }
</script>
<style>
    .box-cmt-parent:before {
        top: 20px;
        display: none;
    }
    .list-cmt .list-cmt-parent > li{
        margin-bottom: 0;
        padding-bottom: 16px;
    }
    .main {
        background: #f0f2f5;
        min-height: 100vh;
    }
    .your-cmt .field-yourcmt input {
        border: 1px solid #ced0d4;
        background: #fff;
    }
    .txt-cmt-name:hover{
        text-decoration: underline;
    }
    
    .post-detail {
        background: #fff;
        box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
        border-radius: 4px;
    }


    .post-detail .post-item {
        box-shadow: none;
    }
    .box-cmt-parent{
        padding-bottom: 0;
    }
</style>