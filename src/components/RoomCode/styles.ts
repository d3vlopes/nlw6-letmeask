import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    background: ${theme.colors.constrast};
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
    display: flex;
  `}
`

export const Copy = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `}
`

export const Code = styled.span`
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: 230px;
  font-size: 14px;
  font-weight: 500;
`
