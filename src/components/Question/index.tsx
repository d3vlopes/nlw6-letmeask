import * as S from './styles'

export type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: React.ReactNode
  isHighlighted?: boolean
  isAnswered?: boolean
}

export const Question = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) => {
  return (
    <S.Wrapper
      isAnswered={isAnswered}
      isHighlighted={isHighlighted && !isAnswered}
    >
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
