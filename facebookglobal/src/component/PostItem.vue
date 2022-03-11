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

<style>
.post-item{
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
}
</style>