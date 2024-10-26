import './App.css'
import { Category } from './components/Category';
import { VscTools } from "react-icons/vsc";
import { Produtos } from './components/Produtos';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { ProductsCategory } from './components/ProductsCategory';
import { Header } from './components/Header';

function App() {

  return (
    <div>
      <Header />

      <main className='w-screen'>
        <section className='relative bg-hero-pattern bg-cover bg-center w-full'>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent h-full"></div>
          <div className='px-16 py-14'>
            <div className='w-9/12 text-text-color-primary'>
              <h1 className='font-bold text-font-xl'>Venha conhecer nossas promoções</h1>
              <p className='font-bold text-font-lg mb-9 mt-2'>50% Off nos produtos</p>
              <Button py='py-3' px='px-14' textSize='text-font-md' fontWeight='font-medium'>Ver Produtos</Button>
            </div>
          </div>
        </section>

        <div className="flex justify-center w-full gap-14 my-10 px-16 text-text-color-tertiary">
          <Category title='Tecnologia' icon={VscTools} />
          <Category title='Supermercado' icon={VscTools} />
          <Category title='Bebidas' icon={VscTools} />
          <Category title='Ferramentas' icon={VscTools} />
          <Category title='Saúde' icon={VscTools} />
          <Category title='Esportes e Fitness' icon={VscTools} />
          <Category title='Moda' icon={VscTools} />
        </div>


        <div className='px-16 my-20'>
          <h2 className="text-font-lg text-primary-color font-bold text-center w-full mb-6">Produtos Relacionados</h2>
          <ProductsCategory />

          <div className='flex gap-9 pl-6 mt-4'>
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
          </div>
        </div>

        <div className='flex justify-center w-full gap-16 my-10 px-20 h-[350px] mb-24'>
          <Card title='Parceiros' description='Lorem ipsum dolor sit  amet, consectur' />
          <Card title='Parceiros' description='Lorem ipsum dolor sit  amet, consectur' />
        </div>

        <div className='px-16'>
          <div className='text-center my-36'>
            <div className='flex items-center mb-2'>
              <div className='border border[#DEDEDE] h-[1px] w-10/12'></div>
              <h2 className="text-font-lg text-primary-color font-bold text-center w-full">Produtos Relacionados</h2>
              <div className='border border-[#DEDEDE] h-[1px] w-10/12'></div>
            </div>
            <span className='font-bold text-text-color-tertiary'>Ver Todos</span>
          </div>

          <div className='flex justify-center w-full gap-16 my-10 h-[250px] mb-24'>
            <Card title='Produtos' description='Lorem ipsum dolor sit  amet, consectur' />
            <Card title='Produtos' description='Lorem ipsum dolor sit  amet, consectur' />
          </div>
        </div>

        <div className='px-16 my-40'>
          <h2 className="text-font-lg text-primary-color font-bold text-center w-full mb-24">Navegue por Marcas</h2>
          <div className='mt-16'>
            <ul className='flex justify-between items-center'>
              <li className='flex text-font-lg text-primary-color font-bold shadow-category-shadow rounded-full px-6 py-24'><img src="../src/assets/logo.png" alt="logo" className='mr-2' />VTEX</li>
              <li className='flex text-font-lg text-primary-color font-bold shadow-category-shadow rounded-full px-6 py-24'><img src="../src/assets/logo.png" alt="logo" className='mr-2' />VTEX</li>
              <li className='flex text-font-lg text-primary-color font-bold shadow-category-shadow rounded-full px-6 py-24'><img src="../src/assets/logo.png" alt="logo" className='mr-2' />VTEX</li>
              <li className='flex text-font-lg text-primary-color font-bold shadow-category-shadow rounded-full px-6 py-24'><img src="../src/assets/logo.png" alt="logo" className='mr-2' />VTEX</li>
              <li className='flex text-font-lg text-primary-color font-bold shadow-category-shadow rounded-full px-6 py-24'><img src="../src/assets/logo.png" alt="logo" className='mr-2' />VTEX</li>
            </ul>
          </div>
        </div>
      </main>


      <footer className='bg-[#2A2A2A]'>

      </footer>
    </div>
  )
}

export default App;
