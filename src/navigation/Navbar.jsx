import Logo from "../assets/Logo.png"

function Navbar ({ style }) {
    return (
        <div className="flex self-center mb-4 z-10 items-center">
            <div className="flex w-1/2">
                <a href="/">
                    <img src={Logo} alt="logo" className="w-20 h-20"/>
                </a>
            </div>
            <div className="flex w-1/2 justify-end gap-8 px-2">
               <a href="/sobre" className="text-lg font-bold" style={style}>Sobre</a>
               <a href="/premios" className="text-lg font-bold" style={style}>Prêmios</a>
               <a href="/noticias" className="text-lg font-bold" style={style}>Notícias</a>
            </div>
        </div>
    )
}

export default Navbar;