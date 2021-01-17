import React from "react";
import faqsData from '../fixtures/faqs.json'
import {Accordion} from '../components'

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

    </Accordion>
  )
}
