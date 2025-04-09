import Layout, { Content, Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import styles from './page.module.css'
import HomeForm from '@/components/HomeForm'

export default function Home() {
  return (
    <Layout>
      <Header className={styles.header}>
        <Title level={4}>Specify your fist name</Title>
      </Header>
      <Content>
        <HomeForm />
      </Content>
    </Layout>
  )
}
