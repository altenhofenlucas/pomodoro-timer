import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseButton = styled.button`
  width: 100%;
  border: 0;
  height: 5rem;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  background: ${({ theme }) => theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors['gray-100']};

  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`

export const StartButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['green-500']};
`

export const StopButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['red-500']};
`
