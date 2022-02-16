<template>
    <div class="container">
        <div class="row align-items-center flex-column">
            <div class="col-lg-6">
                <div class="post-upload mb-5">
                    <h3 class="title-post">Chỉnh sửa Trang cá nhân</h3>
                    <div class="post-upload-box">
                        <div class="font-weight-bold">Ảnh đại diện</div>
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"/>
                                <label for="imageUpload"></label>
                            </div>
                            <div class="avatar-preview">
                                <div id="imagePreview"
                                        style="background-image: url('https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/109116642_278706606677722_7309285219947855714_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dV2by5ahqQQAX_cZsWB&_nc_ht=scontent.fhan5-2.fna&oh=15fafd432a1a375010a9447b460b316d&oe=60DFB4DC');">
                                </div>
                            </div>
                        </div>
                        <div class="field-ip">
                            <input type="text" placeholder="Họ tên...">
                        </div>
                        <div class="field-ip">
                            <select required>
                                <option disabled value="" selected>Giới tính</option>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                                <option value="3">Khác</option>
                            </select>
                        </div>

                        <div class="field-ip">
                            <textarea placeholder="Tiểu sử ngắn"></textarea>
                        </div>

                        <div class="text-center mt-3 mb-3">
                            <button class="btn-lightblue">Chỉnh sửa thông tin giới thiệu</button>
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
        name: 'UserProfile',
        data(){
            return {

            }
        }
    }
</script>
<style>
</style>