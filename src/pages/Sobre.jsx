import Layout from "../components/Layout";
import GEMA from "../assets/GEMA.jpeg";
import Fotos from "../assets/Fotos.png";

function Sobre () {
    return (
        <Layout style={{ color: "#191946" }} layout={{ backgroundImage: `url(${GEMA})`}}>
            <div className="flex gap-10">
                <div className="w-1/2 my-10">
                    <h1 className="text-3xl font-bold">Quem somos?</h1>
                    <p className="text-xl text-slate-700 font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos fugit enim tempora sint deserunt, quas sit perspiciatis 
                        iste asperiores, ratione mollitia! Molestias obcaecati mollitia 
                        quibusdam, ratione molestiae recusandae rem officiis.
                    </p>
                    <p className="text-xl text-slate-700 font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos fugit enim tempora sint deserunt, quas sit perspiciatis 
                        iste asperiores, ratione mollitia! Molestias obcaecati mollitia 
                        quibusdam, ratione molestiae recusandae rem officiis.
                    </p>

                    <div className="my-10"></div>

                    <h1 className="text-3xl font-bold">Como participar?</h1>
                    <p className="text-xl text-slate-700 font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos fugit enim tempora sint deserunt, quas sit perspiciatis 
                        iste asperiores, ratione mollitia! Molestias obcaecati mollitia 
                        quibusdam, ratione molestiae recusandae rem officiis.
                    </p>
                    <p className="text-xl text-slate-700 font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos fugit enim tempora sint deserunt, quas sit perspiciatis 
                        iste asperiores, ratione mollitia! Molestias obcaecati mollitia 
                        quibusdam, ratione molestiae recusandae rem officiis.
                    </p>
                    <p className="text-xl text-slate-700 font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eos fugit enim tempora sint deserunt, quas sit perspiciatis 
                        iste asperiores, ratione mollitia! Molestias obcaecati mollitia 
                        quibusdam, ratione molestiae recusandae rem officiis.
                    </p>
                    <a href="https://linktr.ee/gema.icmc.usp" target="_blank">
                        <div className="px-10 py-1 my-10 w-fit rounded-md" style={{ backgroundColor: "#C39F00" }}>
                            <h2 className="text-lg font-bold text-white">Tem interesse? Fale com a gente!</h2>
                        </div>
                    </a>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={Fotos} alt="" className="w-4/5"/>
                </div>
            </div>
        </Layout>
    )
}

export default Sobre;