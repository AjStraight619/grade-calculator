import { useState } from 'react';

export default function Calculator() {
    // useState returns an array with two elements, the first is the state variable, the second is a function to update the state variable
    // It can be any data type, in this case it's a string
    // The initial value of the state variable is passed in as an argument to useState
    const [gradeInput, setGradeInput] = useState('');
    const [error, setError] = useState('');
    const [letterGrade, setLetterGrade] = useState('');

    const handleGradeChange = (event) => {
        setGradeInput(event.target.value);
        setError('');
        setLetterGrade('');
    };

    const calculateGrade = () => {
        const numericGrade = parseInt(gradeInput, 10);
        if (isValidInput(gradeInput)) {
            setLetterGrade(gradeCalculator(numericGrade));
        } else {
            setError('Please enter a valid grade');
        }
    };

   

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='bg-white p-6 rounded-lg shadow-md w-[15rem]'>
                <input
                    className='border border-gray-300 rounded p-2 w-full mb-2'
                    type="text"
                    value={gradeInput}
                    onChange={handleGradeChange}
                    placeholder="Enter your grade"
                />
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <button
                    className='bg-blue-500 text-white rounded p-2 w-full mt-2 hover:bg-blue-600'
                    onClick={calculateGrade}
                >
                    Calculate
                </button>
                
                {letterGrade && (
                    <p className='mt-4 text-lg'>
                        Your grade is: <span className='font-semibold'>{letterGrade}</span>
                    </p>
                )}
            </div>
        </div>
    );
}


const gradeCalculator = (grade) => {

    // Idk how you calculate your grades :)

    // let calculatedGrade; // = some calculation

    let calculatedGrade = grade;


    if (calculatedGrade >= 90) {
        return 'A';
    } else if (calculatedGrade >= 80) {
        return 'B';
    } else if (calculatedGrade >= 70) {
        return 'C';
    } else if (calculatedGrade >= 60) {
        return 'D';
    } else {
        return 'F';
    }


}


const isValidInput = (input) => {
    return !isNaN(parseInt(input, 10));
}