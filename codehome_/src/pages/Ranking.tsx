import Header from "../Components/Header";
import InfoSubHeader from "../Components/InfoSubHeader";
import PerfilRanking from "../Components/PerfilRanking";

import imgPerfilRanking from "../Assets/PerfilRankingComponent/imgPerfilRanking.png"
import CompetitionBadge from "../Components/CompetionBadge";


const Ranking = () =>{
    return (
        <div className="flex-1 w-screen h-screen bg-slate-900">
            <div>
                <Header />
            </div>
            <div className="text-white">
                <div className="ml-44 mt-10">
                    <InfoSubHeader title="Projetos" description="Conheça os alunos destaques" />
                </div>
                <div className="flex w-2/3 mx-auto justify-between mt-10">
                    <CompetitionBadge name="Leonardo" expirience="2020.030" position={2} />
                    <CompetitionBadge name="Mariluis" expirience="2020.030" position={1} />
                    <CompetitionBadge name="Maciel" expirience="2020.030" position={3} />
                </div>
                <div className="flex justify-between w-2/3 mx-auto mb-3 upwards-div transform scale-y-[-1] space-x-1"
                >
                    
                        <div
                            className="w-1/3 h-24 bg-blue-600 upwards-div transform scale-y-[-1] flex items-center justify-center">
                            <span className="text-white text-[40px] text-2xl font-bold">2</span>
                        </div>
                        <div 
                            className="w-1/3 h-32 bg-blue-600 upwards-div transform scale-y-[-1] flex items-center justify-center">
                            <span className="text-white text-[40px] text-2xl font-bold">1</span>
                                
                        </div>
                        <div
                            className="w-1/3 h-24 bg-blue-600 upwards-div transform scale-y-[-1] flex items-center justify-center">
                            <span className="text-white text-[40px] text-2xl font-bold">3</span>
                        </div>
                    

                </div>
                <div >
                    <PerfilRanking areaAtuacao="front-end" experience="202,021" imgPerfil={imgPerfilRanking} name="Matehus" number={1} />
                    <PerfilRanking areaAtuacao="back-end" experience="190,021" imgPerfil={imgPerfilRanking} name="Jose" number={5} />
                    <PerfilRanking areaAtuacao="Ciencia de dados" experience="180,021" imgPerfil={imgPerfilRanking} name="Alias" number={13} />
                </div>
            </div>
        </div>
    );
};

export default Ranking;