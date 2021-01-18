import React from "react";
import faqsData from '../fixtures/faqs.json'
import {Accordion} from '../components'
import OptForm from "./opt-input-form";


export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(el =>
        <Accordion.Item key={el.id}>
          <Accordion.Header>{el.header}</Accordion.Header>
          <Accordion.Body>{el.body}</Accordion.Body>
        </Accordion.Item>
      )}

      <Accordion.Item/>
      <OptForm>
        <OptForm.Input placeholder='Email address'/>
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break/>
        <OptForm.Text>
          Ready to watch? Enter your email to creat or restart your membership
        </OptForm.Text>
      </OptForm>

    </Accordion>
  )
}
