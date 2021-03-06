import styled, { css } from 'styled-components'
import { Wrapper as ToggleStyles } from 'components/ToggleTheme/styles'
import { Wrapper as LogoStyles } from 'components/Logo/styles'
import Skeleton from 'react-loading-skeleton'

export const Container = styled.div``

export const SkeletonCustom = styled(Skeleton)`
  ${({ theme }) => css`
    &.react-loading-skeleton {
      background-color: ${theme.colors.skeletonBackground};
      background-image: linear-gradient(
        90deg,
        ${theme.colors.skeletonBackground},
        ${theme.colors.skeleton},
        ${theme.colors.skeletonBackground}
      );
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 24px;
    border-bottom: 1px solid ${theme.colors.borderBottom};
    background: ${theme.colors.backgroundLight};
  `}
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
  }

  ${ToggleStyles} {
    position: relative;
    top: 0;
    right: -3rem;
  }

  ${LogoStyles} > svg {
    max-height: 45px;
  }
`

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`

export const Questions = styled.span`
  ${({ theme }) => css`
    margin-left: 16px;
    background: ${theme.colors.link};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${theme.colors.constrast};
    font-weight: 500;
  `}
`

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
      font-size: 14;
      font-weight: 500;
      cursor: pointer;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const Name = styled.span`
  ${({ theme }) => css`
    margin-left: 8px;
    color: ${theme.colors.text};
    font-weight: 500;
    font-size: 14px;
  `}
`

export const QuestionList = styled.div`
  margin: 32px 0;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;
  color: #737380;
  gap: 8px;
  transition: filter 0.2s;

  &.liked {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.liked svg path {
    stroke: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    filter: brightness(0.7);
  }
`

export const Likes = styled.span``
