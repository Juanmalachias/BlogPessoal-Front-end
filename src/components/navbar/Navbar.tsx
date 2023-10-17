import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='border rounded hover:bg-white hover:text-indigo-800 py-2 px-4'>Postagens</Link>
              <Link to='/temas' className='border rounded hover:bg-white hover:text-indigo-800 py-2 px-4'>Temas</Link>
              <Link to='/cadastroTema' className='border rounded hover:bg-white hover:text-indigo-800 py-2 px-4'>Cadastrar tema</Link>
              <Link to='/perfil' className='border rounded hover:bg-white hover:text-indigo-800 py-2 px-4'>Perfil</Link>
              <Link to='' onClick={logout} className='border rounded hover:bg-white hover:text-indigo-800 py-2 px-4'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar