import Layout from "../components/Layout";
import Baloes from "../assets/Baloes.png";
import USP from "../assets/USP.png";
import ICMC from "../assets/ICMC.png";

function Home () {
	return (
		<Layout style={{ color: "white" }} layout={{ backgroundColor: "#191946" }}>
			<div className="flex">
				<div className="flex-col w-1/2 items-center content-center">
					<h1 className="text-6xl font-bold text-white w-4/5 my-2">O grupo de programação competitiva da USP</h1>
					<h3 className="text-2xl text-white w-5/6 my-2">Quer aprender os algoritmos mais avançados e ganhar medalhas? Cola com a gente!</h3>
					<a href="/sobre" className="my-2">
					<div className="px-10 py-1 w-fit rounded-md" style={{ backgroundColor: "#C39F00" }}>
						<h2 className="text-lg text-white">Conhecer</h2>
					</div>
					</a>
				</div>
				<div className="flex justify-center w-1/2">
					<img src={Baloes} alt="baloes" className="w-4/5" />
				</div>
			</div>
		</Layout>
	)
}

export default Home