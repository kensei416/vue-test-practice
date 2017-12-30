import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

function getInstance (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

const instance = getInstance(HelloWorld)
describe('HelloWorld.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof HelloWorld.data).to.equal('function')
    const defaultData = HelloWorld.data()
    expect(defaultData.msg).to.equal('Welcome to Your Vue.js App!')
  })

  // コンポーネントインスタンスをマウントして検証します。
  it('correctly sets the message when created', () => {
    expect(instance.msg).to.equal('Welcome to Your Vue.js App!')
  })

  // マウントされたコンポーネントインスタンスを描画して検証します。
  it('renders the correct message', () => {
    expect(instance.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App!')
  })

  it('renders correctly with different props', () => {
    let instance = getInstance(HelloWorld, {person: 'john'})
    expect(instance.$el.querySelector('.hello h2').textContent)
    .to.equal('john')
    instance = getInstance(HelloWorld, {person: 'hoge hoge'})
    expect(instance.$el.querySelector('.hello h2').textContent)
    .to.equal('hoge hoge')
  })
})
