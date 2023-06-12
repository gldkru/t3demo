import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { AppLayout } from "@/layouts/AppLayout";
import { Notifications } from "@mantine/notifications";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement | null;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);

  return getLayout(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SessionProvider session={session}>
        <Notifications />
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
