import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/app.css";
import { AppProps } from "next/app";
import { DashboardLayout } from "@/dashboard/Layout";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Head>
          <title>Dashboard V9</title>
        </Head>
        <NextUIProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </NextUIProvider>
      </React.Fragment>
    </Provider>
  );
}

export default MyApp;
