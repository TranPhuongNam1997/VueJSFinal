<template>

    <div class="count-cmt">
        <a href="#" class="has-interactive"><img alt="Yêu thích" height="18" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18"> <span>123 Yêu thích</span> <div class="post-interactive"><ul><li><span><img src="/dist/img/icon-like.png" alt="img"></span></li> <li><span><img src="/dist/img/icon-heart.png" alt="img"></span></li> <li><span><img src="/dist/img/icon-tt.png" alt="img"></span></li> <li><span><img src="/dist/img/icon-sad.png" alt="img"></span></li> <li><span><img src="/dist/img/icon-pn.png" alt="img"></span></li></ul></div></a>
        <a href="#">
            <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/nileVELu9Gk.png');background-position:0 -209px;background-size:auto;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i>
            {{countComment}} bình luận
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
        computed:{
            countComment(){
                var numberComment = parseInt(this.post.count)
                if(numberComment){
                    return numberComment
                }
                return 0
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