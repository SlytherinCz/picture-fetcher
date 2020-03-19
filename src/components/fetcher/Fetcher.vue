<template>
    <div>
        <fetcher-toolbar v-model="grayscale" @fetch="fetchImages"></fetcher-toolbar>
        <fetcher-grid :grayscale="grayscale" :images="images"></fetcher-grid>
    </div>
</template>

<script>
    import FetcherToolbar from "./FetcherToolbar";
    import FetcherGrid from "./FetcherGrid";
    export default {
        name: "Fetcher",
        components: {FetcherGrid, FetcherToolbar},
        data() {
            return {
                grayscale: false,
                images: {}
            }
        },
        methods: {
            async fetchImages() {
                this.images = await this.$imageFetcherService.fetchImages(4)
            }
        },
        mounted() {
            this.fetchImages()
        }
    }
</script>