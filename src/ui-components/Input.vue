<script>
export default {
    name: "Input",
    props: {
        label: String,
        id: String,
        type: String
    }
}
</script>

<template>
    <div class="form-floating my-3">
        <input :type="type" class="form-control" :id="id" :placeholder="label" />
        <label :for="id">{{ label }}</label>
    </div>
</template>

<style></style>
