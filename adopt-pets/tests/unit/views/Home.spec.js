import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import Home from '@/views/Home.vue'
import getters from '@/store/getters'
import cats from '@/data/cats'
import dogs from '@/data/dogs'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

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
    
  it('should display Adopt a new friend text', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })

    expect(wrapper.find('#header').text()).toBe('Adopt a new friend!')
  })

  it('should display animal count info', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })

    expect(wrapper.find('#info').text()).toBe(`Animals available to adopt: ${cats.length + dogs.length}`)
  })

  it('should render add new pet button', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })

    expect(wrapper.find('#petFormButton')).toBeTruthy()
  })

  it('should not display add new pet form', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })
    expect(wrapper.find('#petForm').exists()).toBeFalsy()
  })

  it('should display add new pet form when button is clicked', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })
    const spy = jest.spyOn(wrapper.vm, 'togglePetForm')

    wrapper.find('#petFormButton').trigger('click')

    expect(spy).toHaveBeenCalled()
    expect(wrapper.find('#petForm').exists).toBeTruthy()
  })
})