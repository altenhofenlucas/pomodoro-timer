import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors['gray-500']};
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;

  &:focus {
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const TaskNameInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const TimeInput = styled(BaseInput)`
  width: 4rem;
`
