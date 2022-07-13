import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import WrapperProps from 'components/WrapperProps';
import 'assets/styles/globals.scss';
import { RootStoreProvider } from 'RootStore';
import { QueryClient, QueryClientProvider } from 'react-query';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      structuralSharing: false,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <RootStoreProvider>
        <WrapperProps>
          <Component {...pageProps} />
        </WrapperProps>
      </RootStoreProvider>
    </QueryClientProvider>
  );
}
