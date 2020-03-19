<template>
    <div class="checkbox">
        <div class="switch" :for="id">
            <input
                    :id="id"
                    :name="name"
                    :checked="value"
                    @input="input"
                    type="checkbox"
            />
            <div class="slider round"></div>
        </div>
        <label :for="id">{{label}}</label>
    </div>

</template>

<script>
    export default {
        name: "Checkbox",
        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: Boolean,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                id: "checkbox_"
            }
        },
        beforeMount() {
            this.id += Math.random().toString(36).substr(2, 9)
        },
        methods: {
            input(event) {
                this.$emit('input', event.target.checked)
            }
        }
    }
</script>

<style lang="scss">
    $checked-color: #1877c1;
    $unchecked-color: #888;

    .switch {
        display: inline-block;
        height: 22px;
        position: relative;
        width: 40px;
    }

    .switch input {
        opacity:0;
    }

    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
    }

    .slider:before {
        background-color: #fff;
        bottom: 3px;
        content: "";
        height: 16px;
        left: 3px;
        position: absolute;
        transition: .4s;
        width: 16px;
    }

    input:checked + .slider {
        background-color: #66bb6a;
    }

    input:checked + .slider:before {
        transform: translateX(16px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    label {
        position:absolute;
        padding-left: 45px;
        height: 22px;
        line-height: 22px;
        left:0;
    }
</style>