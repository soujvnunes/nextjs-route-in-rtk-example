'use client'

import { useRef } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { ConfigProvider, theme as antdTheme, type ThemeConfig } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@ant-design/v5-patch-for-react-19'

import initStore, { type AppStore } from './store'

export default function Provider(
  props: Readonly<{ children: React.ReactNode }>,
) {
  const storeRef = useRef<AppStore>(null)

  if (!storeRef.current) storeRef.current = initStore()

  return (
    <ReduxProvider store={storeRef.current}>
      <AntdRegistry>
        <ConfigProvider
          theme={theme}
          {...props}
        />
      </AntdRegistry>
    </ReduxProvider>
  )
}

const theme: ThemeConfig = {
  cssVar: true,
  algorithm: antdTheme.darkAlgorithm,
  token: {
    fontFamily: 'var(--font-geist-sans)',
  },
}
