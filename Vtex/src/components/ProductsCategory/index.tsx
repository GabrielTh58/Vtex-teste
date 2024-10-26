export const ProductsCategory = () => {
    let isFirst : boolean = true

    const items : string[] = [
        'Celular',
        'Acessórios',
        'Tablets',
        'Notebooks',
        'TVS',
        'Ver Todos'
    ]

    return (
        <div>
            <ul className='w-full uppercase flex justify-between text-font-sm text-text-color-secondary'>
                {items.map((item, index) => {
                    if(index !== 0){
                        isFirst = false
                    }
                    
                    return (
                        <li key={index} className={`flex-1  border text-center py-1 ${isFirst ? 'text-primary-color' : ''} font-bold`}>
                            <a href="#">{item}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}