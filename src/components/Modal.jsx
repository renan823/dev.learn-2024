import React from 'react';
import Ouro from '../assets/Ouro.png';
import Prata from '../assets/Prata.png';
import Bronze from '../assets/Bronze.png';

function Modal ({ isOpen, onClose, conteudo })  {
  	if (!isOpen) {
		return null;
	}

  	return (
    	<div className="fixed inset-0 flex items-center justify-center overflow-y-auto overflow-x-hidden z-50 bg-black bg-opacity-30">
      		<div className="relative p-4 w-full max-w-2xl max-h-full">
        		<div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
          			<div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
          				<img src={conteudo.imagem} alt={conteudo.nome} className="w-14 h-15 object-cover mb-2" />
						<h3 className="text-xl ml-5 font-semibold text-gray-900 dark:text-white">
							{conteudo.nomeCompleto} ({conteudo.nome})
						</h3>
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={onClose}>
							<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 12 12m0-12-12 12"></path>
							</svg>
						</button>
          			</div>
          			<div className="p-4 md:p-5 space-y-4">
            			{Object.keys(conteudo.anos).map((ano) => (
              				<div key={ano} className="mb-4">
                				<h4 className="text-base font-bold mb-2">{ano}</h4>
                				{conteudo.anos[ano].map((medalha, index) => (
                  					<p key={index} className="flex items-center">
										{medalha.medalha === 'ouro' && (
										<img
											src={Ouro}
											className="w-4 h-4 mr-1 inline"
											alt="Ouro"
										/>
										)}
										{medalha.medalha === 'prata' && (
										<img
											src={Prata}
											className="w-4 h-4 mr-1 inline"
											alt="Prata"
										/>
										)}
										{medalha.medalha === 'bronze' && (
										<img
											src={Bronze}
											className="w-4 h-4 mr-1 inline"
											alt="Bronze"
										/>
										)}
                    					{medalha.posicao}: {medalha.nome} ({medalha.medalha})
                  					</p>
                				))}
              				</div>
             
            			))}
            
          			</div>
        		</div>
      		</div>
    	</div>
  	);
};

export default Modal;
