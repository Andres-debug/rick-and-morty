import React from 'react';

export const Spinner = () =>{

    return(
        <>
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <div className='loader' style={{
                border: '16 px solid #f3f3f3',
                borderRadius: '50%',
                borderTop:'16px solid #3498db',
                width: '120px',
                height:'120px',
                animation: 'spin 2s linear infinite'
            }}>

            </div>
        </div>
        </>
    )
}