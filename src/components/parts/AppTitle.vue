<template>
  <h3 class="main-title"><slot></slot></h3>
</template>

<script>
export default {
    name: 'AppTitle',
    props: {
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .main-title {
        font-size: 28px;
        font-family: var(--mainFontBd);
        color: var(--mainTextBl);
        font-weight: bold;
        line-height: 1;
        text-align: center;
    }
</style>
