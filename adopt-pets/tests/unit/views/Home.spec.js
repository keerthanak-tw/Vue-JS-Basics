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

  it('should call togglePetForm form when add new pet button is clicked', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })
    const spy = jest.spyOn(wrapper.vm, 'togglePetForm')

    wrapper.find('#petFormButton').trigger('click')

    expect(spy).toHaveBeenCalled()
  })

  it('should render add new pet form with all fields when add new pet button is clicked', async () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })

    await wrapper.find('#petFormButton').trigger('click')

    expect(wrapper.find('#petForm').exists()).toBeTruthy()
    expect(wrapper.find('#name').exists()).toBeTruthy()
    expect(wrapper.find('#species').exists()).toBeTruthy()
    expect(wrapper.find('#age').exists()).toBeTruthy()
    expect(wrapper.find('#submit').exists()).toBeTruthy()
    expect(wrapper.find('#reset').exists()).toBeTruthy()
  })

  it('should display entered values in form', async () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })

    await wrapper.find('#petFormButton').trigger('click')
    
    const name = wrapper.find('#name-input')
    const speciesOptions = wrapper.find('#species-dropdown').findAll('option')
    const age = wrapper.find('#age-input')

    await name.setValue('Bosco')
    await speciesOptions.at(0).setSelected()
    await age.setValue('2')

    expect(wrapper.vm.formData.name).toBe('Bosco')
    expect(wrapper.vm.formData.species).toBe('cats')
    expect(wrapper.vm.formData.age).toBe('2')
  })
})
