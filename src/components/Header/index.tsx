import { Link, useHistory } from 'react-router-dom'

import { Logo } from 'components/Logo'
import { RoomCode } from 'components/RoomCode'
import { Button } from 'components/Button'
import { ToggleTheme } from 'components/ToggleTheme'

import * as S from './styles'
import { database } from 'services/firebase'

type HeaderProps = {
  admin?: boolean
  roomId: string
}

export const Header = ({ admin = false, roomId }: HeaderProps) => {
  const history = useHistory()

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  return (
    <S.Wrapper>
      {!admin ? (
        <S.Content>
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <RoomCode code={roomId} />
            <ToggleTheme />
          </div>
        </S.Content>
      ) : (
        <S.ContentAdmin>
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <RoomCode code={roomId} />

            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>

            <ToggleTheme />
          </div>
        </S.ContentAdmin>
      )}
    </S.Wrapper>
  )
}
