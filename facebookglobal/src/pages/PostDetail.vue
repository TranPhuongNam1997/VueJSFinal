<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="post-list">
                    <post-item :post="this.postDetail"/>
                    <div class="sort-cmt">
                        <div></div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
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
                        <a href="#" class="avt-yourcmt">
                            <img
                                    src="/dist/img/avt-post.jpg"
                                    alt="img">
                        </a>
                        <div class="field-yourcmt">
                            <input type="text" placeholder="Viết bình luận..." id="text-cmt" >
                            <button class="ripple fly-cmt">

                                <svg class="crt8y2ji" width="18px" height="18px" viewBox="0 0 24 24">
                                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                                            fill-rule="evenodd" stroke="none" fill="#616770"></path>
                                </svg>
                            </button>
                            <span>38/38</span>
                        </div>
                    </div>
                    <div class="list-cmt">
                        <ul class="list-cmt-parent">
                            <li>
                                <div class="box-cmt-parent">
                                    <button class="reply-cmt"><i class="fa fa-reply"></i></button>
                                    <a href="#" class="avtbox-cmt-parent">
                                        <img
                                                src="/dist/img/avt-post.jpg"
                                                alt="img">
                                    </a>
                                    <div class="txt-cmt">
                                        <a href="#" class="txt-cmt-name">Cao Thị Khánh Ly</a>
                                        <p>laptop Dell e4300 core2 duo CPU p9400 2.4ghz ram4g hđd320g mọi người
                                            cho e hỏi con này chơi dc game audition k mng</p>
                                    </div>
                                </div>
                                <ul class="list-cmt-child">
                                    <li>
                                        <div class="box-cmt-child">
                                            <a href="#" class="avtbox-cmt-child">
                                                <img
                                                    src="/dist/img/avt-post.jpg"
                                                    alt="img">
                                            </a>
                                            <div class="txt-cmt">
                                                <a href="#" class="txt-cmt-name">Cao Thị Khánh Ly</a>
                                                <p>laptop Dell e4300 core2 duo CPU p9400 2.4ghz ram4g hđd320g mọi người
                                                    cho e hỏi con này chơi dc game audition k mng</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="box-cmt-child">
                                            <a href="#" class="avtbox-cmt-child">
                                                <img
                                                    src="/dist/img/avt-post.jpg"
                                                    alt="img">
                                            </a>
                                            <div class="txt-cmt">
                                                <a href="#" class="txt-cmt-name">Cao Thị Khánh Ly</a>
                                                <p>laptop Dell e4300 core2 duo CPU p9400 2.4ghz ram4g hđd320g mọi người
                                                    cho e hỏi con này chơi dc game audition k mng</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </li>
                            <li>

                                <div class="box-cmt-parent">
                                    <button class="reply-cmt"><i class="fa fa-reply"></i></button>
                                    <a href="#" class="avtbox-cmt-parent">
                                        <img
                                                src="/dist/img/avt-post.jpg"
                                                alt="img">
                                    </a>
                                    <div class="txt-cmt">
                                        <a href="#" class="txt-cmt-name">Cao Thị Khánh Ly</a>
                                        <p>laptop Dell e4300 core2 duo CPU p9400 2.4ghz ram4g hđd320g mọi người
                                            cho e hỏi con này chơi dc game audition k mng</p>
                                    </div>
                                </div>
                                <ul class="list-cmt-child">
                                    <li>
                                        <div class="box-cmt-child">
                                            <a href="#" class="avtbox-cmt-child">
                                                <img
                                                    src="/dist/img/avt-post.jpg"
                                                    alt="img">
                                            </a>
                                            <div class="txt-cmt">
                                                <a href="#" class="txt-cmt-name">Cao Thị Khánh Ly</a>
                                                <p>laptop Dell e4300 core2 duo CPU p9400 2.4ghz ram4g hđd320g mọi người
                                                    cho e hỏi con này chơi dc game audition k mng</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="box-post-right">
                    <div class="box-post-title">Bài viết gần đây.</div>
                </div>
                <div class="post-item">
                    <div class="post-item-flex">
                        <a href="#" class="box-img"><img src="/dist/img/avt-post.jpg" alt="img"></a>
                        <div>
                            <a href="#" class="name-post">Trần Nam</a>
                            <div class="post-time">1 giờ trước <i class="hu5pjgll m6k467ps"></i></div>
                        </div>
                    </div>
                    <div class="post-status">
                        Tà xùa ngày trở lại
                    </div>
                    <div class="post-img">
                        <a href="#">
                            <img src="/dist/img/post-img.jpg" alt="img" class="w-100">
                        </a>
                    </div>
                    <div class="count-cmt">
                        <a href="#" class="has-interactive">
                            <img alt="Yêu thích" class="" height="18"
                                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                                    width="18">
                            <span>123 Yêu thích</span>
                        </a>
                        <a href="#">
                            <i></i>123 Bình luận
                        </a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import PostItem from '../component/PostItem.vue'
    export default{
    components: { PostItem },
        name: 'PostDetail',
        data(){
            return {
                postId : this.$route.params.id
            }
        },
        watch: {
            '$route' (to, from) {
                this.postId = to.params.id;
                this.fetchgetPostDetailByPostId()
            }
        },
        created(){
            this.fetchgetPostDetailByPostId()
        },
        methods:{
            ...mapActions(['getPostDetailByPostId']),
            fetchgetPostDetailByPostId(){
                this.getPostDetailByPostId(this.postId).then(res =>{
                    if(!res.oke){
                        this.$router.push('/')
                    }
                })
            }
            
        },
        computed:{
            ...mapGetters(['postDetail'])
        }
    }
</script>
<style>
</style>