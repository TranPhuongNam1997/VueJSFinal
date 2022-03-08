<template>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="head-register">
                <button class="btn-close-register" data-dismiss="modal" aria-label="Close"><img src="/dist/img/close.png" alt="img"></button>
                <div>Đăng ký</div>
                <div class="txt-fast">Nhanh chóng và dễ dàng.</div>
            </div>
            <div class="body-register">
                <form @submit.prevent="handleRegistor">
                    <div class="field-register">
                        <input v-model="fullname" type="text" placeholder="Họ tên">
                    </div>
                    <div class="field-register">
                        <input v-model="email" type="text" placeholder="Số di động hoặc email">
                    </div>
                    <div class="field-register">
                        <input v-model="password" type="text" placeholder="Mật khẩu mới">
                    </div>
                    <div class="field-register">
                        <input v-model="repassword" type="text" placeholder="Nhập lại mật khẩu">
                    </div>
                    <div class="rules">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản, Chính sách dữ liệu</a>  và <a
                            href="#">Chính sách cookie</a>  của
                        chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                    </div>
                    <div class="text-center">
                        <button class="btn-regis" type="submit">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
    export default{
        name: 'Register',
        data(){
            return {
                fullname: '',
                email: '',
                password: '',
                repassword: '',
            }
        },
        methods:{
            ...mapActions(['registor']),
            handleRegistor(){
                let data = {
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password,
                    repassword: this.repassword,
                }
                this.registor(data).then(response => {
                    if(!response.oke){
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Thông báo',
                            text: response.error
                        });
                    }
                    else{
                        this.$router.push('/');
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Thông báo',
                            text: 'Đăng ký thành công'
                        });
                    }
                })
            }
        }

    }
</script>
<style>
</style>

