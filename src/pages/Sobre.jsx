import Layout from "../components/Layout";
import GEMA from "../assets/GEMA.jpeg";

function Sobre () {
    return (
        <Layout style={{ color: "#191946" }} layout={{ backgroundImage: `url(${GEMA})`}}>
            <h1>sobre</h1>
        </Layout>
    )
}

export default Sobre;