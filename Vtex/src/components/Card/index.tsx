import { Button } from "../Button";

interface CardProps {
    title: string;
    description: string;
}
export function Card(props: CardProps) {
    return(
        <div className='w-2/4 flex flex-col items-start justify-center pl-16 bg-card-parceria-pattern bg-cover rounded-2xl'>
            <h3 className="text-font-lg font-bold text-text-color-primary pt-8">{props.title}</h3>
            <span className="text-font-sm text-text-color-primary mb-16 w-1/3">{props.description}</span>
            <Button py='py-4' px='px-10' textSize='text-sm' fontWeight='font-semibold' uppercase="uppercase" >
                Confira
            </Button>
        </div>
    )
}