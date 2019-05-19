import { storiesOf } from '@storybook/vue';
import ProductItem from '@/components/ProductItem.vue';

storiesOf('ProductItem', module)
  .add('with extra info', () => ({
    components: { ProductItem },
    data() {
      return {
        key: 'any key',
        info: 'any info',
        extraInfo: 'any extra info',
        price: 'any price',
      };
    },
    template: '<ProductItem :key="key" :info="info" :extra-info="extraInfo" :price="price"></ProductItem>',
  }))
  .add('without extra info', () => ({
    components: { ProductItem },
    data() {
      return {
        key: 'any key',
        info: 'any info',
        extraInfo: null,
        price: 'any price',
      };
    },
    template: '<ProductItem :key="key" :info="info" :extra-info="extraInfo" :price="price"></ProductItem>',
  }));
