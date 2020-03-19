<template>
    <div>
        <fetcher-image v-for="image in images" :key="image.id" :image="image" :grayscale="grayscale"/>
    </div>
</template>

<script>
    import FetcherImage from "./FetcherImage";
    export default {
        name: "FetcherGrid",
        components: {FetcherImage},
        props: {
            grayscale: {
                type: Boolean,
                required: true
            },
            images: {
                type: Object,
                required: true
            }
        }
    }
</script>