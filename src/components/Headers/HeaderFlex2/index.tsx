interface HeaderFlexProps {}

export default function HeaderFlex2() {
    return (
        <header className="relative w-full flex justify-center">
            <div className="w-full max-w-7xl flex flex-col-reverse sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                <div className="max-w-md flex flex-col gap-2 sm:gap-4">
                    <h1 className="text-3xl font-bold">Headline principal da página para apresentar oferta</h1>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <a href="" className="py-2 bg-zinc-600 max-w-sm text-center rounded-md text-white font-medium ">Quero aproveitar</a>
                </div>
                <div className="flex justify-end mb-2 sm:mb-0">
                    <img src="./images/bg.png" alt="" className="w-full" />
                </div>
            </div>
        </header>
    )
}