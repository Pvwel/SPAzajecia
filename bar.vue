<template>
    <header>
        <h1 @click="changeContent">{{content}}</h1>
    </header>


<main>
</main>

</template>

<script lang="ts">
    export default
    data(){
        return {
            content: 'WEB'
        }
    },
methods: {
    changeContent() {
        this.content = "strona"
    }
}



</script>