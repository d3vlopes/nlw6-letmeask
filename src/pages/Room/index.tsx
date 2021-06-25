import { FormEvent, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'
import { useRoom } from 'hooks/useRoom'

import { database } from 'services/firebase'

import { Button } from 'components/Button'
import { RoomCode } from 'components/RoomCode'
import { Question } from 'components/Question'

import logo from 'assets/img/logo.svg'

import * as S from './styles'

type RoomParams = {
  id: string
}

export const Room = () => {
  const params = useParams<RoomParams>()
  const roomId = params.id

  const { user } = useAuth()
  const { questions, title } = useRoom(roomId)

  const [newQuestion, setNewQuestion] = useState('')

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()

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
          <S.Heading>Sala {title}</S.Heading>
          {questions.length > 0 && (
            <S.Questions>{questions.length} pergunta(s)</S.Questions>
          )}
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

        <S.QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </S.QuestionList>
      </S.Main>
    </S.Container>
  )
}
