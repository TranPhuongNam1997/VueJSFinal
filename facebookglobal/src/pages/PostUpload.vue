<template>
    <div class="container">
            <div class="row align-items-center flex-column">
                <div class="col-lg-6">
                    <div class="post-upload mb-5">
                        <h3 class="title-post">Tạo bài viết</h3>
                        <div class="post-upload-box">
                            <div class="field-ip">
                                <input v-model="url_image" type="text" placeholder="Đường dẫn ảnh">
                            </div>
                            <div class="field-ip">
                                <textarea v-model="post_content" placeholder="Bạn đang nghĩ gì?"></textarea>
                            </div>
                            <a class="img-viewupload" href="#https://www.iloveimg.com/vi/cong-cu-tao-meme">
                                <img @click.prevent="showPickFile" :src="getImageUpload" alt="img">
                            </a>
                            <div class="option-upload">
                                <a href="https://www.iloveimg.com/vi/cong-cu-tao-meme" target="_blank"><i class="fa fa-globe"></i> Chế ảnh từ MeMe</a>
                                <input @change="changeInputUpload" class="d-none" ref="ipupload" id="ip-upload" type="file"/>

                                <button @click.prevent="showPickFile">
                                    <label>
                                        <i></i>
                                        <span>Ảnh/Video</span>
                                    </label>
                                </button>
                            </div>
                            <div class="sl-category mt-3">
                                <div class="txt-sl-category w-100 mb-2">Danh mục</div>
                                <label class="ass1-checkbox" v-for="item in categoryAll" :key="item.id" >
                                    <input type="checkbox" name="state-post" :value="item.id" v-model="category">
                                    <span></span>
                                    <p>{{item.text}}</p>
                                </label>
                            </div>  
                            <div class="text-center mt-3 mb-3">
                                <button class="btn-uppost" @click.prevent="handlePostUpload">Đăng bài</button>
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
import { mapActions } from 'vuex';
    import  {checkImageURL,checkImageFile} from '../helper';
    export default{
        name: 'PostUpload',
        data(){
            return {
                url_image: '',
                post_content: '',
                category: [],
                obj_image: {
                    objFile: null,
                    base64: ''
                }
            }
        },

        computed:{
            categoryAll(){
                return this.$store.state.post.categories
            },

            getImageUpload(){
                if(this.url_image) return this.url_image

                else if(this.obj_image.base64){
                    return this.obj_image.base64
                }
                return 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg'
            }
        },
        methods:{
            ...mapActions(['atcCreateNewPost']),
            showPickFile(){
                return this.$refs.ipupload.click();
            },

            changeInputUpload(e) {
                var files = e.target.files || e.dataTransfer.files;

                //check xem ảnh có đúng định dạng không
               
                if(!checkImageFile(files[0])){
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Thông báo',
                        text: 'File tải lên không hợp lệ'
                    });
                    return;
                }
                if (files.length){
                    this.createImage(files[0])
                }
            },

            createImage(file) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.obj_image.base64 = e.target.result;
                    vm.obj_image.objFile = file
                    console.log(vm.obj_image.objFile)
                };
                reader.readAsDataURL(file);
            },

            retsetField(){
                this.url_image = '',
                this.post_content = '',
                this.category = [],
                this.obj_image.objFile = '',
                this.obj_image.base64 = null
            },

            handlePostUpload(){
                let data={
                    url_image: this.url_image,
                    post_content: this.post_content,
                    category: this.category,
                    obj_image: this.obj_image.objFile
                }
                console.log('data =',data);
                this.atcCreateNewPost(data).then(res=>{
                    if(res.oke){
                        console.log('res = ',res)
                        this.retsetField();
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Thông báo',
                            text: 'Đăng bài viết thành công'
                        });
                    }
                })
                
            }

        }
        
    }
</script>
<style>
</style>