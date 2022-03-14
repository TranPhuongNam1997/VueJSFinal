<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="text-center">
                <router-link to="/"><img class="logo-login" src="/dist/img/logo.svg" alt="img"></router-link>

            </div>
            <div class="bg-white">
                <form @submit.prevent="handleChangePassword">
                    <div class="form-login">
                        <div class="field-ip">
                            <input type="password" v-model="oldPassword" placeholder="Mật khẩu cũ">
                        </div>

                        <div class="field-ip">
                            <input id="password-login" v-model="newPassword" type="password" placeholder="Mật khẩu">
                        </div>

                        <div class="field-ip">
                            <input id="password-login" v-model="reNewPassword" type="password" placeholder="Nhập lại mật khẩu">
                        </div>

                        <button class="btn-login" type="submit">Đổi mật khẩu</button>
                    </div>
                </form>
                <div class="line-login"></div>
               
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"

    export default{
        name: 'ChangePassword',
        data(){
            return {
                userId: this.$route.params.id,
                oldPassword: '',
                newPassword: '',
                reNewPassword: ''
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
            ...mapGetters(['currentUser'])  
        },
        methods:{
            chekUserEdit(){
                if(this.userId && this.currentUser){
                    if(this.userId != this.currentUser.USERID){
                        this.$router.push('/')
                    }
                }
            },

            ...mapActions(['atcchangePassword']),

            handleChangePassword(){

                // if(!this.oldPassword || !this.newPassword || !this.reNewPassword){
                //     this.$notify({
                //         group: 'foo',
                //         type: 'error',
                //         title: 'Thông báo',
                //         text: 'Không được để trống mật khẩu'
                //     });
                // }
                // if(this.oldPassword == this.newPassword){
                //     this.$notify({
                //         group: 'foo',
                //         type: 'error',
                //         title: 'Thông báo',
                //         text: 'Mật khẩu cũ và mật khẩu mới không được trùng nhau'
                //     });
                // }

                // if(this.newPassword === this.reNewPassword){
                //     this.$notify({
                //         group: 'foo',
                //         type: 'error',
                //         title: 'Thông báo',
                //         text: 'Mật khẩu mới và mật khẩu nhập lại phải trùng nhau'
                //     });
                // }



                let data = {
                    oldPassword : this.oldPassword,
                    newPassword: this.newPassword,
                    reNewPassword: this.reNewPassword
                }

                this.atcchangePassword(data).then(res =>{
                    console.log('res',res);
                    if(res.oke){
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Thông báo',
                            text: res.data
                        });
                        this.oldPassword = '';
                        this.newPassword = '';
                        this.reNewPassword = '';

                    }
                    else{
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Thông báo',
                            text: res.error.response.data.error
                        });
                    }
                });
            }
        }
    }
</script>
<style>
</style>