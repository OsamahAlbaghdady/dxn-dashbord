import React from 'react';

const Loading = ({color,size,id}) => {
    return (
        <div id={id} style={{background:color?color:"white",border:"0"}} className='load-con'>
             <a style={{width:size?size:"48px",height:size?size:"48px"}} className='load'></a>   
        </div>
    );
}

export default Loading;
