import React from 'react';
import CheckGreen from '../Assets/ListVideoComponent/CheckGreen.svg'
import Check from '../Assets/ListVideoComponent/Check.svg'
import PropListView from '../Props/PropsListVideo';

const ListVideo:React.FC<PropListView> = ({nameVideo, status}) => {
    if(status){
    return (
        <div className="flex space-x-3 bg-gray-700">
            <div className="my-1">
                <img
                    className=" ml-3 h-4 w-4" 
                    src={CheckGreen} alt="" />
            </div>
            <div className='text-center'>
                {nameVideo}
            </div>
        </div>
    );
}else{
    return (
        <div className="flex space-x-3 bg-gray-700">
            <div className="my-1">
                <img
                    className=" ml-3 h-4 w-4" 
                    src={Check} alt="" />
            </div>
            <div className='text-center'>
                {nameVideo}
            </div>
        </div>
    );
}
};

export default ListVideo;