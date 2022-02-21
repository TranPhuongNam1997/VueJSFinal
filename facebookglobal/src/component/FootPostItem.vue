<template>
    <div class="count-cmt">
        <a href="#">
            <i></i>123 bình luận
        </a>
    </div>
</template>
<script>
    export default{
        name:'foot-postitem',
        data(){
            return{
                
            }
        },
        props:{
            post:{
                type: Object,
                default: null
            }
        },
    }
</script>