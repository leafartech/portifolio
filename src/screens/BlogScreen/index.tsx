import BlogPost from "../../components/Blog/BlogPost"
import BlogNavbar from "../../components/Blog/Navbar"
import Template from "../../components/Blog/Template"
import Navbar from "../../components/Navbar"

function BlogScreen() {
    return (
        <div className="">
            <Navbar />
            <Template>
                <>
                    <BlogNavbar />
                    <BlogPost />
                </>
            </Template>
        </div>
    )
}

export default BlogScreen