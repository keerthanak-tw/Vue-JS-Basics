import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import getters from '@/store/getters'
import cats from '@/data/cats'
import dogs from '@/data/dogs'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home view', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      getters,
      state: {
        cats,
        dogs
      }
    })
  })
  it('should display Adopt a new friend in home page', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })

    console.log(wrapper)
    expect(wrapper.find("h1").text()).toBe('Adopt a new friend!')
  })
})
