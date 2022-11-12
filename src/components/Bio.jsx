
import { information } from "../data/profile-data"
export const Bio = () => {
const Bio = () => {

    return (
        <div>
        <h2>{informacao.nome}</h2>
        <img src={informação.foto} width="200" />
        <p>{informacao.apelido}</p>
        <p>{informação.descricao}</p>
        </div>
    )
}
};

export default Bio;

