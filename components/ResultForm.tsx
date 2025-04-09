'use client'

import state from '@/app/state'
import useDispatch from '@/hooks/useDispatch'
import { DatePicker } from 'antd'

export default function ResultForm() {
  const dispatch = useDispatch()

  return (
    <DatePicker
      onChange={(date, dateString) => {
        if (Array.isArray(dateString)) return

        dispatch(state.actions.addDate(dateString.replace(/-/g, '/')))
      }}
    />
  )
}
