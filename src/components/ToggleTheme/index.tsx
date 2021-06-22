import { useEffect, useState, useContext } from 'react'

import { AppThemeContext } from 'contexts/AppThemeContext'

import * as S from './styles'

export const ToggleTheme = () => {
  const { setTheme } = useContext(AppThemeContext)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    if (!localTheme) return

    if (localTheme === 'dark') {
      setChecked(true)
    }
  }, [])

  useEffect(() => {
    if (setTheme) {
      setTheme(checked ? 'dark' : 'default')
    }
  }, [checked, setTheme])

  const handleChange = () => {
    setChecked((s) => !s)
    if (setTheme) {
      setTheme(checked ? 'dark' : 'default')
    }
  }

  return (
    <S.Wrapper>
      <S.Label>
        Toggle light and dark modes
        <S.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <S.Slider></S.Slider>
      </S.Label>
    </S.Wrapper>
  )
}
