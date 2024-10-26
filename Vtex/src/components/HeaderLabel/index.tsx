import { GoShieldCheck } from "react-icons/go";

export function HeaderInfo() {
    const items = [
        {
            icon: <GoShieldCheck />,
            text: "Compra",
            highlightText: "100% segura"
        },
        {
            icon: <GoShieldCheck />,
            highlightText: "Frete grátis",
            text: "acima de R$ 200"
        },
        {
            icon: <GoShieldCheck />,
            highlightText: "Parcele",
            text: "Suas compras"
        }
    ]

    return (
        <div className="flex w-full mt-2">
            <ul className='flex w-full justify-evenly text-xs font-semibold text-font-sm'>
                {items.map((item, index) => (
                    <li key={index} className='flex items-center'>
                        {item.icon}
                        { index === 0 ? ( 
                            <span className="text-text-color-secondary ml-2">{item.text}
                                <span className="text-primary-color"> {item.highlightText}</span>
                            </span>
                        ) : (
                            <span className="text-primary-color m-2">{item.highlightText}
                                <span className="text-text-color-secondary"> {item.text}</span>
                            </span>
                        )}
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}