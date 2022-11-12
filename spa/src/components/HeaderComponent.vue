<template>
    <h1 @click="showComponent"> {{contentHC}}</h1>
    <span v-if="virtualComponent">kolejny komponent</span>
</template>

<script>
export default{
    name: "HeaderComponent",
    props: {
        text:String
    },
    data() {
        return {
            virtualComponent: false
            contentHC: this.text,
        }
    },

    watch: {
        text(nVal) {
            return this.contentHC = nVal
        }
    }

    methods: {
        showComponent() {
            this.virtualComponent = true
        }
    }
}
</script>

<style>

</style>