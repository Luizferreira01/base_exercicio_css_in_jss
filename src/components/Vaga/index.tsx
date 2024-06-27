import { Card, CardTitle, CrdLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Card>
    <CardTitle>{props.titulo}</CardTitle>
    <ul>
      <li>localizacao: {props.localizacao}</li>
      <li>senioridade: {props.nivel}</li>
      <li>tipo de contratacao: {props.modalidade}</li>
      <li>
        salario: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>requisitos: {props.requisitos.join(', ')}</li>
      <CardLink href="#">ver detalhes e candidatar-se</CardLink>
    </ul>
  </Card>
)

export default Vaga
