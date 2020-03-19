<template>
    <div class="fetcher-image">
        <img :src="imgsrc" :alt="`Author ${image.author}`">
        <div class="caption">
            <h3>{{ !image.error ? image.author: 'Cannot load image'}}</h3>
            <a v-if="!image.error" :href="image.url">{{image.url}}</a>
            <p v-else>{{image.error}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FetcherImage",
        props: {
            image: {
                type: Object,
                required: true
            },
            grayscale: {
                type: Boolean,
                required:true
            },
            width: {
                type: Number,
                default: 367
            },
            height: {
                type: Number,
                default: 367
            }
        },
        computed: {
            imgsrc() {
                if(!this.image.error) {
                    return `https://picsum.photos/id/${this.image.id}/${this.width}/${this.height}/${ this.grayscale ? '?grayscale=true' : ''}`
                } else {
                    return `https://via.placeholder.com/${this.width}x${this.height}?text=Cannot+load+image`
                }
            }
        }
    }
</script>

<style lang="scss">
    .fetcher-image {
        position:relative;
        width:367px;
        height: 367px;
        float:left;
        background: #2c3e50;
        &:nth-of-type(odd) {
            margin: 8px 8px 8px 0;
        }

        &:nth-of-type(even) {
            margin: 8px 0 8px 8px;
        }

        .caption {
            position:absolute;
            bottom:0;
            left:0;
            width:367px;
            color:white;
            padding: 1rem;
            background: rgba(0,0,0,0.4);

            a {
                color:white;
            }
        }
    }

</style>