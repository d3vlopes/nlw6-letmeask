import copy from 'assets/img/copy.svg'

import * as S from './styles'

type RoomCodeProps = {
  code: string
}

export const RoomCode = ({ code }: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <S.Wrapper onClick={copyRoomCodeToClipboard}>
      <S.Copy>
        <img
          src={copy}
          alt="Copiar código da sala"
          title="Copiar código da sala"
        />
      </S.Copy>

      <S.Code>Sala #{code}</S.Code>
    </S.Wrapper>
  )
}
