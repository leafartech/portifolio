export default function PaymentCard() {
    return (
        <div className="relative parallax-1 mt-6 sm:mt-12 w-full max-w-lg rounded-3xl px-4 sm:px-12 py-12 sm:py-16 overflow-hidden">
            <img src="./images/bg.png" alt="" className="block sm:hidden absolute bottom-0 left-0 h" />
            <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>

            <div className="relative flex flex-col z-10 text-left">
                <div className="flex flex-col gap-2">
                    <h3 className="letter-grad text-3xl sm:text-4xl font-bold">OFERTA EXCLUSIVA</h3>
                    <p className="text-white/70">de R$<span className="text-white text-4xl line-through sm:ps-4">3.997,00</span></p>
                    <p className="text-4xl font-bold text-white tracking-wider">SURPRESA</p>
                </div>
                <p className="py-4 text-sm my-4 border-y border-zinc-300 text-zinc-300">Clique no botão abaixo para entrar no <strong>grupo VIP</strong> onde será anunciado o valor promocional.</p>
                <a href="" className="mb-4 rounded-lg grad py-3 font-bold text-center text-white">QUERO APROVEITAR</a>
                <img
                    src="/images/security.png"
                    alt="imagens de pagamento"
                    width={539}
                    height={46}
                />
            </div>
        </div>
    )
}