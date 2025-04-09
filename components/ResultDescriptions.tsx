'use client'

import api from '@/app/api'
import state from '@/app/state'
import useSelector from '@/hooks/useSelector'
import { Button, Descriptions } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'

export default function ResultDescriptions() {
  const result = api.endpoints.result.useQuery()
  const name = useSelector(state.selectors.name)
  const number = useSelector(state.selectors.number)
  const date = useSelector(state.selectors.date)

  if (result.isLoading) {
    return <Paragraph>Loading result</Paragraph>
  }

  if (result.error) {
    return (
      <div>
        <Button onClick={result.refetch}>Try again</Button>
      </div>
    )
  }

  return (
    <Descriptions
      title="Provided information"
      items={[
        {
          key: '1',
          label: 'Name',
          children: name,
        },
        {
          key: '2',
          label: 'Number',
          children: number,
        },
        {
          key: '3',
          label: 'Date',
          children: date || <Text type="secondary">Select a date</Text>,
        },
        {
          key: '4',
          label: 'Random string',
          children: result.data?.string[0],
        },
      ]}
    />
  )
}
