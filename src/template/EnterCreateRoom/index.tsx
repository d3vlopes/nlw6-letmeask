import { FormEvent, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

import { useAuth } from 'hooks/useAuth'

import { database } from 'services/firebase'

import { Button } from 'components/Button'
import { Logo } from 'components/Logo'
import { ToggleTheme } from 'components/ToggleTheme'

import illustration from 'assets/img/illustration.svg'
import googleIcon from 'assets/img/google-icon.svg'

import * as S from './styles'

type EnterCreateRoomProps = {
  page: 'home' | 'newRoom'
}

export const EnterCreateRoom = ({ page }: EnterCreateRoomProps) => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  const [roomCode, setRoomCode] = useState('')
  const [newRoom, setNewRoom] = useState('')

  async function signIn() {
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
      toast.error('Room does not exists.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      return
    }

    if (roomRef.val().endedAt) {
      toast.error('Room already closed.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

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
      <Toaster />
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
          <Logo />
          {page === 'home' ? (
            <>
              <S.Button onClick={signIn}>
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
            </>
          ) : (
            <>
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
                Quer entrar em uma sala existente?{' '}
                <Link to="/">clique aqui</Link>
              </p>
            </>
          )}
        </S.Wrapper>
      </main>
    </S.Container>
  )
}
