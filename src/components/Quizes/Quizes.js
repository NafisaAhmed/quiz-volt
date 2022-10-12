import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizesObj = useLoaderData();
    const quizes = quizesObj.data;
    console.log(quizes)
    return (
        <div>
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