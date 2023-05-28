import React from "react";
import PropsTitleDescription from "../Props/PropsTitleDescription"


const IntroInfo:React.FC<PropsTitleDescription> = ({description, title}) =>{
    return (
        <div className="flex-1">
            <div className="text-2xl">
                {title}
            </div>
            <div className="mt-1 text-sm text-gray-600">
                {description}
            </div>
        </div>
    );
};

export default IntroInfo;