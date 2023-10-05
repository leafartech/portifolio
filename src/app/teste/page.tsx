export default function Teste() {
    return (
        <main className="flex items-center justify-center h-screen">
            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Telefone</label>
                    <input type="text" />
                </div>
            </form>
        </main>
    )
}