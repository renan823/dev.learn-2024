import Layout from "../components/Layout";
import GEMA from "../assets/GEMA.jpeg";
import Premiacoes from "../components/Premiacoes";


function Premios () {
    return (
        <Layout style={{ color: "#191946" }} layout={{ backgroundImage: `url(${GEMA})`}}>
            <h1 class="text-4xl font-extrabold text-center  mb-4 ">Premiações do GEMA</h1>
            <h3 class="text-2xl text-center  mt-2 mb-12">Veja o que já ganhamos por aí ;)</h3>
            <div class="ml-24 "> 
                <Premiacoes/>
            </div>   
        </Layout>
    )
}

export default Premios