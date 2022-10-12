import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;

    return (
        <div className='text-center'>
            <h1 className='mt-5 text-violet-700 font-bold'>Quiz: {question.replace(/(<([^>]+)>)/ig, '')}</h1>
            <form action="">
                <div className='grid grid-cols-2 mx-80'>
                    <div className='mt-5'>
                        <div className='border-2 py-4 m-2 hover:bg-slate-200'>
                            <input onClick={() => options[0] === correctAnswer ? toast('right') : toast('wrong')} className='mr-3' type="radio" name="choose" id="a" value={options[0] ? options[0] : 'null'} />
                            <label htmlFor="a">{options[0] ? options[0] : 'null'}</label><br />

                        </div>

                        <div className='border-2 py-4 m-2 hover:bg-slate-200'>
                            <input onClick={() => options[1] === correctAnswer ? toast('right') : toast('wrong')} className='mr-3' type="radio" name="choose" id="b" value={options[1] ? options[1] : 'null'} />
                            <label htmlFor="b">{options[1] ? options[1] : 'null'}</label><br />

                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='border-2 py-4 m-2 hover:bg-slate-200'>
                            <input onClick={() => options[2] === correctAnswer ? toast('right') : toast('wrong')} className='mr-3' type="radio" name="choose" id="c" value={options[2] ? options[2] : 'null'} />
                            <label htmlFor="c">{options[2] ? options[2] : 'null'}</label><br />

                        </div>

                        <div className='border-2 py-4 m-2 hover:bg-slate-200'>
                            <input onClick={() => options[3] === correctAnswer ? toast('right') : toast('wrong')} className='mr-3' type="radio" name="choose" id="d" value={options[3] ? options[3] : 'null'} />
                            <label htmlFor="d">{options[3] ? options[3] : 'null'}</label><br />

                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </form >

        </div >

    );
};

export default Question;