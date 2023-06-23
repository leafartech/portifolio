import MyLink from "../../components/MyLink"
import Navbar from "../../components/Navbar"

function AdminScreen() {
    return (
        <div className="h-screen w-full">
            <Navbar />
            <div className="mt-6 pt-6 sm:pt-12 max-w-my flex flex-col justify-center items-center">
                <MyLink path="/admin/blog">Blog</MyLink>
            </div>
        </div>
    )
}

export default AdminScreen