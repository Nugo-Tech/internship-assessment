import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCharacters } from '../features/characterSlice';

const Pagination = () => {
    const currentPage = useSelector(state => state.character.currentPage);
    const pageNumbersArray = useSelector(state => state.character.pagesArray);
    const dispatch = useDispatch();

    const handlePageChange = (number) => {
        if(number !== '..') {
            dispatch(fetchAllCharacters(number));
        }
    }

    useEffect(() => {
        handlePageChange(currentPage);
    }, [currentPage]);

    return (
        <div className="flex flex-col items-center">
            <div className='flex h-12 font-medium rounded-full gap-4'>
                {pageNumbersArray.map((pageNumber) => (
                    <div 
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-12 flex justify-center items-center cursor-pointer 
                            leading-5 transition duration-150 ease-in  rounded-full 
                            ${currentPage === pageNumber ? 'bg-slate-500 text-white' : ''}  
                            ${(pageNumber !== '..' && pageNumber !== currentPage )? 'hover:bg-slate-300' : ''}`}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pagination;