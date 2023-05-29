import imgProjects from '../Assets/CardProjectComponent/imgProjects.svg'
import imgPadaria from '../Assets/CardProjectComponent/imgPadaria.png';


const CardProject = () => {
    return (
        <div className="flex h-44 w-[480px]">
            <div className='w-1/2'>
                <img
                    className="bg-cover" 
                    src={imgProjects} 
                    alt="" />
                </div>
            <div className='w-1/2 bg-cover bg-blue-600 space-y-2'>
                    <div className="text-center mt-10 font-medium" >
                        Desenvolvimento de site
                    </div>  
                    <div className='flex text-[11px] text-center justify-between mx-6 text-gray-300'>
                        <div>
                            2 dias atrás
                        </div>  
                        .
                        <div>
                            104 talentos envolvidos
                        </div>  
                    </div>
                    <div className="flex space-x-5 mt-6 ml-3">
                    <div>
                        <img 
                            className="h-6 w-6 rounded-full"
                            src={imgPadaria} 
                            alt="" />
                    </div>
                    <div>
                        Padaria da esquina
                    </div>
                    </div>  
            </div>
        </div>
        
        
        
        
        
        
        // <div className="flex space-x-2 bg-blue-600">
        //     <div className="w-1/2 h-full">
        //         <img
        //             className="w-full h-full" 
        //             src={imgProjects} 
        //             alt="imgProject" />
        //     </div>
        //     <div>
        //         <div>
        //             <div className="mt-8 ">
        //                 Desenvolvimento de site
        //             </div>
        //             <div className="flex justify-between space-x-4 text-gray-400">
        //                 <div className="text-[10px]/[12px] mt-4">
        //                     2 Dias atrás
        //                 </div>
        //                 <div className="text-2xl">
        //                     .
        //                 </div>
        //                 <div className="text-[10px]/[12px] mt-4">
        //                     105 talentos envolvidos
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex space-x-2 mt-2">
        //             <div>
        //                 <img
        //                     className="w-6 h-6 rounded-full" 
        //                     src={imgPadaria} 
        //                     alt="img" />
        //             </div>
        //             <div className="text-sm">
        //                 Padaria da esquina
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CardProject;