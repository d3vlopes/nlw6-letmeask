import { useRoom } from 'hooks/useRoom'

import * as S from './styles'

type RoomTitleProps = {
  roomId: string
}

export const RoomTitle = ({ roomId }: RoomTitleProps) => {
  const { questions, title } = useRoom(roomId)

  return (
    <S.Wrapper>
      <S.Heading>Sala {title}</S.Heading>
      {questions.length > 0 && (
        <S.Questions>{questions.length} pergunta(s)</S.Questions>
      )}
    </S.Wrapper>
  )
}
