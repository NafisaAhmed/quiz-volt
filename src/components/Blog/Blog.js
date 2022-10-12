import React from 'react';

const Blog = () => {
    return (
        <div className='w=9/12 mx-32 mt-20'>
            <h1 className='text-2xl font-bold mt-7'>1. What is the purpose of React Router?</h1>
            <p className='mb-12'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h1 className='text-2xl font-bold mt-7'>2. How does Context API work?</h1>
            <p className='mb-12'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h1 className='text-2xl font-bold mt-7'>3. What is useRef?</h1>
            <p>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    );
};

export default Blog;