<script>
export default {
    name: "Input",
    props: {
        label: String,
        modelValue: String,
        id: String,
        type: String
    },
    methods: {
        onInput(e) {
            this.$emit("update:modelValue",e.target.value)
        }
    },
}
</script>

<template>
    <form  class="form-floating my-3">
        <input :type="type" class="form-control" :id="id" :placeholder="label" :value="modelValue" @input="onInput" />
        <label :for="id">{{ label }}</label>
    </form>
</template>

<style></style>
