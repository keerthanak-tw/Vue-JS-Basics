import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import routes from '@/router';
import BootstrapVue from 'bootstrap-vue';
import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);

describe('App component', () => {
  let router;
  beforeEach(() => {
    router = new VueRouter({
      router: routes
    });
  });

  it('renders all routes', () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    const routeLinks = wrapper.findAll('a');
    expect(routeLinks).toHaveLength(3);
  });

  it('renders Home view when mounted', () => {
    const wrapper = mount(App, {
      localVue,
      router
    });
    const homePath = '/';

    expect(wrapper.vm.$route.path).toBe(homePath);
  });

  it('should render Cat view when cats link is clicked', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });
    const catPath = '/cats';

    wrapper.find('#cats').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$route.path).toBe(catPath);
  });

  it('should render Dog view when dogs link is clicked', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });
    const dogPath = '/dogs';

    wrapper.find('#dogs').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$route.path).toBe(dogPath);
  });
});
