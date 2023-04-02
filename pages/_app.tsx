import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { useStoreRehydrated, StoreProvider } from 'easy-peasy'
import store from '@/store'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

function WaitForStateRehydration({ children }: {children:ReactElement}):ReactElement {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : <div>loading</div>;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page)=> page)
  return getLayout(
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <Component {...pageProps} />
      </WaitForStateRehydration>
    </StoreProvider>
  
  )
}
