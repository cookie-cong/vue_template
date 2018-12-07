<template>
    <div>
        {{n}}
        <button @click="change">改变</button>
    </div>
</template>
<script>
export default {
    props:["name"],
    computed:{
        n(){
            return this.$store.state.demo[this.name];
        }
    },
    methods:{
        change(){
            this.$store.commit("changeNum",this.name)
        }
    }
}
</script>

