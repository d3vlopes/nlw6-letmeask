import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { database } from 'services/firebase'
import { useAuth } from 'hooks/useAuth'

import { Button } from 'components/Button'
import { Logo } from 'components/Logo'
import { ToggleTheme } from 'components/ToggleTheme'

import illustration from 'assets/img/illustration.svg'

import * as S from './styles'

export const NewRoom = () => {
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('')

  const history = useHistory()

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <S.Container>
      <S.Aside>
        <ToggleTheme />
        <S.Illustration
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </S.Aside>

      <main>
        <S.Wrapper>
          <Link to="/">
            <Logo />
          </Link>
          <S.Heading>Cria uma nova sala</S.Heading>
          <S.Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </S.Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </S.Wrapper>
      </main>
    </S.Container>
  )
}
