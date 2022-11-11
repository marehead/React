import filmes from './service/dados'


function Lista() {
    return (
        <div>
            {
                filmes.map(item =>{
                    return(
                        <h2>{item.nome}</h2>
                    )
                })
            }
        </div>
    )
}

export default Lista;
