### Loops

The v-for attribute can be used to loop over a data structure. In the given example, it iterates over the todos array and 
prints the content in the DOM. Array handlers can be used to manage the todos array.<br>
For example, a new item can be added to the list as follows:
```shell
app4.todos.push({ text: 'New item' })
```

💡 The v-for directive requires a special syntax in the form of `item in items`, where `items` is 
the source data array and `item` is an alias for the array element being iterated on.
