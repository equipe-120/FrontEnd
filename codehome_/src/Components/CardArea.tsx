import React from "react";

import PropsCardArea from "../Props/PropsCardArea";

const CardArea:React.FC<PropsCardArea> = ({imageUrl, title, description}) => {
    return (
        <div className="flex-col mt-10 w-56 h-60">
            <div className="text-gray-50 bg-white h-2/3 rounded-t-lg">
                <img 
                    className="h-full w-full rounded-t-lg"
                    src={imageUrl} alt="imagem front end" />
            </div>
            <div className="text-gray-50 bg-blue-600 h-1/3">
                <div className="ml-2">
                    <p>
                        {title}
                    </p>
                </div>
                <div className="flex text-center text-xs font-light">
                    <p className="text-gray-50">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardArea;