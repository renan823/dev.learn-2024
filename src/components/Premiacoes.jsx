import React, { useEffect, useState } from 'react';
import Modal from './Modal'; // Importe o componente Modal
import Ouro from "../assets/Ouro.png";
import Prata from "../assets/Prata.png";
import Bronze from "../assets/Bronze.png";

function Premiacoes () {
  	const [data, setData] = useState(null);
  	const [modalAberto, setModalAberto] = useState(false); 
  	const [conteudoModal, setConteudoModal] = useState(null); 

  	useEffect(() => {
    	fetch("./dados.json")
      	.then(response => response.json())
      	.then(data => setData(data.campeonatos));
  	}, []);

  	if (!data) {
    	return (
      		<div>
        		<h1 className="text-center text-xl font-bold">Carregando...</h1>
      		</div>
    	)
 	 }

	const abrirModal = (campeonato) => {
		setConteudoModal(campeonato); 
		setModalAberto(true); 
	};

	const fecharModal = () => {
		setModalAberto(false); 
	};

	return (
		<div className="flex justify-center gap-20">
			{data.map((campeonato, index) => (
				<div key={index} className="p-4 rounded-2xl shadow-md bg-white text-center max-h-80 max-w-80 flex flex-col items-center justify-center">
					<img src={campeonato.imagem} alt={campeonato.nome} className="w-20 h-20 object-cover mb-2" />
					<p className="ml-5 mr-5 flex items-center">
						<img src={Ouro} className="w-5 h-5 mr-2" alt="Ouro"/>
						{campeonato.medalhas.ouro.total}
						<img src={Prata} className="w-5 h-5 ml-4 mr-2" alt="Prata"/>
						{campeonato.medalhas.prata.total}
						<img src={Bronze} className="w-5 h-5 ml-4 mr-2" alt="Bronze"/>
						{campeonato.medalhas.bronze.total}
					</p>
					<p className="ml-5 mr-5 mt-3">{campeonato.nomeCompleto} ({campeonato.nome})</p>
					<button className="mt-3 text-white font-bold py-2 px-4 rounded-2xl bg-yellow-600 hover:bg-yellow-700" onClick={() => abrirModal(campeonato)}>Ver Mais</button>
				</div>
			))}
		
			<Modal isOpen={modalAberto} onClose={fecharModal} conteudo={conteudoModal} />
		</div>
	);
};

export default Premiacoes;
