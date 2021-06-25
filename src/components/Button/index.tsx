import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return <S.Wrapper isOutlined={isOutlined} {...props} />
}
