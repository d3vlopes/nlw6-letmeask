import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  main {
    flex: 8;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Aside = styled.aside`
  flex: 7;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.constrast};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.background};
  }
`

export const Illustration = styled.img`
  max-width: 320px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  img {
    align-self: center;
  }
`

export const Logo = styled.img``

export const Button = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const Divider = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.border};
  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
    margin-left: 16px;
  }
`

export const Form = styled.form`
  ${({ theme }) => css`
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: ${theme.colors.constrast};
      border: 1px solid ${theme.colors.border};
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  `}
`
