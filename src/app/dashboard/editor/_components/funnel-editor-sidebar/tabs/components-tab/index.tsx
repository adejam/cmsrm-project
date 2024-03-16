import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { EditorBtns } from '@/lib/constants'
import React from 'react'
import TextPlaceholder from './text-placeholder'
import ContainerPlaceholder from './container-placeholder'
import VideoPlaceholder from './video-placeholder'
import TwoColumnsPlaceholder from './two-columns-placeholder'
import LinkPlaceholder from './link-placeholder'
import ContactFormComponentPlaceholder from './contact-form-placeholder'
import CheckoutPlaceholder from './checkout-placeholder'
import HeaderPlaceholder from './typography/header-placeholder'

type Props = {}
type TypograghyElements = 'layout' | 'elements' | 'typography'

const ComponentsTab = (props: Props) => {
  const elements: {
    Component: React.ReactNode
    label: string
    id: EditorBtns
    group: TypograghyElements
  }[] = [
    {
      Component: <TextPlaceholder />,
      label: 'Text',
      id: 'text',
      group: 'elements',
    },
    {
      Component: <ContainerPlaceholder />,
      label: 'Container',
      id: 'container',
      group: 'layout',
    },
    {
      Component: <TwoColumnsPlaceholder />,
      label: '2 Columns',
      id: '2Col',
      group: 'layout',
    },
    {
      Component: <VideoPlaceholder />,
      label: 'Video',
      id: 'video',
      group: 'elements',
    },
    {
      Component: <ContactFormComponentPlaceholder />,
      label: 'Contact',
      id: 'contactForm',
      group: 'elements',
    },
    {
      Component: <CheckoutPlaceholder />,
      label: 'Checkout',
      id: 'paymentForm',
      group: 'elements',
    },
    {
      Component: <LinkPlaceholder />,
      label: 'Link',
      id: 'link',
      group: 'elements',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='h1' />,
      label: 'Header(1)',
      id: 'h1',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='h2' />,
      label: 'Header(2)',
      id: 'h2',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='h3' />,
      label: 'Header(3)',
      id: 'h3',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='h4' />,
      label: 'Header(4)',
      id: 'h4',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='h5' />,
      label: 'Header(5)',
      id: 'h5',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='h6' />,
      label: 'Header(6)',
      id: 'h6',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='p' />,
      label: 'Paragraph',
      id: 'p',
      group: 'typography',
    },
    {
      Component: <HeaderPlaceholder headerHeirachy='blockquote' />,
      label: 'Blockquote',
      id: 'blockquote',
      group: 'typography',
    },
  ]

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={['Layout', 'Elements', 'Typography']}
    >
      <AccordionItem
        value="Layout"
        className="px-6 py-0 border-y-[1px]"
      >
        <AccordionTrigger className="!no-underline">Layout</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === 'layout')
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="Typography"
        className="px-6 py-0 "
      >
        <AccordionTrigger className="!no-underline">Typography</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === 'typography')
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="Elements"
        className="px-6 py-0 "
      >
        <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === 'elements')
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ComponentsTab
