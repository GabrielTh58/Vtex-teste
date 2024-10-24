import { Button } from "../Button";

export function Produtos() {
    return(
        <div className="shadow-category-shadow w-64 h-96 rounded-md mt-6">
            <div>
                <div>
                    imagem
                </div>
                <div className="flex justify-center">
                    
                    <Button py='py-2' px='px-6' textSize='text-sm' fontWeight='font-semibold' uppercase="uppercase" width='size-11/12'>
                        Comprar
                    </Button>

                </div>
            </div>
        </div>
    )
}