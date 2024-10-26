import { Button } from "../Button";
import Celular from "../../assets/Celular.png"
export function Produtos() {

    return (
        <div className="flex-1">
            <div className="shadow-category-shadow w-72 h-[300px] rounded-md mt-y">
                <div>
                    <div>
                        <img src={Celular} alt="Celular" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span>Nome</span>

                        <div className="w-full flex justify-center">
                            <Button py='py-2' px='px-6' textSize='text-sm' fontWeight='font-semibold' uppercase="uppercase" width='size-11/12'>
                                Comprar
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}