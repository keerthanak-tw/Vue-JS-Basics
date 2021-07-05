### Declarative rendering

The v-bind attribute used in this example is called a directive. The directives are prefixed 
with v- to indicate that they are special attributes provided by Vue.

🤔 What is the use of such attributes?<br>
➡ They apply special reactive behavior to the rendered DOM. In the case of v-bind, element’s title attribute 
is kept up-to-date with the message property on the Vue instance.