import { useParams, Link } from 'react-router-dom'

// import { useAuth } from 'hooks/useAuth'
import { useRoom } from 'hooks/useRoom'

import { database } from 'services/firebase'

import { Button } from 'components/Button'
import { RoomCode } from 'components/RoomCode'
import { Question } from 'components/Question'

import logo from 'assets/img/logo.svg'
import deleteIcon from 'assets/img/delete.svg'

import * as S from './styles'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  const params = useParams<RoomParams>()
  const roomId = params.id

  // const { user } = useAuth()
  const { questions, title } = useRoom(roomId)

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <Link to="/">
            <S.Logo src={logo} alt="Letmeask" />
          </Link>
          <div>
            <RoomCode code={params.id} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </S.Content>
      </S.Header>

      <S.Main>
        <S.RoomTitle>
          <S.Heading>Sala {title}</S.Heading>
          {questions.length > 0 && (
            <S.Questions>{questions.length} pergunta(s)</S.Questions>
          )}
        </S.RoomTitle>

        <S.QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img
                    src={deleteIcon}
                    alt="Remover pergunta"
                    title="Remover pergunta"
                  />
                </button>
              </Question>
            )
          })}
        </S.QuestionList>
      </S.Main>
    </S.Container>
  )
}
