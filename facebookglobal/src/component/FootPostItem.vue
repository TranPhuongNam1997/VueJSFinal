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
        <a href="#">
            <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/nileVELu9Gk.png');background-position:0 -209px;background-size:auto;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i>
            {{countComment}} bình luận
        </a>
    </div>
</template>
<script>
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
            countComment(){
                var numberComment = parseInt(this.post.count)
                if(numberComment){
                    return numberComment
                }
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