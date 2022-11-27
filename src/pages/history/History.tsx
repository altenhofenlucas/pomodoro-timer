import { format } from 'date-fns'
import { useContext } from 'react'
import { Status } from '../../components/status/Status'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList } from './History.styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  function getFormattedDate(date: Date): string {
    return format(new Date(date), 'dd/MM/yyyy HH:mm')
  }

  return (
    <HistoryContainer>
      <h1>History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Time</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.time} minutes</td>
                <td>{getFormattedDate(cycle.start)}</td>
                <td>{cycle.end ? getFormattedDate(cycle.end) : ''}</td>
                <td>
                  <Status type={cycle.status || 'finished'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
