import Noticias from "../assets/Noticias.jpg"

function Card () {
    return (
        <div className="bg-white rounded-lg flex-col m-10">
            <img src={Noticias} alt="" className="rounded-tl-lg rounded-tr-lg"/>
            <div className="p-2">
                <h3 className="text-lg text-center text-slate-800 font-bold">GEMA é classificado para o Mundial de 2024</h3>
            </div>
        </div>
    )
}

export default Card;