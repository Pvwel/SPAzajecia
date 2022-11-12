<template>
    <h1> {{contentHC}}</h1>
</template>

<script>
export default{
    name: "HeaderComponent",
    props: {
        text:String
    },
    data() {
        return {
            contentHC: this.text,
        }
    },

    watch: {
        text(nVal) {
            return this.contentHC = nVal
        }
    }
}
</script>

<style>

</style>