<template>
  <div class="product">
    <div class="product__info">
      {{ info }}
      <div
        v-if="extraInfo"
        class="product__extra"
      >
        {{ extraInfo }}
      </div>
    </div>
    <div class="product__price">
      {{ price }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      required: true,
    },
    extraInfo: {
      type: String,
      required: false,
      default: undefined,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  font-family: roboto, sans-serif;
  display: grid;
  text-align: right;
  grid-template-columns: 60% 40%;
  font-size: 2vw;
  padding: 0.5rem;
  border-top: 1px solid lightgrey;

  @media print {
    font-size: 3vw;
  }

  &__extra {
    font-size: 1vw;

    @media print {
      font-size: 1.5vw;
    }
  }

  &__price {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
