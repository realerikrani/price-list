import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';


describe('ProductItem.vue', () => {
  before(() => {
    this.price = 'any price';
    this.info = 'any info';
  });

  it('renders price and info', () => {
    // given
    const propsData = { price: this.price, info: this.info };

    // when
    const wrapper = shallowMount(ProductItem, { propsData });

    // then
    expect(wrapper.find('.product__price').text()).to.include(this.price);
    expect(wrapper.find('.product__info').text()).to.include(this.info);
  });

  it('renders extra info when it is given', () => {
    // given
    const extraInfo = 'any extra info';
    const propsData = { price: this.price, info: this.info, extraInfo };

    // when
    const wrapper = shallowMount(ProductItem, { propsData });

    // then
    expect(wrapper.find('.product__extra').text()).to.include(extraInfo);
  });

  it('renders no extra info when it is missing', () => {
    // given
    const propsData = { price: this.price, info: this.info };

    // when
    const wrapper = shallowMount(ProductItem, { propsData });

    // then
    expect(wrapper.find('.product__extra').exists()).to.be.equal(false);
  });
});
