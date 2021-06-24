import * as S from './styles'

export type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
}

export const Question = ({ content, author }: QuestionProps) => {
  return (
    <S.Wrapper>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.UserInfo>
          <S.Avatar src={author.avatar} alt={author.name} />
          <S.Name>{author.name}</S.Name>
        </S.UserInfo>
        <div></div>
      </S.Footer>
    </S.Wrapper>
  )
}
