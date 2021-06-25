import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + div {
      margin-top: 8px;
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
