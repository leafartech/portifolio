import HeroTeste from "@/components/HeroTeste";

export default function Page() {
    return (
        <div className="">
            <section className="w-full flex justify-center">
                <div className="w-full max-w-7xl">
                    <HeroTeste
                        title="Headline principal da página para apresentar oferta"
                        imagePath="eu"
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </HeroTeste>
                    <HeroTeste
                        title="Headline principal da página para apresentar oferta"
                        imagePath="eu"
                        reverse={true}
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </HeroTeste>
                </div>
            </section>
        </div>
    )
}