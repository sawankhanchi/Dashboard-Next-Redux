import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReduxProvider } from '../providers'
import { ToastProvider } from "react-toast-notifications"

export default function App({ Component, pageProps }: AppProps) {
  return  <ToastProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ToastProvider>
}
