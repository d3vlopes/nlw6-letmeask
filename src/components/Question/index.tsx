import * as S from './styles'

export type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: React.ReactNode
}

export const Question = ({ content, author, children }: QuestionProps) => {
  return (
    <S.Wrapper>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.UserInfo>
          <S.Avatar src={author.avatar} alt={author.name} />
          <S.Name>{author.name}</S.Name>
        </S.UserInfo>
        <div>{children}</div>
      </S.Footer>
    </S.Wrapper>
  )
}
