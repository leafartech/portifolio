export default function Citacao() {
    return (
        <div className="flex flex-col sm:grid sm:grid-cols-2 items-center">
            <div className="relative ps-4">
                <div className="absolute left-0 top-0 h-full w-[6px] grad-2 rounded-[1px]"></div>
                <p className="font-bold letter-grad">3 em 1</p>
                <h2 className="text-6xl sm:text-8xl font-bold">OFERTA ÚNICA DO JUNINHO</h2>
            </div>
            <div className="relative flex flex-col gap-3 mt-8 sm:mt-0">
                <h2 className="font-bold text-2xl">RZD</h2>
                <div className="relative py-0 px-0 flex flex-col gap-3">
                    <img src="./images/icons/left.png" alt="" className="opacity-50 absolute -top-0 left-0 sm:-left-4 sm:top-0 w-4" />
                    <p className="text-zinc-600 text-lg">
                        <span className="ps-4">Toco</span> cavaquinho há 18 anos e há 10 como profissional. Quando comecei tive muita dificuldade em evoluir no cavaquinho porque o acesso ao conteúdo era muito complicado.
                    </p>
                    <p className="text-zinc-600 text-lg">
                        <span className="ps-4">E</span> para você não passar por isso, decidi juntar todo meu conhecimento em um combo completo e por um preço muito acessível para quem sempre teve o sonho de tocar cavaquinho.
                    </p>
                    <img src="./images/icons/right.png" alt="" className="opacity-50 absolute bottom-0 right-0 sm:-right-4 w-4" />
                </div>
                <h2 className="absolute -bottom-12 right-0 flex items-center before:bg-zinc-400 text-zinc-600 before:w-[48px] before:h-[2px] before:rounded-full before:left-0 before:me-4">Juninho Rezende</h2>
            </div>
        </div>
    )
}