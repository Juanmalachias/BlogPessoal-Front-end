import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center">
          <div className='container grid  text-white'>
            <div className="flex flex-col gap-2 items-center justify-center py-2">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='border rounded hover:bg-white hover:text-indigo-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;