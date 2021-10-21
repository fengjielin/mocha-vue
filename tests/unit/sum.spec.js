import { expect } from 'chai'
import { mount, shallowMount } from '@vue/test-utils'

import { sum } from '../../src/code/sum.js'

import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

describe('Hello World', () => {
  it('传递属性后是否能正常显示结果', () => {
    let Constructor = Vue.extend(HelloWorld);
    let vm = new Constructor({ propsData: { msg: 'hello' } }).$mount();
    expect(vm.$el.querySelector('h1').innerHTML).to.be.contain('hello')
  })
})

describe('测试方法', () => {
  it('相等关系', () => {
    expect(1 + 1).to.be.equal(2);
    expect([1, 2, 3]).to.be.lengthOf(3);
    expect(true).to.be.true;
  });
  it('包含', () => {
    expect('zfpx').to.be.contain('zf');
    expect('zfpx').to.be.match(/zf/);
  });
  it('大于 小于', () => {
    expect(5).to.be.greaterThan(3);
    expect(3).to.be.lessThan(5);
    expect(3).to.be.not.greaterThan(10);
  })
})