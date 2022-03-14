<template>
    <div class="container">
        <div class="row align-items-center flex-column">
            <div class="col-lg-6">
                <div class="post-upload mb-5">
                    <h3 class="title-post">Chỉnh sửa Trang cá nhân</h3>
                    <form class="post-upload-box" @submit.prevent="handleChangeProfile">
                        <template v-if="this.currentUser">
                            <!-- Ảnh -->
                            <div class="font-weight-bold">Ảnh đại diện</div>
                            <div class="avatar-upload">
                                <div class="avatar-edit">
                                    <input type='file' 
                                        id="imageUpload" 
                                        accept=".png, .jpg, .jpeg"
                                        @change="uploadavt"
                                    />
                                    <label for="imageUpload" class="btn-up">
                                        <img src="/dist/img/pencil.png" alt="">
                                    </label>
                                </div>
                                <div class="avatar-preview">
                                    <div id="imagePreview"
                                        :style="{'background-image': 'url(' + getAvt + ')'}">
                                    </div>
                                </div>
                            </div>
                            <!-- Họ tên -->
                            <div class="field-ip">
                                <input 
                                    @input="fullname = $event.target.value"
                                    :value="currentUser.fullname"
                                    type="text" 
                                    placeholder="Họ tên..." >
                            </div>
                            <!-- Giới tính -->
                            <div class="field-ip">
                                <select required
                                    @change="gender = $event.target.value"  
                                    :value="currentUser.gender"  
                                >
                                    <option disabled value="">Giới tính</option>
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                    <option value="khác">Khác</option>
                                </select>
                            </div>
                            <!-- Tiểu sử -->
                            <div class="field-ip">
                                <textarea 
                                    placeholder="Tiểu sử ngắn"
                                    @input="description = $event.target.value"
                                    :value="currentUser.description"
                                >
                                </textarea>
                            </div>

                            <div class="text-center mt-3 mb-3">
                                <button class="btn-lightblue" type="submit">Chỉnh sửa thông tin giới thiệu</button>
                            </div>
                        </template>
                        
                    </form>

                </div>
            </div>
            <div class="col-lg-4">

            </div>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

    export default{
        name: 'UserProfile',
        data(){
            return {
                userId: this.$route.params.id,
                fullname:'',
                gender: '',
                description: '',
                avatar: {
                    objFile: null,
                    base64: ''
                },
                // imageProfile: ''
            }
        },
        watch: {
            '$route' (to, from) {
                this.userId = to.params.id;
                this.chekUserEdit();
            }
        },
        created(){
            this.chekUserEdit()
        },
        computed:{
            ...mapGetters(['currentUser']),
            getAvt(){
                if(this.avatar.base64 === '' && this.currentUser ){
                    return this.currentUser.profilepicture
                }
                else{
                    return this.avatar.base64
                }
            }
        },
        methods:{
            ...mapActions(['actupdateProfile']),
            handleChangeProfile(){

                // check nếu không có giá trị thì trả về giá trị mặc định

                if(!this.fullname) this.fullname = this.currentUser.fullname
                if(!this.gender) this.gender = this.currentUser.gender
                if(!this.description) this.description = this.currentUser.description


                let data = {
                    fullname: this.fullname,
                    gender: this.gender,
                    description: this.description
                }

                if(this.avatar){
                    data.avatar = this.avatar.objFile
                }

                if(data){
                    this.actupdateProfile(data).then(res =>{
                        if(!res.oke){
                            this.$notify({
                                group: 'foo',
                                type: 'error',
                                title: 'Thông báo',
                                text: 'Cập nhât trang cá nhân thất bại'
                            });
                        }
                        else{
                            // this.$router.push('/');
                            this.$notify({
                                group: 'foo',
                                type: 'success',
                                title: 'Thông báo',
                                text: 'Cập nhật trang cá nhân thành công'
                            });
                        }
                        
                    })
                }

                console.log('data profile edit = ',data);


                
            },
            chekUserEdit(){
                if(this.userId && this.currentUser){
                    if(this.userId != this.currentUser.USERID){
                        this.$router.push('/')
                    }
                }
            },

            uploadavt(e) {
                var files = e.target.files || e.dataTransfer.files;

                if (files.length){
                    this.createImage(files[0])
                }
            },

            createImage(file) {
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {

                    vm.avatar.base64 = e.target.result;
                    vm.avatar.objFile = file

                    console.log(vm.avatar.objFile)
                };
                reader.readAsDataURL(file);
            },
        },
        
    }
</script>
<style>
.avatar-upload .avatar-edit input + label:after{
    display: none;
}
.btn-up img{
    width: 15px;
}
.btn-up{
    display: flex !important;
    align-items: center;
    justify-content: center;
}
</style>