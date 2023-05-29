import Header from "../Components/Header";
import ListVideo from "../Components/ListVideo";
import InfoSubHeader from '../Components/InfoSubHeader'

import ReactPlayer from 'react-player';


const Class = () => {
    return (
        <div className="h-screen w-screen bg-gray-800">
            <Header/>
            <div className=" my-16 mx-44">
                <InfoSubHeader description="Diferença entre front e back" title="Front-end"/>
            </div>
            <div className="flex mx-44 space-x-20">
                <div className="w-2/3">
                    <ReactPlayer url="https://www.youtube.com/watch?v=g4ducuSNfc0" />
                </div>
                <div className="w-1/3">
                    <ListVideo nameVideo="NameVideo" status={true} />
                    <ListVideo nameVideo="NameVideo" status={false}/>
                </div>
            </div>
        </div>
    );
};
export default Class;