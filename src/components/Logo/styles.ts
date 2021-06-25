import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .text {
      color: ${theme.colors.text};
    }
  `}
`
