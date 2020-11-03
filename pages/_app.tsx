import App from "next/app";
import Head from "next/head";
import NProgress from 'nprogress';
import Router from 'next/router';
import { GlobalProvider } from "providers/global";
import "../styles/main.scss";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>10up Blog</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="cleartype" content="on" />
                    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap" rel="stylesheet"></link>
                </Head>
                <GlobalProvider>
                    <Component {...pageProps} />
                </GlobalProvider>
                
            </>
        );
    }
}

