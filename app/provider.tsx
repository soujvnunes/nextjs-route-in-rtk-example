'use client'

import { useEffect, useRef } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { ConfigProvider, theme as antdTheme, type ThemeConfig } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@ant-design/v5-patch-for-react-19'

import initStore, { type AppStore } from './store'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export default function Provider(
  props: Readonly<{ children: React.ReactNode }>,
) {
  const store = useRef<AppStore>(null)

  if (!store.current) store.current = initStore()

  useEffect(() => {
    if (store.current == null) return

    const unsubscribe = setupListeners(store.current.dispatch)

    return unsubscribe
  }, [])

  return (
    <ReduxProvider store={store.current}>
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
