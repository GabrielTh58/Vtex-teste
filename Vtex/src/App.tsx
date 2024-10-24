import './App.css'
import { GoShieldCheck } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiCrownSimpleLight } from "react-icons/pi";
import { Category } from './components/Category';
import { VscTools } from "react-icons/vsc";
import { Produtos } from './components/Produtos';
import { Button } from './components/Button';

function App() {

  return (
    <div>
      <header className='px-20 mx-auto w-full'>
        <div className="flex w-full mt-2">
          <ul className='flex w-full justify-evenly text-xs font-semibold text-font-sm'>
            <li className='flex items-center'>
              <GoShieldCheck />
              <span className="text-text-color-secondary ml-2">Compra
                <span className="text-primary-color"> 100% segura</span>
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <GoShieldCheck />
              <span className="text-primary-color ml-2">Frete grátis
                <span className="text-text-color-secondary"> acima de R$ 200</span>
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <GoShieldCheck />
              <span className="text-primary-color ml-2">Parcele
                <span className="text-text-color-secondary"> Suas compras</span>
              </span>
            </li>
          </ul>
        </div>

        <div className='flex items-center justify-between mt-2 border-t border-b py-4'>
          <div className="flex items-center justify-between flex-1">
            <div className="flex">
              <img src="../src/assets/logo.png" alt="logo Vtex" className='w-10 mr-2' />
              <h1 className='text-primary-color text-xl font-black'>VTEX</h1>
            </div>

            <div className='flex flex-1 justify-between mx-14 py-2 px-6 bg-zinc-100 rounded-lg'>
              <input type="text" placeholder="O que você está buscando?" className='flex-1 bg-zinc-100 ' />
              <button type="submit">
                <CiSearch size={20} className='text-text-color-secondary' />
              </button>
            </div>

            <div className="">
              <ul className='flex items-center gap-8 text-text-color-secondary'>
                <li><a href="'"> <MdOutlineShoppingBag size={20} /> </a></li>
                <li>
                  <a href="#"> <FaRegHeart size={20} /> </a>
                </li>
                <li>
                  <a href="#"> <FaRegUserCircle size={20} /> </a>
                </li>
                <li>
                  <a href="#"> <BsCart3 size={20} /> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className='my-3 w-full'>
          <ul className='flex w-full gap-44 font-semibold text-text-color-secondary text-font-sm'>
            <li><a href="#">TODAS CATEGORIAS</a></li>
            <li><a href="#">SUPERMERCADO</a></li>
            <li><a href="#">LIVROS</a></li>
            <li><a href="#">MODA</a></li>
            <li><a href="#">LANÇAMENTO</a></li>
            <li><a href="#" className='text-primary-color'>OFERTAS DO DIA</a></li>
            <li>
              <a href="#" className='flex items-center '>
                <span className='text-2xl mr-2'>
                  <PiCrownSimpleLight />
                </span>
                ASSINATURA
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='w-screen'>
        <section className='relative bg-hero-pattern bg-cover bg-center w-screen'>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent h-full"></div>
          <div className='px-16 py-14'>
            <div className='w-9/12 text-text-color-primary'>
              <h1 className='font-bold text-font-xl'>Venha conhecer nossas promoções</h1>
              <p className='font-bold text-font-lg mb-9 mt-2'>50% Off nos produtos</p>
              <Button py='py-3' px='px-14' textSize='text-font-md' fontWeight='font-medium' >Ver Produtos</Button>
            </div>
          </div>
        </section>

        <div className="flex w-full gap-14 my-10 px-16 text-text-color-tertiary">
          <Category title='Tecnologia' icon={VscTools} />
          <Category title='Supermercado' icon={VscTools} />
          <Category title='Bebidas' icon={VscTools} />
          <Category title='Ferramentas' icon={VscTools} />
          <Category title='Saúde' icon={VscTools} />
          <Category title='Esportes e Fitness' icon={VscTools} />
          <Category title='Moda' icon={VscTools} />
        </div>
      </main>

      <div className='px-16 mb-10'>
        <h2 className="text-font-md text-primary-color font-bold text-center w-full mb-6">Produtos Relacionados</h2>
        <div>
          categoria
        </div>
        <Produtos />
      </div>
    </div>
  )
}

export default App;
