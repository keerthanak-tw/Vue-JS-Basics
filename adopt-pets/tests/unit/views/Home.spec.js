import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import Home from '@/views/Home.vue';
import getters from '@/store/getters';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
import cats from '@/data/cats';
import dogs from '@/data/dogs';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Home view', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      getters,
      actions,
      mutations,
      state: {
        cats,
        dogs
      }
    });
  });

  it('should display title, animal count, add new pet button when component is mounted', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    });

    expect(wrapper.find('#header').text()).toBe('Adopt a new friend!');
    expect(wrapper.find('#info').text()).toBe(`Animals available to adopt: ${cats.length + dogs.length}`);
    expect(wrapper.find('#petFormButton')).toBeTruthy();
    expect(wrapper.find('#petForm').exists()).toBeFalsy();
  });

  it('should call togglePetForm form and render form with all fields when add new pet button is clicked', async () => {
    const wrapper = mount(Home, {
      store,
      localVue
    });
    const spy = jest.spyOn(wrapper.vm, 'togglePetForm');

    await wrapper.find('#petFormButton').trigger('click');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#petForm').exists()).toBeTruthy();
    expect(wrapper.find('#name').exists()).toBeTruthy();
    expect(wrapper.find('#species').exists()).toBeTruthy();
    expect(wrapper.find('#age').exists()).toBeTruthy();
    expect(wrapper.find('#submit').exists()).toBeTruthy();
    expect(wrapper.find('#reset').exists()).toBeTruthy();
  });

  it('should display entered values in form', async () => {
    const wrapper = mount(Home, {
      store,
      localVue
    });

    await wrapper.find('#petFormButton').trigger('click');

    const name = wrapper.find('#name-input');
    const speciesOptions = wrapper.find('#species-dropdown').findAll('option');
    const age = wrapper.find('#age-input');

    await name.setValue('Bosco');
    await speciesOptions.at(0).setSelected();
    await age.setValue(2);

    expect(wrapper.vm.formData.name).toBe('Bosco');
    expect(wrapper.vm.formData.species).toBe('cats');
    expect(wrapper.vm.formData.age).toBe('2');
  });

  it('should call handleSubmit, actions, set state and data when form is submitted', async () => {
    const wrapper = mount(Home, {
      store,
      localVue
    });
    const payload = {
      species: 'cats',
      pet: {
        name: 'Bosco',
        age: '2'
      }
    };
    const submitSpy = jest.spyOn(wrapper.vm, 'handleSubmit');
    const actionSpy = jest.spyOn(wrapper.vm, 'addPet');
    await wrapper.find('#petFormButton').trigger('click');

    await wrapper.find('#name-input').setValue('Bosco');
    await wrapper.find('#species-dropdown').findAll('option').at(0).setSelected();
    await wrapper.find('#age-input').setValue(2);
    await wrapper.find('#submit').trigger('click');

    expect(submitSpy).toHaveBeenCalled();
    expect(submitSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.formData.name).toBe('');
    expect(wrapper.vm.formData.species).toBe(null);
    expect(wrapper.vm.formData.age).toBe(0);
    expect(actionSpy).toHaveBeenCalled();
    expect(actionSpy).toHaveBeenCalledTimes(1);
    expect(actionSpy).toHaveBeenCalledWith(payload);
  });
});
