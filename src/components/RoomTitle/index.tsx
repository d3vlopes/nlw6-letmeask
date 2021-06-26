import { useRoom } from 'hooks/useRoom'

import { Loading } from 'components/Loading'

import * as S from './styles'

type RoomTitleProps = {
  roomId: string
}

export const RoomTitle = ({ roomId }: RoomTitleProps) => {
  const { questions, title } = useRoom(roomId)

  return (
    <S.Wrapper>
      {!title ? (
        <Loading color="primary" />
      ) : (
        <S.Heading>Sala {title}</S.Heading>
      )}
      {questions.length > 0 && (
        <S.Questions>{questions.length} pergunta(s)</S.Questions>
      )}
    </S.Wrapper>
  )
}
