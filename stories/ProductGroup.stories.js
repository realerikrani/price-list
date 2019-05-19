import { storiesOf } from '@storybook/vue';
import ProductGroup from '@/components/ProductGroup.vue';

const sampleGroup = {
  title: 'any group title',
  info: null,
};

const products = [
  {
    info: 'any first product info',
    extraInfo: null,
    price: 'any first price',
    groupId: 'any group id',
  },
  {
    info: 'any second product info',
    extraInfo: 'any product extra info',
    price: 'any second price',
    groupId: 'any group id',
  },
  {
    info: 'any third product info',
    extraInfo: null,
    price: 'any third price',
    groupId: 'any group id',
  },
];

storiesOf('ProductGroup', module)
  .add('with products and without info', () => ({
    components: { ProductGroup },
    data() {
      return {
        group: sampleGroup,
        products,
      };
    },
    template: '<ProductGroup :group="group" :products="products"></ProductGroup>',
  }))
  .add('with products and with info', () => ({
    components: { ProductGroup },
    data() {
      const group = { ...sampleGroup, info: 'any group info' };
      return {
        group,
        products,
      };
    },
    template: '<ProductGroup :group="group" :products="products"></ProductGroup>',
  }))
  .add('without products', () => ({
    components: { ProductGroup },
    data() {
      return {
        group: sampleGroup,
        products: [],
      };
    },
    template: '<ProductGroup :group="group" :products="products"></ProductGroup>',
  }));
