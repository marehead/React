const filmes = [
]

function Lista() {
    return (
        <div>
            {filmes.map{item => {
                return (
                    <div key={item.id}>
                        <h2>{item.nome}</h2>
                        <p>{item.genero}</p>
                        <img src={item.capa} />
                    </div>
                )
            })}
        </div>
    )
})}
        </div >
        )
    }

export default Lista
