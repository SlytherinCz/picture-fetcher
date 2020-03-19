<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style lang="scss">
    .container {
        position: relative;
        left:50%;
        transform: translate(-50%,0);
        min-width: 320px;
        max-width: 750px;
    }
</style>