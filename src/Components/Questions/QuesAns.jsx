import React from 'react';
import './QuesAns.css'
const QuesAns = () => {
    return (
        <div className='ques-ans-container'>
            <div className="ques">
                <h5 className='text-center'>(1) What are the differences between props and state?</h5>
                <div className='answers fw-semibold'>Props are read-only values passed from a parent component to a child component, while state is a mutable value that is managed within a component itself. Props are used to pass data down the component tree, while state is used to manage internal component state.</div>
            </div>
            <div className="ques">
                <h5 className='text-center'>(2) How does useState() work?</h5>
                <div className='answers fw-semibold'>useState() is a built-in hook in React that allows functional components to have state. It returns an array with two values: the current state value and a function that updates the state value. The function to update the state can be passed a new state value, or a callback function that returns a new state value based on the previous state value.</div>
            </div>
            <div className="ques">
                <h5 className='text-center'>(3) What else useEffect() can do but Data Loading?</h5>
                <div className='answers fw-semibold'>The useEffect() hook can be used for other purposes besides data loading. It can be used to subscribe to events, set up and clean up timers, detect changes in the browser's location, or perform other side effects. It can also be used to perform cleanup tasks before a component is unmounted, such as closing a WebSocket connection or cancelling a subscription.

                </div>
            </div>
            <div className="ques">
                <h5 className='text-center'>(4) How does react work?</h5>
                <div className='answers fw-semibold'>React is a JavaScript library that uses components to build user interfaces. It updates the UI automatically when data changes, using a virtual DOM to minimize actual DOM manipulations. It also provides lifecycle methods for performing side effects and cleanup tasks.</div>
            </div>
        </div>
    );
};

export default QuesAns;