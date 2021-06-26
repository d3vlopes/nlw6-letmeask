import styled, { css } from 'styled-components'
import { Wrapper as ToggleStyles } from 'components/ToggleTheme/styles'
import { Wrapper as LogoStyles } from 'components/Logo/styles'

export const Wrapper = styled.header`
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
    gap: 16px;

    ${ToggleStyles} {
      position: relative;
      top: 0;
      right: -3rem;
    }

    button {
      height: 40px;
    }
  }

  ${LogoStyles} > svg {
    max-height: 45px;
  }
`

export const ContentAdmin = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 16px;

    ${ToggleStyles} {
      position: relative;
      top: 0;
      right: -3rem;
    }

    button {
      height: 40px;
    }
  }

  ${LogoStyles} > svg {
    max-height: 45px;
  }
`
