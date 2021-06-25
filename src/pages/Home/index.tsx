import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

import { database } from 'services/firebase'

import { Button } from 'components/Button'
import { Logo } from 'components/Logo'

import illustration from 'assets/img/illustration.svg'
import googleIcon from 'assets/img/google-icon.svg'

import * as S from './styles'

export const Home = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <S.Container>
      <S.Aside>
        <S.Illustration
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </S.Aside>

      <main>
        <S.Wrapper>
          <Logo />
          <S.Button onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo da Google" />
            Crie sua sala com o Google
          </S.Button>
          <S.Divider>ou entre em uma sala</S.Divider>
          <S.Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.Wrapper>
      </main>
    </S.Container>
  )
}
