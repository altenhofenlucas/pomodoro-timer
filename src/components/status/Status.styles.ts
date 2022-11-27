import styled from 'styled-components'

import { StatusColors } from '../../styles/themes/default'

interface StatusProps {
  colorName: keyof typeof StatusColors
}

export const StatusContainer = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, colorName }) => theme.status[colorName]};
  }
`
