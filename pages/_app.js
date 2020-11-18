import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";
import MainFooter from "../components/Footer/MainFooter";
import LandingHeaderLinks from "../components/Header/LandingHeaderLinks";
import LandingHeader from "../components/Header/LandingHeader";

import "assets/scss/nextjs-material-kit-pro.scss?v=1.1.0";
import "assets/css/react-demo.css";
import "animate.css/animate.min.css";

Router.events.on("routeChangeStart", url => {
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
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

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>MoveWell Physiotherapy</title>
                </Head>
                <LandingHeader
                    color="transparent"
                    brand="MoveWell Physiotherapy"
                    links={<LandingHeaderLinks dropdownHoverColor="black" />}
                    fixed
                    changeColorOnScroll={{
                        height: 300,
                        color: "dark"
                    }}
                />
                <Component {...pageProps} />
                <MainFooter />
            </React.Fragment>
        );
    }
}
