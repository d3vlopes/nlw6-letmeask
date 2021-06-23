import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${theme.colors.primary};
    color: ${theme.colors.constrast};
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`
