import Layout, { Content, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import styles from './page.module.scss'
import PickNumberForm from '@/components/PickNumberForm'

export default function Home() {
  return (
    <Layout>
      <Header className={styles.header}>
        <Title level={4}>Pick a number</Title>
      </Header>
      <Content>
        <PickNumberForm />
      </Content>
    </Layout>
  )
}
