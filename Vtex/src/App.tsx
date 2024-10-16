import './App.css'
import { GoShieldCheck } from "react-icons/go";

function App() {

  return (
    <div className='max-w-7xl mx-auto my-0'>
      <div className="flex w-full"> 
        <ul className='flex w-full justify-evenly text-xs font-semibold'>
          <li className='flex items-center'>
            <GoShieldCheck />
            <span className="text-text-color-secondary">Compra 
              <span className="text-primary-color"> 100% segura</span>
            </span>
          </li>
          <li className='flex items-center justify-between'>
            <GoShieldCheck />
            <span className="text-primary-color">Frete grátis 
              <span className="text-text-color-secondary"> acima de R$ 200</span>
            </span>
          </li>
          <li className='flex items-center justify-between'>
            <GoShieldCheck />
            <span className="text-primary-color">Parcele 
              <span className="text-text-color-secondary"> Suas compras</span>
            </span>
          </li>    
        </ul>
      </div>

      <div className="flex items-center justify-between mt-2 border-t p-2 ">
        <div className="flex">
          <img src="../src/assets/logo.png" alt="logo Vtex" className='w-10'/>
          <h1 className='text-primary-color text-xl font-black'>VTEX</h1>
        </div>

        <div className='flex'>
          <input type="text" placeholder='O que você está procurando'/>
          <input type="submit" value="icon" />
        </div>

        <div className="flex">

        </div>
      </div>
    </div>
  )
}

export default App
