<template>
  <div id="app">
    <div class="noprint">
      <ReaderJson @load="stock = $event" />
      <button @click="printPriceList()">
        Print
      </button>
    </div>
    <div v-if="hasProductGroups()">
      <ProductGroup
        v-for="groupId in stock.groups.ids"
        :key="groupId"
        :group-title="stock.groups.entities[groupId].title"
        :group-info="stock.groups.entities[groupId].info"
        :products="filterProducts(groupId)"
      />
    </div>
  </div>
</template>

<script>
import ProductGroup from '@/components/ProductGroup.vue';
import ReaderJson from '@/components/ReaderJson.vue';

export default {
  name: 'App',
  components: {
    ProductGroup,
    ReaderJson,
  },
  data() {
    return {
      stock: null,
    };
  },
  methods: {
    filterProducts(groupId) {
      return this.stock.products.filter(product => product.groupId === groupId);
    },
    hasProductGroups() {
      return this.stock !== null;
    },
    printPriceList() {
      window.print();
    },
  },
};
</script>

<style scoped lang="scss">
@media print {
  .noprint {
    display: none;
  }
}
</style>
