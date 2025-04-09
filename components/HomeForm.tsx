'use client'

import api from '@/app/api'
import state from '@/app/state'
import useDispatch from '@/hooks/useDispatch'
import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import { redirect } from 'next/navigation'

export default function HomeForm() {
  const dispatch = useDispatch()
  const [logData] = api.endpoints.logData.useMutation()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = formData.get(fields.name) as string

    if (!data) return

    try {
      await logData({ data }).unwrap()

      dispatch(state.actions.addName(data))
      redirect('/pick-number')
    } catch (error) {
      throw error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name={fields.name}
        placeholder="First name"
      />
      <Button htmlType="submit">Next</Button>
    </form>
  )
}

const fields = {
  name: 'first-name',
}
