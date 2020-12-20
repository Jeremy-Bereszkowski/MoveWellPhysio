import React, { Component } from "react";
import Router from "next/router";
import URL from "../assets/strings/urls";

export default class Index extends Component {
  componentDidMount = () => {
    Router.push(URL.LANDING_PAGE, URL.ROOT);
  };

  render() {
    return <div />;
  }
}
