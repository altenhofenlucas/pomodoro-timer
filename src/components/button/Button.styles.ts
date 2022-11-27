import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  background-color: ${({ variant, theme }) =>
    theme.button.variants[variant].backgroundColor};
  color: ${({ variant, theme }) => theme.button.variants[variant].color};
`
