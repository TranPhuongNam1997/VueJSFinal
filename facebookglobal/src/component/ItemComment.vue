<template>
    <li>
        <div class="box-cmt-parent" v-if="this.comment">
            <a href="#" class="avtbox-cmt-parent">
                <img :src="getAvatar" @error="getAvatarError" alt="img">
            </a>
            <div class="txt-cmt">
                <a href="#" class="txt-cmt-name">{{this.comment.fullname}}</a> <div class="timecmt">{{setTime}}</div>
                <p>{{this.comment.comment}}</p>
            </div>
        </div>
    </li>
</template>

<script>
    import setMoment from '../plugins/moment'
    export default{
        name: 'item-comment',
        data(){
            return{

            }
        },
        computed:{
            setTime(){
                return setMoment(this.comment.time_added)
            },
            getAvatar(){
                if(this.comment.profilepicture){
                    return this.comment.profilepicture
                }
                return 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg'
            }
        },
        props:{
            comment:{
                type: Object,
                default: {},

            }
        },
        methods:{
            getAvatarError(event){
                event.target.src = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-cat-default-avatar-png-image_5416936.jpg" 

            }
        }
    }

</script>

<style>
    .txt-cmt .txt-cmt-name{
        font-size: 14px;
    }
    .timecmt {
        display: inline-block;
        font-size: 12px;
        margin-left: 5px;
    }
    .txt-cmt{
        width: unset;
    }
</style>