### Hello world example

<p> The example is very simple.<br>
This looks pretty similar to rendering a string template (Hello Vue), but Vue has done a lot of work under the hood. 
The data and the DOM are now linked, and everything is now reactive. 

🤔 How to check that?<br>
➡ Open your browser’s console and set app.message to a different value. 

🤔 What do we get because of this?<br>
➡ We no longer have to interact with the HTML directly. A Vue app attaches itself to a single DOM element (#app) 
then fully controls it. The HTML is our entry point, but everything else happens within the newly created Vue instance.