import { useHistory } from 'react-router-dom'

import { Button } from 'components/Button'

import illustration from 'assets/img/illustration.svg'
import logo from 'assets/img/logo.svg'
import googleIcon from 'assets/img/google-icon.svg'

import * as S from './styles'

export const Home = () => {
  const history = useHistory()

  function navigateToNewRoom() {
    history.push('/rooms/new')
  }

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
          <S.Button onClick={navigateToNewRoom}>
            <img src={googleIcon} alt="Logo da Google" />
            Crie sua sala com o Google
          </S.Button>
          <S.Divider>ou entre em uma sala</S.Divider>
          <S.Form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.Wrapper>
      </main>
    </S.Container>
  )
}
