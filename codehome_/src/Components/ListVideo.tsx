import CheckGreen from '../Assets/ListVideoComponent/CheckGreen.svg'

type Prop = {
    nameVideo:string,
}


const ListVideo = ({nameVideo}:Prop) => {
    
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
};

export default ListVideo;