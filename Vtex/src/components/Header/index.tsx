
import { CiSearch } from "react-icons/ci";
import { HeaderInfo } from '../HeaderLabel';
import { HeaderIcons } from '../HeaderIcons';
import { HeaderCategory } from '../HeaderCategory';

export const Header = () => {
    return (
        <header className='px-20 w-full'>
            <HeaderInfo />

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

                    <HeaderIcons />
                </div>
            </div>

            <HeaderCategory />
        </header>
    )
}