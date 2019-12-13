What problem does the context API help solve?

    Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions ensure that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state.

    Reducers are just pure functions that take the previous state and an action, and return the next state.

    Store-- A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle.
    
    Store -- It means that there is only one place which represents state of application, and your UI listens to it.

What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Your application state is global, and your component state is local

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

What is your favorite state management system you've learned and this sprint? Please explain why!

    Dont have a favorite but redux is decent once you understand how the flow works.