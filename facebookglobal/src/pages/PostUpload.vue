<template>
    <div class="container">
            <div class="row align-items-center flex-column">
                <div class="col-lg-6">
                    <div class="post-upload mb-5">
                        <h3 class="title-post">Tạo bài viết</h3>
                        <div class="post-upload-box">
                            <div class="field-ip">
                                <input type="text" placeholder="Đường dẫn ảnh">
                            </div>
                            <div class="field-ip">
                                <textarea placeholder="Bạn đang nghĩ gì?"></textarea>
                            </div>
                            <a class="img-viewupload" href="#https://www.iloveimg.com/vi/cong-cu-tao-meme">
                                <img src="/dist/img/ShowImage.jfif" alt="img">
                            </a>
                            <div class="option-upload">
                                <a href="https://www.iloveimg.com/vi/cong-cu-tao-meme" target="_blank"><i class="fa fa-globe"></i> Chế ảnh từ MeMe</a>
                                <button>
                                    <input id="ip-upload" type="file"/>
                                    <label for="ip-upload">
                                        <i></i>
                                        <span>Ảnh/Video</span>
                                    </label>
                                </button>
                            </div>
                            <div class="sl-category mt-3">
                                <div class="txt-sl-category w-100 mb-2">Danh mục</div>
                                <label class="ass1-checkbox">
                                    <input type="radio" name="state-post" >
                                    <span></span>
                                    <p>Ảnh troll</p>
                                </label>
                                <label class="ass1-checkbox">
                                    <input type="radio" name="state-post" >
                                    <span></span>
                                    <p>Ảnh troll</p>
                                </label>
                                <label class="ass1-checkbox">
                                    <input type="radio" name="state-post" checked="checked">
                                    <span></span>
                                    <p>Ảnh troll</p>
                                </label>
                                <label class="ass1-checkbox">
                                    <input type="radio" name="state-post" >
                                    <span></span>
                                    <p>Ảnh troll</p>
                                </label>
                                <label class="ass1-checkbox">
                                    <input type="radio" name="state-post" >
                                    <span></span>
                                    <p>Ảnh troll</p>
                                </label>
                                <label class="ass1-checkbox">
                                    <input type="radio" name="state-post" >
                                    <span></span>
                                    <p>Ảnh troll</p>
                                </label>

                            </div>
                            <div class="text-center mt-3 mb-3">
                                <button class="btn-uppost">Đăng bài</button>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="col-lg-4">

                </div>
            </div>

        </div>
</template>
<script>
    export default{
        name: 'PostUpload',
        data(){
            return {

            }
        }
    }
</script>
<style>
</style>