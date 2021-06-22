import { Link } from 'react-router-dom'

import { Button } from 'components/Button'

import illustration from 'assets/img/illustration.svg'
import logo from 'assets/img/logo.svg'

import * as S from './styles'

export const NewRoom = () => {
  return (
    <S.Container>
      <S.Aside>
        <S.Illustration
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </S.Aside>

      <main>
        <S.Wrapper>
          <S.Logo src={logo} alt="Letmeask" />
          <S.Heading>Cria uma nova sala</S.Heading>
          <S.Form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </S.Wrapper>
      </main>
    </S.Container>
  )
}
