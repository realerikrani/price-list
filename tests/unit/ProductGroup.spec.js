import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProductGroup from '@/components/ProductGroup.vue';
import ProductItem from '@/components/ProductItem.vue';


describe('ProductGroup.vue', () => {
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
  ];

  it('renders no groups which are empty of products', () => {
    // given
    const propsData = {
      groupTitle: 'any title',
      groupInfo: 'any info',
      products: [],
    };

    // when
    const wrapper = shallowMount(ProductGroup, { propsData });

    // then
    expect(wrapper.find('.group').exists()).to.be.equal(false);
  });

  it('renders group title', () => {
    // given
    const propsData = {
      groupTitle: 'any title',
      groupInfo: null,
      products,
    };

    // when
    const wrapper = shallowMount(ProductGroup, { propsData });

    // then
    expect(wrapper.find('.group__title').text())
      .to.include(propsData.groupTitle);
  });

  it('renders group info when it is given', () => {
    // given
    const propsData = {
      groupTitle: 'any title',
      groupInfo: 'any group info',
      products,
    };

    // when
    const wrapper = shallowMount(ProductGroup, { propsData });

    // then
    expect(wrapper.find('.group__info').text())
      .to.include(propsData.groupInfo);
  });

  it('renders no group info when it is missing', () => {
    // given
    const propsData = {
      groupTitle: 'any title',
      groupInfo: null,
      products,
    };

    // when
    const wrapper = shallowMount(ProductGroup, { propsData });

    // then
    expect(wrapper.find('.group__info').exists()).to.be.equal(false);
  });

  it('renders product items', () => {
    // given
    const propsData = {
      groupTitle: 'any title',
      groupInfo: null,
      products,
    };

    // when
    const wrapper = shallowMount(ProductGroup, { propsData });

    // then
    expect(wrapper.findAll(ProductItem).length).to.be.equal(2);
  });
});
