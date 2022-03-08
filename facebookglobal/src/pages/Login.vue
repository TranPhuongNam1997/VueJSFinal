<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="text-center">
                <router-link to="/"><img class="logo-login" src="/dist/img/logo.svg" alt="img"></router-link>

            </div>
            <div class="bg-white">
                <form @submit.prevent="handleLogin">
                    <div class="form-login">
                        <div class="field-ip">
                            <input type="text" v-model="email" placeholder="Email hoặc số điện thoại">
                        </div>
                        <div class="field-ip">
                            <input id="password-login" v-model="password" type="password" placeholder="Mật khẩu">
                            <div class="showhide-pass">
                                <div class="show-pass">
                                    <img class="" src="/dist/img/iconshowpass.png" alt="img">
                                </div>
                                <div class="hide-pass">
                                    <img class="" src="/dist/img/iconhidepass.png" alt="img">
                                </div>
                            </div>
                        </div>

                        <button class="btn-login" type="submit">Đăng nhập</button>
                    </div>
                </form>
                <div class="line-login"></div>
                <div class="btn-register">
                    <a href="javascript:0;" class="" data-toggle="modal" data-target="#register">Tạo tài khoản
                        mới</a>
                </div>
            </div>
        </div>

        <div class="modal modal-register fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <register/>
        </div>
    </div>
</template>
<script>

import $ from "jquery"

import { mapActions } from 'vuex'
import Register from './Register.vue'
    export default{
  components: { Register },
        name: 'login',
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods:{

            ...mapActions(['Login']),
            handleLogin(){
                let data = {
                    email: this.email,
                    password: this.password
                }
                this.Login(data).then(res => {
                    if(res.oke){

                       

                        this.$router.push('/');
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Thông báo',
                            text: 'Đăng nhập thành công'
                        });
                    }
                    else{
                        var texterror =  res.error;
                        if(typeof texterror == 'string'){
                            this.$notify({
                                group: 'foo',
                                type: 'error',
                                title: 'Thông báo',
                                text: texterror
                            });
                        }
                        else{
                            this.$notify({
                                group: 'foo',
                                type: 'error',
                                title: 'Thông báo',
                                text: texterror.join(' ')
                            });
                        }
                        
                    }
                })
            }
        },
        mounted(){
            $(".btn-regis").click(function (event) {
                $('.modal-backdrop').hide();
                $('body').removeClass('modal-open');
            });
        }
    }
</script>
<style>
</style>