import { useState } from "react"

function Card () {

    const [name, setName] = useState("");
    const [dados, setDados] = useState([
        "Carol",
        "Julio",
        "Felipe",
        "Lucas",
        "Kamila",
        "Victor",
        "Sofia"
    ])

    function handleChangeName (event) {
        setName(event.target.value);
    }   

    return (
        <div>
            <input type="text" value={name} onChange={handleChangeName}/>
            <h1>Oi, {name}!</h1>
            <div>
                <ul>
                    {
                        dados.map((nome) => {
                            return (
                                <li>{nome}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card