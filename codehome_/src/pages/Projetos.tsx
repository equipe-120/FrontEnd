import Header from "../Components/Header";
import CardProject from "../Components/CardProject";
import IntroInfo from '../Components/InfoSubHeader'

export default function Index() {
    return(
        <div className="flex-1 h-screen w-screen bg-gray-900">
            <div>
                <Header/>     
            </div>
            <div className="mt-10 ml-44 text-white mr-44">
                <IntroInfo title="Projetos" description="Diferença entre front e back-end"/>
                <div className="space-y-10 mt-7">
                    <div className="flex justify-between">
                        <div>
                            <CardProject/>   
                        </div>
                        <div>
                            <CardProject/>   
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <CardProject/>   
                        </div>
                        <div>
                            <CardProject/>   
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <CardProject/>   
                        </div>
                        <div>
                            <CardProject/>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};