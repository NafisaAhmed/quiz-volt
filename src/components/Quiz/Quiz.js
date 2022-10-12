import React from 'react';

const Quiz = ({ quiz }) => {
    const { logo, name, total } = quiz;
    return (
        <div className='mx-12 border-2 w-64'>
            <img className='w-56 mx-auto my-2 bg-slate-100' src={logo} alt="" />
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-xl'>Total Questions: {total}</p>
                <button className='text-white bg-violet-400 mb-2 px-5 rounded'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;