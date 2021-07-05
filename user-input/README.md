### User Input

The v-on or v-model directive is used to handle inputs. It attaches event listeners that would invoke our Vue instance.

🤔 What is the difference between v-on and v-model?<br>
➡ In the  [example 1](./state-change-without-affecting-DOM.html), `v-on` directive is used in which all DOM manipulations are handled by Vue, and the code 
is focused on the underlying logic. Note that in the script, one more element called `method` has been added where we would define all methods we need.<br>
➡ Whereas, the [example 2](./state-change-with-change-in-DOM.html) uses `v-model` directive
that makes two-way binding between form input and app state. Since is has two way binding, no extra method definition is needed.

💡 The `v-on:<event>` can also be replaced with the shorthand `@<event>`.