import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, isOutlined }) => css`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${isOutlined ? theme.colors.constrast : theme.colors.primary};
    color: ${isOutlined ? theme.colors.primary : theme.colors.constrast};
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: ${isOutlined ? `1px solid ${theme.colors.primary}` : 0};
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
