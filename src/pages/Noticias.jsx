import Card from "../components/Card"
import Layout from "../components/Layout"

function Noticias () {
    return (
        <Layout style={{ color: "white" }} layout={{ backgroundColor: "#191946" }}>
            <div className="justify-center flex-col items-center">
                <h1 className="text-center text-4xl text-white font-bold">GEMA na Mídia</h1>
                <h3 className="text-center text-xl text-white">Veja o que andam falando do GEMA!</h3>
                <div className="flex justify-around gap-5">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </Layout>
    )
}

export default Noticias