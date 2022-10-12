import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuestionAnswer = () => {
    const quizData = useLoaderData().data;
    const questions = quizData.questions;

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-5 text-violet-500'>Quiz of {quizData.name}</h1>
            {
                questions.map((quiz, idx) => <Question
                    key={idx}
                    quiz={quiz}
                ></Question>)
            }
        </div>
    );
};

export default QuestionAnswer;