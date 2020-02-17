import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <h1>Home Component</h1>
            <button onClick={() => console.log('Home Component CTA Clicked')}>Click Me</button>
        </Fragment>
    );
};

export default Home;
