import MyLink from "./MyLink";

export default function Navbar() {
    return (
        <nav className="sm:fixed left-12 h-screen hidden sm:flex items-center justify-center z-50 ">
            <ul className="flex flex-col gap-4 pb-12">
                <MyLink className="active" href="#inicio">Início</MyLink>
                <MyLink href="#sobre">Sobre</MyLink>
                <MyLink href="#projetos">Projetos</MyLink>
                {/* <MyLink href="https://wa.me/5573999599911?text=Ol%C3%A1+Rafael%2C+vim+pelo+site">Contato</MyLink> */}
            </ul>
        </nav>
    )
}