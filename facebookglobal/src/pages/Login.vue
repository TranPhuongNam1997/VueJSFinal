<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="text-center">
                <router-link to="/"><img class="logo-login" src="/dist/img/logo.svg" alt="img"></router-link>

            </div>
            <div class="bg-white">
                <form action="">
                    <div class="form-login">
                        <div class="field-ip">
                            <input type="text" placeholder="Email hoặc số điện thoại">
                        </div>
                        <div class="field-ip">
                            <input id="password-login" type="password" placeholder="Mật khẩu">
                            <div class="showhide-pass">
                                <div class="show-pass">
                                    <img class="" src="/dist/img/iconshowpass.png" alt="img">
                                </div>
                                <div class="hide-pass">
                                    <img class="" src="/dist/img/iconhidepass.png" alt="img">
                                </div>
                            </div>
                        </div>

                        <button class="btn-login">Đăng nhập</button>
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
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="head-register">
                        <button class="btn-close-register" data-dismiss="modal" aria-label="Close"><img src="/dist/img/close.png" alt="img"></button>
                        <div>Đăng ký</div>
                        <div class="txt-fast">Nhanh chóng và dễ dàng.</div>
                    </div>
                    <div class="body-register">
                        <form action="#">
                            <div class="field-register">
                                <input type="text" placeholder="Họ tên">
                            </div>
                            <div class="field-register">
                                <input type="text" placeholder="Số di động hoặc email">
                            </div>
                            <div class="field-register">
                                <input type="text" placeholder="Mật khẩu mới">
                            </div>
                            <div class="field-register">
                                <input type="text" placeholder="Nhập lại mật khẩu">
                            </div>
                            <div class="rules">
                                Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản, Chính sách dữ liệu</a>  và <a
                                    href="#">Chính sách cookie</a>  của
                                chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                            </div>
                            <div class="text-center">
                                <button class="btn-regis">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'login',
        data(){
            return {

            }
        }
    }
</script>
<style>
</style>