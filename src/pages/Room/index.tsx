import { useParams } from 'react-router-dom'

import { Button } from 'components/Button'
import { RoomCode } from 'components/RoomCode'

import logo from 'assets/img/logo.svg'

import * as S from './styles'

type RoomParams = {
  id: string
}

export const Room = () => {
  const params = useParams<RoomParams>()

  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <S.Logo src={logo} alt="Letmeask" />
          <RoomCode code={params.id} />
        </S.Content>
      </S.Header>

      <S.Main>
        <S.RoomTitle>
          <S.Heading>Sala React</S.Heading>
          <S.Questions>4 perguntas</S.Questions>
        </S.RoomTitle>

        <S.Form>
          <textarea placeholder="O que você quer perguntar?" />

          <S.FormFooter>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </S.FormFooter>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}
