import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';


describe('ProductItem.vue', () => {
  const price = 'any price';
  const info = 'any info';

  it('renders price and info', () => {
    // given
    const propsData = { price, info };

    // when
    const wrapper = shallowMount(ProductItem, { propsData });

    // then
    expect(wrapper.find('.product__price').text()).to.include(price);
    expect(wrapper.find('.product__info').text()).to.include(info);
  });

  it('renders extra info when it is given', () => {
    // given
    const extraInfo = 'any extra info';
    const propsData = { price, info, extraInfo };

    // when
    const wrapper = shallowMount(ProductItem, { propsData });

    // then
    expect(wrapper.find('.product__extra').text()).to.include(extraInfo);
  });

  it('renders no extra info when it is missing', () => {
    // given
    const propsData = { price, info };

    // when
    const wrapper = shallowMount(ProductItem, { propsData });

    // then
    expect(wrapper.find('.product__extra').exists()).to.be.equal(false);
  });
});
