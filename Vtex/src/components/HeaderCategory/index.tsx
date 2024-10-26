import { PiCrownSimpleLight } from "react-icons/pi";

export const HeaderCategory = () => {
    const items : (string | { title: string; icon: JSX.Element })[] = [
        'TODAS CATEGORIAS',
        'SUPERMERCADO',
        'LIVROS',
        'MODA',
        'LANÇAMENTO',
        'OFERTAS DO DIA',
        { title: 'ASSINATURA', icon: <PiCrownSimpleLight /> }
    ]
    
    return (
        <nav className='my-3 w-full'>
            <ul className='flex w-full gap-44 font-semibold text-text-color-secondary text-font-sm'>
                {items.map((item,index) => (
                    <li key={index}>
                        {typeof item === 'string' ? (
                            <a href="#">{item}</a>
                        ) : (
                            <a href="#" className="flex items-center">
                                <span className='text-2xl mr-2'>
                                    {item.icon}                            
                                </span>         
                                {item.title}                   
                            </a>
                        )}
                    </li>
                ))}              
            </ul>
        </nav>
    )
}