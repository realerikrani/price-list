<template>
  <div
    v-if="hasProducts()"
    class="group"
  >
    <div class="group__title">
      {{ groupTitle }}
      <div
        v-if="groupInfo"
        class="group__info"
      >
        {{ groupInfo }}
      </div>
    </div>
    <ProductItem
      v-for="product in products"
      :key="product.info"
      :info="product.info"
      :extra-info="product.extraInfo"
      :price="product.price"
    />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    groupTitle: {
      type: String,
      required: true,
    },
    groupInfo: {
      type: [String, null],
      required: false,
      default: null,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    hasProducts() {
      return this.products.length;
    },
  },
};
</script>

<style scoped lang="scss">
@page {
  size: A5 portrait;
  margin-left: 2cm;
  margin-right: 2cm;
}

.group {
  font-family: roboto, sans-serif;
  text-align: left;
  margin: 2rem;
  text-align: center;
  page-break-inside: avoid;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.16);
  padding: 0.5rem;

  &__title {
    font-size: 2vw;
    font-weight: bold;
    margin-bottom: 1rem;

    @media print {
      font-size: 3.5vw;
      font-weight: bold;
    }
  }

  &__info {
    font-size: 1vw;

    @media print {
      font-size: 1.5vw;
    }
  }
}
</style>
