<template>
  <input
    type="file"
    @change="readContent"
  >
</template>

<script>
export default {
  methods: {
    readContent(fileChangeEvent) {
      const file = fileChangeEvent.target.files[0];
      const reader = new FileReader();

      reader.onload = (fileEvent) => {
        try {
          this.$emit('load', JSON.parse(fileEvent.target.result));
        } catch (_) {
          alert('Error! Is the uploaded file valid JSON?'); // eslint-disable-line no-alert
        }
      };
      reader.readAsText(file);
    },
  },
};
</script>
