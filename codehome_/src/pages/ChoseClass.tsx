import React from 'react';
import Header from '../Components/Header'
import CardArea from '../Components/CardArea';
import imgFrontEnd from '../Assets/ChoseClassScreen/imgCardFront.svg'
import { Link } from 'react-router-dom';

function ChoseClass(){
    return (
        <div className="w-screen h-screen bg-gray-900">
        <Header/>
        <div className="mt-6">
          <div className="flex space-x-3 justify-center text-gray-200">
            <div className="underline">
              Trilhas
            </div>
            <div>
              Aulas
            </div>
          </div>
          <div className="flex justify-center mt-5 w-full text-gray-700">
            <input
            className="bg-gray-400 rounded-md h-12 w-screen mx-44"
            />
          </div>
        </div>
        <div className="flex-col">
          <div className="flex justify-center space-x-24">
              <CardArea imageUrl={imgFrontEnd} title="Front-End - Potencia Tech" description="Vem com Ifood"/>
              <CardArea imageUrl={imgFrontEnd} title="Back-end" description="teste-2"/>
              <CardArea imageUrl={imgFrontEnd} title="Ciência de dados" description="teste-2"/>
              <CardArea imageUrl={imgFrontEnd} title="UX Design" description="teste-2"/>
            
            
          </div>
          <div className="flex justify-center space-x-24">
              <CardArea imageUrl={imgFrontEnd} title="Segurança da Informação" description="teste-2"/>
              <CardArea imageUrl={imgFrontEnd} title="Computação em nuvem" description="teste-2"/>
              <CardArea imageUrl={imgFrontEnd} title="Enegenhiro de dados" description="teste-2"/>
              <CardArea imageUrl={imgFrontEnd} title="Engenharia de software" description="teste-2"/>
          </div>
        </div>
      </div>
    )   
}
 
export default ChoseClass;