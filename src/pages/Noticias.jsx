import { useEffect } from "react"
import Layout from "../components/Layout"
import findLastPosts from "../utils/scraper"

function Noticias () {

    useEffect(() => {
        async function fetch () {
            await findLastPosts();
        }

        fetch();
    })

    return (
        <Layout style={{ color: "white" }} layout={{ backgroundColor: "#191946" }}>
            <h1>Noticias</h1>
        </Layout>
    )
}

export default Noticias