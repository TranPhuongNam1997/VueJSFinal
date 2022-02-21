<template>
    <div class="post-item">
        <HeadPostItem :post="post" />
        <BodyPostItem :post="post"/>
        <FootPostItem :post="post"/>
    </div>
</template>
<script>
import HeadPostItem from "./HeadPostItem.vue"
import BodyPostItem from "./BodyPostItem.vue"
import FootPostItem from "./FootPostItem.vue"
import { mapActions } from 'vuex'
    export default{
    name: "post-item",
    data() {
        return {};
    },
    methods:{
        ...mapActions(['getListPost']),
        getListPost(){
            let data = {
                PAGE_SIZE: 3,
                CURR_PAGE: 1
            }
            return this.dispatch(getListPost(data));
        }
    },
    props:{
        post:{
            type: Object,
            default: null
        }
    },
    components: { HeadPostItem, BodyPostItem, FootPostItem }
}
</script>