<template>

    <div class="count-cmt">
        <a href="javascript:0;" class="has-interactive">
            <img alt="Yêu thích" height="18" 
                :src="this.feeling" width="18"> 
            <span>123 Yêu thích</span> 
            <div class="post-interactive">
                <ul>
                    <li v-for="item in arrfeel" :key="item" @click="handleChangeFeel(item)">
                        <span>
                            <img :src="item" alt="img">
                        </span>
                    </li> 
                    
                </ul>
            </div>
        </a>
        <router-link :to="{name: 'post-detail',params:{id: this.post.PID ||1 }}">
            <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/nileVELu9Gk.png');background-position:0 -209px;background-size:auto;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i>
            {{countComment}} bình luận
        </router-link>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default{
        name:'foot-postitem',
        data(){
            return{
                feeling: '/dist/img/icon-like.png',
                arrfeel:[
                    '/dist/img/icon-like.png',
                    '/dist/img/icon-heart.png',
                    '/dist/img/icon-tt.png',
                    '/dist/img/icon-sad.png',
                    '/dist/img/icon-pn.png'
                ]
            }
        },
        computed:{
            ...mapGetters(['postDetail']),
            countComment(){
                var numberComment = parseInt(this.post.count)
                if(numberComment){
                    return numberComment
                }

                // else if(this.postDetail.comments){
                //     return this.postDetail.comments.length
                // }
                return 0
            }
        },
        methods:{
            handleChangeFeel(item){
                this.feeling = item;
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