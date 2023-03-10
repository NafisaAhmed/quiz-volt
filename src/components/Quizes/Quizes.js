import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import img from '../../images/quiz.jpg'

const Quizes = () => {
    const quizesObj = useLoaderData();
    const quizes = quizesObj.data;
    return (
        <div>
            <img className='w-10/12 h-56 mx-auto' src={img} alt="" />
            <h1 className='text-3xl my-10 font-bold text-center'>Select your Quiz</h1>
            <div className='md:flex mt-10 grid grid-cols-1 mx-20 gap-4 md:gap-0 md:mx-2'>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;