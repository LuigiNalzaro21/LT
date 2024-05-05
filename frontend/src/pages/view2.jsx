import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const View2 = () => {
    const [title, setTitle] = useState("View Records Page");

    // Sample data for demonstration
    const data = [
        { id: 1, teacherName: "John Doe", dateEvaluated: "2024-04-30", evaluationCriteria: "Teaching Effectiveness", evaluationScore: 4, comments: "Great teacher!" },
        { id: 2, teacherName: "Jane Smith", dateEvaluated: "2024-04-29", evaluationCriteria: "Communication Skills", evaluationScore: 3, comments: "Needs improvement in communication" },
        { id: 3, teacherName: "Alex Johnson", dateEvaluated: "2024-04-28", evaluationCriteria: "Classroom Management", evaluationScore: 5, comments: "Excellent classroom management skills" }
    ];

    return (
        <div className='bg-gray-900 h-[100vh] md:h-full lg:h-full w-full pb-0 md:pb-1 lg:pb-1'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

            {/* Header */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='Title justify-start'>
                    <h1 className='text-white text-2xl md:text-3xl lg:text-4xl p-10 ml-2'>LearnTrack</h1>
                </div>

                <div className='flex justify-end'>
                    <h1 className='text-white text-2xl md:text-3xl lg:text-4xl p-10 md:p-10 lg:p-10 translate-x-14 md:translate-x-10 lg:translate-x-10 whitespace-nowrap'>Welcome, Admin</h1>
                    <Link to="/"><i className="fas fa-sign-out-alt text-white text-2xl md:text-4xl lg:text-4xl p-10 md:p-10 lg:p-10 pt-[47px] md:pt-[45px] lg:pt-[45px] 
                    whitespace-nowrap hover:text-gray-500" title='Signout'></i></Link>
                </div>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 m-8 md:m-16 lg:m-16 place-items-center gap-x-10 md:gap-x-5 lg:gap-x-0 bg-gray-600 p-3 md:p-4 lg:p-5 rounded-[20px] mb-20 md:mb-4 lg:mb-5'>

                <Link to='/add' className='text-white text-1xl md:text-2xl lg:text-3xl bg-gray-700 w-[130%] md:w-[110%] lg:w-[120%] ml-[40%] md:ml-[10%] lg:ml-[20%] p-3 md:p-4 lg:p-5
                 rounded-[20px] whitespace-nowrap hover:bg-gray-800 text-center'>Create Records</Link>
                <button className='text-white text-1xl md:text-2xl lg:text-3xl bg-gray-800 w-[130%] md:w-[110%] lg:w-[120%] ml-[45%] md:ml-[25%] lg:ml-[70%] p-3 md:p-4 lg:p-5
                 rounded-[20px] whitespace-nowrap'>View Records</button>
                <Link to="/main" className='text-white text-center text-1xl md:text-2xl lg:text-3xl bg-gray-500 p-3 md:p-4 lg:p-5 rounded-[20px] w-[90%] md:w-[80%] lg:w-[50%] whitespace-nowrap 
                hover:bg-gray-800 ml-[10%] md:ml-[10%] lg:ml-[50%]'>Go Back</Link>

            </div>

            {/* Table */}
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 bg-gray-800 m-8 md:m-16 lg:m-16 rounded-[20px]'>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 bg-gray-600 m-10 rounded-[20px] overflow-x-auto">

                <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
                    <Link to="/view" className='text-white text-center text-1xl md:text-2xl lg:text-3xl p-3 md:p-4 lg:p-5 rounded-tl-[20px] bg-gray-700 hover:bg-gray-500'>Teacher's Data</Link>
                    <Link to='/sheets' className='text-white text-center text-1xl md:text-2xl lg:text-3xl p-3 md:p-4 lg:p-5 bg-gray-700 hover:bg-gray-500'>Questionnaires</Link>
                    <button className='text-white text-1xl md:text-2xl lg:text-3xl p-3 md:p-4 lg:p-5 rounded-tr-[20px] bg-gray-900'>Evaluation Results</button>
                </div>

                    <table className="border-collapse border border-gray-600 m-3 md:m-5 lg:m-10">
                        <thead>
                            <tr className="bg-gray-600 text-white">
                                <th className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl whitespace-nowrap">Teacher's Name</th>
                                <th className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl whitespace-nowrap">Date Evaluated</th>
                                <th className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl whitespace-nowrap">Evaluation Criteria</th>
                                <th className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl whitespace-nowrap">Evaluation Score</th>
                                <th className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl whitespace-nowrap">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id} className="bg-gray-600 text-white text-center">
                                    <td className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl">{row.teacherName}</td>
                                    <td className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl">{row.dateEvaluated}</td>
                                    <td className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl">{row.evaluationCriteria}</td>
                                    <td className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl">{row.evaluationScore}</td>
                                    <td className="border border-gray-600 p-1 md:p-3 lg:p-5 lg:text-2xl">{row.comments}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}

export default View2;
