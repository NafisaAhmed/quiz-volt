import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const [total, setTotal] = useState([]);
    axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const totalQuestions = data.data.data;
            const totalData = totalQuestions.map(question => {
                const singleQuestion = {
                    name: question.name,
                    total: question.total,
                }
                return singleQuestion;
            });
            console.log(totalData);
            setTotal(totalData);
        })
    return (
        <div className='md:mx-96'>
            <h1 className='text-center font-bold text-2xl my-10'>Chart</h1>
            {
                <BarChart width={500} height={200} data={total}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            }
        </div>
    );
};

export default Statistics;