/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app'
import React from 'react'
import '../../styles/globals.css'
import { ThemeProvider } from 'next-themes'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true as boolean} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
