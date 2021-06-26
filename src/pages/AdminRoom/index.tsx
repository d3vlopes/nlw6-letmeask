import { useParams } from 'react-router-dom'

import { useRoom } from 'hooks/useRoom'

import { database } from 'services/firebase'

import { Question } from 'components/Question'
import { Header } from 'components/Header'
import { RoomTitle } from 'components/RoomTitle'

import deleteIcon from 'assets/img/delete.svg'
import checkIcon from 'assets/img/check.svg'
import answerIcon from 'assets/img/answer.svg'

import * as S from './styles'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  const params = useParams<RoomParams>()
  const roomId = params.id

  const { questions } = useRoom(roomId)

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswerd(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  return (
    <S.Container>
      <Header admin roomId={roomId} />

      <S.Main>
        <RoomTitle roomId={roomId} />

        <S.QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswerd(question.id)}
                    >
                      <img
                        src={checkIcon}
                        alt="Marcar pergunta como respondida"
                        title="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img
                        src={answerIcon}
                        alt="Destacar pergunta"
                        title="Destacar pergunta"
                      />
                    </button>
                  </>
                )}
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
