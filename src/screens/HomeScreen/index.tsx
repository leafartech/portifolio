import Card from "../../components/Card"
import Main from "../../components/Main"
import Navbar from "../../components/Navbar"

function HomeScreen() {
    return (
        <div className="flex flex-col items-center justify-center pt-12">
            <Navbar />
            <Main>
                <>
                <header className="pt-6 sm:pt-12 max-w-my">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h4 className="top-title">Desenvolvedor Web</h4>

                        <h1 className="main-title">Rafael Borges Bezerra</h1>

                        <h4 className="uppercase text-gray-500 sm:text-sm lg:text-sm font-normal text-lg dark:text-gray-400">Acompanhe minha jornada no mundo da programação 👇</h4>
                    </div>
                </header>
                <div className="mt-28 flex justify-center items-center flex-col sm:flex-row flex-wrap gap-4 max-w-my">
                    <Card title="Managefly" href="/projetos/managefly" description="Gestão de projetos, tarefas e controle financeiro simples" imagePath="3"/>
                    <span className="-translate-y-4"><Card title="Sales Hub" href="/projetos/saleshub" description="Plataforma para gestão de: vendas, equipe, produtos e estratégias" imagePath="1"/></span>
                    <Card title="Finanças" href="/projetos/financas" description="Plataforma para gestão financeira, com plano de metas e dashboards modernos" imagePath="2"/>
                    <span className="-translate-y-4"><Card title="Página de vendas" href="/projetos/paginadevendas" description="Página de vendas feita para agência de marketing" imagePath="4"/></span>
                </div>
                </>
            </Main>
        </div>
    )
}

export default HomeScreen