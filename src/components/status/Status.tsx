import { StatusContainer } from './Status.styles'

interface StatusProps {
  type: 'finished' | 'stopped' | 'in-progress'
}

export function Status({ type = 'finished' }: StatusProps) {
  function getStatusColor(
    type: 'finished' | 'stopped' | 'in-progress',
  ): 'red' | 'green' | 'yellow' {
    switch (type) {
      case 'stopped':
        return 'red'
      case 'finished':
        return 'green'
      default:
        return 'yellow'
    }
  }

  function getStatusText(type: 'finished' | 'stopped' | 'in-progress'): string {
    switch (type) {
      case 'stopped':
        return 'Stopped'
      case 'finished':
        return 'Finished'
      default:
        return 'In progress'
    }
  }

  return (
    <StatusContainer colorName={getStatusColor(type)}>
      {getStatusText(type)}
    </StatusContainer>
  )
}
