import React, { Component } from "react";
import Router from "next/router";
import URL from "../assets/strings/urls";

export default class _error extends Component {
  componentDidMount = () => {
    Router.push(URL.ERROR);
  };

  render() {
    return <div />;
  }
}
