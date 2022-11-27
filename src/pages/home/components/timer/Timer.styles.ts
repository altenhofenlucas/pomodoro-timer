import styled from 'styled-components'

export const TimerContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme.colors['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors['green-500']};
`
