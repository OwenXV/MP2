import { Link } from "react-router-dom"

function Error(){
    return(
        <section className="errorSection">
            <h1 className="text-white">Error 404</h1>
            <p className="text-white">Page Not Found</p>
            <Link to="/">back home</Link>
        </section>
    )
}

export default Error