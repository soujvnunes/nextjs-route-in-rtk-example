'use client'

import Col from 'antd/es/grid/col'
import Row from 'antd/es/grid/row'
import Image from 'next/image'
import styles from './PickNumberForm.module.scss'
import Button from 'antd/es/button'
import useDispatch from '@/hooks/useDispatch'
import api from '@/app/api'
import state from '@/app/state'
import { redirect } from 'next/navigation'

export default function PickNumberForm() {
  const dispatch = useDispatch()
  const [logData, result] = api.endpoints.logData.useMutation()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = formData.get(fields.number) as string

    try {
      await logData({ data }).unwrap()

      dispatch(state.actions.addNumber(data))
      redirect('/result')
    } catch (error) {
      throw error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Please select your preferred contact method:</legend>
        <Row>
          {images.map((image) => (
            <Col
              span={4}
              className={styles.col}
              key={image.value}>
              <label
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  cursor: 'pointer',
                }}>
                <input
                  hidden
                  type="radio"
                  name={fields.number}
                  value={image.value}
                />
                <Image
                  fill
                  priority
                  alt=""
                  src={image.src}
                  style={{ objectFit: 'contain' }}
                />
              </label>
            </Col>
          ))}
        </Row>
        <Button
          htmlType="submit"
          loading={result.isLoading}>
          Next
        </Button>
      </fieldset>
    </form>
  )
}

const images = [
  { src: '/2.jpg', value: '2' },
  { src: '/3.jpg', value: '3' },
  { src: '/4.jpg', value: '4' },
  { src: '/5.jpg', value: '5' },
  { src: '/6.jpg', value: '6' },
  { src: '/7.jpg', value: '7' },
]

const fields = {
  number: 'number',
}
