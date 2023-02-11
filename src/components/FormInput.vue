<template>
    <div>
      <label for="input" class="form-label">{{ label }}:</label>
      <input id="input" :v-model="value" :type="type" />
    </div>
</template>
  
<script>
export default {
    props: {
        label: {
        type: String,
        required: true,
        },
        value: {
        type: String,
        default: '',
        },
        type: {
        type: String,
        default: 'text',
        },
    },
};
</script>

<style>
.form-label{
    color: #eee;
    padding: 0 20px;
    font-weight: bold;
}
</style>