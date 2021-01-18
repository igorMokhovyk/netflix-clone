import React from "react";
import {JumbotronContainer} from "../containers/jumbotron";
import {FaqsContainer} from "../components/faq";
import {FooterContainer} from "../containers/footer";


export default function Home() {
  return (
    <>
      <JumbotronContainer/>
      <FaqsContainer/>
      <FooterContainer/>
    </>
  )
}
