<template>
    <div>
        <checkbox
                label="Make photos grayscale"
                :value="value"
                @input="$emit('input', $event)"
                name="grayscale_toggle"
        ></checkbox>
        <div class="button">
            <button @click="$emit('fetch')">Fetch new photos</button>
        </div>
    </div>
</template>

<script>
    import Checkbox from "../form/Checkbox";
    export default {
        name: "FetcherToolbar",
        components: {Checkbox},
        props: {
            value: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .checkbox {
        width:50%;
        float: left;
    }
    .button {
        button {
            position: relative;
            left:100%;
            transform: translate(-100%,0);
            border:0 solid mediumpurple;
            border-radius: 2px;
            background: mediumpurple;
            padding: 0.5rem 1rem;
            color: white;
            font-weight: bold;
        }
        width:50%;
        float: left;
    }
</style>
