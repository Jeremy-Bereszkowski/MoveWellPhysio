import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import config from 'react-reveal/globals';

import PageChange from "components/PageChange/PageChange.js";

import {headerString} from "assets/data/global";
import "assets/scss/nextjs-material-kit-pro.scss?v=1.1.0";
import "assets/css/react-demo.css";
import "animate.css/animate.min.css";


Router.events.on("routeChangeStart", url => {
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange />,
        document.getElementById("page-transition")
    );
});
Router.events.on("routeChangeComplete", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

/*Config for React-Reveal*/
config({ ssrFadeout: true });

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>{headerString}</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}
