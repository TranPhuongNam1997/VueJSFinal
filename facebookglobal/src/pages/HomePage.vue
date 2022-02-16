<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="post-list">
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
                            <a href="#">
                                <i></i>123 bình luận
                            </a>
                        </div>
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
                            <a href="#">
                                <i></i>123 bình luận
                            </a>
                        </div>
                    </div>
                    <div class="text-center mt-3 mb-4">
                        <button class="view-more">Xem thêm <i class="fa fa-angle-down"></i></button>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="box-post-right">
                    <div class="box-post-title">Bài viết gần đây của bạn.</div>
                    <div class="mt-2">Vui lòng bấm <router-link to="/login" class="link-post-login">Đăng nhập</router-link> để xem nội dung này</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: 'home-page',
        data(){
            return {

            }
        }
    }
</script>
<style>
</style>