import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

function getInstance (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const instance = getInstance(HelloWorld, {person: 'john'})
    expect(instance.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App')
  })
})
