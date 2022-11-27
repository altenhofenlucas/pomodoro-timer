import { FormContainer, TaskNameInput, TimeInput } from './CycleForm.styles'

import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function CycleForm() {
  const { currentCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Working on task</label>
      <TaskNameInput
        type="text"
        id="task"
        placeholder="type your task name"
        list="tasks-suggestions"
        disabled={!!currentCycle}
        {...register('task', { required: true })}
      />
      <datalist id="tasks-suggestions">
        <option value="Task 1" />
        <option value="Task 2" />
        <option value="Task 3" />
      </datalist>

      <label htmlFor="time">for</label>
      <TimeInput
        type="number"
        id="time"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!currentCycle}
        {...register('time', { required: true, valueAsNumber: true })}
      />
      <span>minutes</span>
    </FormContainer>
  )
}
