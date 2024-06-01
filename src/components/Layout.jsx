import Navbar from "../navigation/Navbar";

function Layout ({ children, layout, style }) {
    return (
        <div className="min-h-screen justify-center bg-center bg-cover p-10" style={layout}>
            <Navbar style={style}/>
            { children }
        </div>
    )
}

export default Layout;