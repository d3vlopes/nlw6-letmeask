import { FormEvent, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

import { database } from 'services/firebase'

import { Button } from 'components/Button'
import { RoomCode } from 'components/RoomCode'
import { Question } from 'components/Question'

import logo from 'assets/img/logo.svg'

import * as S from './styles'

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string
      avatar: string
    }
    content: string
    isAnswered: boolean
    isHighlighted: boolean
  }
>

type Questions = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
}

type RoomParams = {
  id: string
}

export const Room = () => {
  const params = useParams<RoomParams>()
  const { user } = useAuth()

  const [newQuestion, setNewQuestion] = useState('')
  const [questions, setQuestions] = useState<Questions[]>([])
  const [title, setTitle] = useState('')

  const roomId = params.id

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', (room) => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

      // console.log(firebaseQuestions)

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          }
        },
      )

      // console.log(parsedQuestions)

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })
  }, [roomId])

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
