import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <button className="btn loading">loading . . .</button>

        </div>

        // <div className="h-screen flex items-center justify-center">
        //     <div className="w-16 h-16 border-b-4 border-red-500 rounded-full animate-spin"></div>
        // </div>
    );
};

export default Loading;