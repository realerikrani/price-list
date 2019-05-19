import { storiesOf } from '@storybook/vue';
import ProductGroup from '@/components/ProductGroup.vue';

const sampleGroup = {
  groupTitle: 'any group title',
  groupInfo: null,
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

const template = '<ProductGroup :groupTitle="groupTitle" :groupInfo="groupInfo" :products="products"></ProductGroup>';

storiesOf('ProductGroup', module)
  .add('with products and without info', () => ({
    components: { ProductGroup },
    data() {
      return {
        ...sampleGroup,
        products,
      };
    },
    template,
  }))
  .add('with products and with info', () => ({
    components: { ProductGroup },
    data() {
      return {
        ...sampleGroup,
        groupInfo: 'any group info',
        products,
      };
    },
    template,
  }))
  .add('without products', () => ({
    components: { ProductGroup },
    data() {
      return {
        ...sampleGroup,
        products: [],
      };
    },
    template,
  }));
