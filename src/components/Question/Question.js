import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const notify = () => toast(`Correct Answer: ${correctAnswer}`);


    return (
        <div className='text-center drop-shadow-2xl my-10 mx-auto bg-slate-100 w-8/12 p-5'>
            <div className='flex mx-44'>
                <h1 className='mt-5 text-violet-700 font-bold'>Quiz: {question.replace(/(<([^>]+)>)/ig, '')}</h1>
                <button onClick={notify} className='ml-12 my-5'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            </div>
            <form action="">
                <div className='grid grid-cols-2 px-24'>
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