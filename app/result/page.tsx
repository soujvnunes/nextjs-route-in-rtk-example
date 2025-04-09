import ResultDescriptions from '@/components/ResultDescriptions'
import ResultForm from '@/components/ResultForm'
import Layout, { Content, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'

export default function Result() {
  return (
    <Layout>
      <Header>
        <Title>Select a date</Title>
      </Header>
      <Content>
        <ResultForm />
        <ResultDescriptions />
      </Content>
    </Layout>
  )
}
