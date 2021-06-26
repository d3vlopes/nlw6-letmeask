import { Spinner3 as Spinner } from '@styled-icons/evil/Spinner3'

import * as S from './styles'

export type LoadingColors = 'primary'

export type LoadingProps = {
  color: LoadingColors
  size?: string | number
}

export const Loading = ({ color, size = 3.4 }: LoadingProps) => (
  <S.Wrapper id="loading" color={color} size={size}>
    <Spinner />
  </S.Wrapper>
)
