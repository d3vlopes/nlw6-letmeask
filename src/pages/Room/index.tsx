import { FormEvent, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

import { database } from 'services/firebase'

import { Button } from 'components/Button'
import { RoomCode } from 'components/RoomCode'

import logo from 'assets/img/logo.svg'

import * as S from './styles'

type RoomParams = {
  id: string
}

export const Room = () => {
  const params = useParams<RoomParams>()
  const { user } = useAuth()

  const [newQuestion, setNewQuestion] = useState('')

  const roomId = params.id

  async function handleSendQuestion(event: FormEvent) {
    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <Link to="/">
            <S.Logo src={logo} alt="Letmeask" />
          </Link>
          <RoomCode code={params.id} />
        </S.Content>
      </S.Header>

      <S.Main>
        <S.RoomTitle>
          <S.Heading>Sala React</S.Heading>
          <S.Questions>4 perguntas</S.Questions>
        </S.RoomTitle>

        <S.Form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <S.FormFooter>
            {user ? (
              <S.UserInfo>
                <S.Avatar src={user.avatar} alt={user.name} />
                <S.Name>{user.name}</S.Name>
              </S.UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </S.FormFooter>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}
