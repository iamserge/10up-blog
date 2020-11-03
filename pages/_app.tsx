import Head from "next/head";
import NProgress from 'nprogress';
import Router from 'next/router';
import { GlobalProvider } from "providers/global";
import "../styles/main.scss";


export default function MyApp({Component, pageProps}) {
    
    Router.events.on('routeChangeStart', () => {
        NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
        NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
        NProgress.done();
    });



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

