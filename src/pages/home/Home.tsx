import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, StartButton, StopButton } from './Home.styles'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CycleForm } from './components/cycle-form/CycleForm'
import { Timer } from './components/timer/Timer'
import { FormProvider, useForm } from 'react-hook-form'
import { Cycle, CyclesContext } from '../../contexts/CyclesContext'

const cycleValidationSchema = zod.object({
  task: zod.string().min(1, 'You should type the task name').max(50),
  time: zod.number().min(5).max(60),
})

type CycleFormData = zod.infer<typeof cycleValidationSchema>

export function Home() {
  const { currentCycle, addCycle, stopCycle } = useContext(CyclesContext)

  const cycleForm = useForm<CycleFormData>({
    defaultValues: {
      task: '',
      time: 25,
    },
    resolver: zodResolver(cycleValidationSchema),
  })

  const task: string = cycleForm.watch('task')
  const time: number = cycleForm.watch('time')
  const isSartButtonDisabled = !task || !time

  function handleStartCycle(data: CycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      time: data.time,
      start: new Date(),
    }
    addCycle(newCycle)
    cycleForm.reset()
  }

  function handleStopCycle() {
    stopCycle('stopped')
  }

  return (
    <HomeContainer>
      <form onSubmit={cycleForm.handleSubmit(handleStartCycle)} action="">
        <FormProvider {...cycleForm}>
          <CycleForm />
        </FormProvider>
        <Timer />

        {currentCycle ? (
          <StopButton onClick={handleStopCycle} type="button">
            <HandPalm size={24} />
            Stop
          </StopButton>
        ) : (
          <StartButton disabled={isSartButtonDisabled} type="submit">
            <Play size={24} />
            Start
          </StartButton>
        )}
      </form>
    </HomeContainer>
  )
}
