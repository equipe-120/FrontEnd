import React from 'react'
import PropsRanking from '../Props/PropsRanking'

const PerfilRanking:React.FC<PropsRanking> = ({number ,imgPerfil, name, areaAtuacao, experience}) => {
    return (
        <div className="flex bg-white w-2/3 h-16 mx-auto text-gray-950 justify-between">
                        <div className="flex mx-8 space-x-5">
                            <div className="mx-1 my-3">
                                {number}
                            </div>
                            <div>
                                <img
                                    className="w-8 h-8 my-3 rounded-full" 
                                    src={imgPerfil} 
                                    alt="" />
                            </div>
                            <div className="mx-1 my-3">
                                {name}
                            </div>
                            <div className="bg-blue-600 rounded-full mx-1 my-3 text-white">
                                <p className="mx-1 my-1">
                                    {areaAtuacao}
                                </p>
                            </div>
                        </div>
                        <div className="mr-8 mx-1 my-3">
                            {experience} XP
                        </div>
                </div>
    );
};

export default PerfilRanking;