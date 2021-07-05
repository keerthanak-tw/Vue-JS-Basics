### Components

Component system is an abstraction that help us build large scale applications
using small, reusable components. In Vue, a component is essentially a Vue instance with pre-defined options.

The [example](./index.html) given, seperates the application into smaller units and the child is decoupled from parent via props
interface.

💡 How our application would look like using components
```shell
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```