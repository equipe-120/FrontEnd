
const CadastroTercerios = () => {
    return (
        <div className=" flex h-full w-full">
            <div className="w-1/2 h-screen bg-slate-700">
                <div className="mt-20">
                    <div className="mx-16" >
                        <div>
                            <h1 className="text-[40px] text-gray-400 font-light">
                                Cadastre sua empresa e apoie o desenvolvimento de talentos na área de tecnologia 🚀
                            </h1>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <div className="mt-16">
                                    <div className="text-gray-400 my-2">
                                        nome da empresa
                                    </div>
                                    <div>
                                        <input className="bg-gray-100 w-full h-12" 
                                        name="Digite aqui o nome do seu estabelecimento"/>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className="flex space-x-5">
                                    <div className="w-1/2">
                                        <div className="text-gray-400 my-2">
                                            CNPJ
                                        </div>
                                        <div>
                                            <input
                                                className="bg-gray-100 w-full h-12"
                                                type="text" 
                                                name="Digite aqui o nome do seu estabelecimento"
                                                />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="text-gray-400 my-2">
                                            CNPJ
                                        </div>
                                        <div>
                                            <input
                                                className="bg-gray-100 w-full h-12"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-5">
                                    <div className="w-1/2">
                                        <div className="text-gray-400 my-2">
                                            Estado
                                        </div>
                                        <div>
                                            <input
                                                className="bg-gray-100 w-full h-12"
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="text-gray-400 my-2">
                                            Cidade
                                        </div>
                                        <div>
                                            <input
                                                className="bg-gray-100 w-full h-12"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-gray-400 my-2">
                                        Endereço
                                    </div>
                                    <div>
                                        <input
                                            className="bg-gray-100 w-full h-12"
                                            type="text" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-400 my-2">
                                    Complemento
                                </div>
                                <div>
                                    <input
                                        className="bg-gray-100 w-full h-12"
                                        type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-10">
                            <button className=" bg-blue-600 w-full text-center h-12 text-gray-50">
                                Cadastrar empresa
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                right
            </div>
        </div>
    );
};
export default CadastroTercerios;