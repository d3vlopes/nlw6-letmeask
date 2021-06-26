import styled, { css } from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const Wrapper = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`

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
