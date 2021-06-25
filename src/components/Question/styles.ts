import styled, { css } from 'styled-components'
import { QuestionProps } from '.'

type WrapperProps = Pick<QuestionProps, 'isAnswered' | 'isHighlighted'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isAnswered, isHighlighted }) => css`
    background: ${isHighlighted ? '#f4f0ff' : '#fefefe'};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;
    border: ${isHighlighted ? `1px solid ${theme.colors.primary}` : ''};
    background: ${isAnswered ? '#dbdcdd' : ''};

    & + div {
      margin-top: 8px;
    }

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
    }

    div {
      display: flex;
      gap: 16px;
    }

    ${Name} {
      color: ${isHighlighted ? theme.colors.text : ''};
    }
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
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
  margin-left: 8px;
  color: #737380;
  font-size: 14px;
`
