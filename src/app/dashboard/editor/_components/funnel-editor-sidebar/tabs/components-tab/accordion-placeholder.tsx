import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import useRerenderPreline from "@/hooks/use-rerender-preline"
import { AccordionElements, EditorBtns } from "@/lib/constants"
import { EyeIcon } from "lucide-react"
import React, { useEffect, useState } from "react"

type Props = { accordionElement: AccordionElements }

const AccordionPlaceholder = ({ accordionElement }: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData("componentType", type)
  }

  let previewExample = <></>
  let modalTitle = ""
  let modalDescription = ""

  switch (accordionElement) {
    case "basicAccordion":
      modalTitle = "Basic Accordion"
      modalDescription =
        "Click the accordions below to expand/collapse the accordion content."
      previewExample = (
        <div className="hs-accordion-group">
          <div className="hs-accordion active" id="hs-basic-heading-one">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-collapse-one"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #1
            </button>
            <div
              id="hs-basic-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-heading-one"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-two">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-collapse-two"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #2
            </button>
            <div
              id="hs-basic-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-collapse-three"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #3
            </button>
            <div
              id="hs-basic-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>
        </div>
      )
      break
    case "openAccordion":
      modalTitle = "Always Open"
      modalDescription =
        "To make accordion items stay open when another item is opened, use `data-hs-accordion-always-open`."
      previewExample = (
        <div className="hs-accordion-group" data-hs-accordion-always-open>
          <div
            className="hs-accordion active"
            id="hs-basic-always-open-heading-one"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-always-open-collapse-one"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #1
            </button>
            <div
              id="hs-basic-always-open-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-always-open-heading-one"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the third item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-always-open-heading-two">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-always-open-collapse-two"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #2
            </button>
            <div
              id="hs-basic-always-open-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-always-open-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the second item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-always-open-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-always-open-collapse-three"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #3
            </button>
            <div
              id="hs-basic-always-open-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-always-open-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the first item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>
        </div>
      )
      break
    case "nestedAccordion":
      modalTitle = "Nested"
      modalDescription = "A basic form of the accordion with sub menu."
      previewExample = (
        <div className="hs-accordion-group">
          <div className="hs-accordion active" id="hs-basic-nested-heading-one">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-nested-collapse-one"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #1
            </button>
            <div
              id="hs-basic-nested-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-nested-heading-one"
            >
              <div className="hs-accordion-group ps-6">
                <div
                  className="hs-accordion active"
                  id="hs-basic-nested-sub-heading-one"
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                    aria-controls="hs-basic-nested-sub-collapse-one"
                  >
                    <svg
                      className="hs-accordion-active:hidden block size-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8.12421 13.36V2.35999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    Sub accordion #1
                  </button>
                  <div
                    id="hs-basic-nested-sub-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-one"
                  >
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the third item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>

                <div
                  className="hs-accordion"
                  id="hs-basic-nested-sub-heading-two"
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                    aria-controls="hs-basic-nested-sub-collapse-two"
                  >
                    <svg
                      className="hs-accordion-active:hidden block size-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8.12421 13.36V2.35999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    Sub accordion #2
                  </button>
                  <div
                    id="hs-basic-nested-sub-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-two"
                  >
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the second item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>

                <div
                  className="hs-accordion"
                  id="hs-basic-nested-sub-heading-three"
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                    aria-controls="hs-basic-nested-sub-collapse-three"
                  >
                    <svg
                      className="hs-accordion-active:hidden block size-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8.12421 13.36V2.35999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    Sub accordion #3
                  </button>
                  <div
                    id="hs-basic-nested-sub-collapse-three"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-nested-sub-heading-three"
                  >
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the first item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-nested-heading-two">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-nested-collapse-two"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #2
            </button>
            <div
              id="hs-basic-nested-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-nested-heading-two"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the second item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>

          <div className="hs-accordion" id="hs-basic-nested-heading-three">
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-nested-collapse-three"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #3
            </button>
            <div
              id="hs-basic-nested-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-nested-heading-three"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <em>This is the first item's accordion body.</em> It is hidden
                by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions.
              </p>
            </div>
          </div>
        </div>
      )
      break
    case "borderedAccordion":
      modalTitle = "Bordered"
      modalDescription = "A basic form of the bordered accordion."
      previewExample = (
        <div className="hs-accordion-group">
          <div
            className="hs-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            id="hs-bordered-heading-one"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-bordered-collapse-one"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #1
            </button>
            <div
              id="hs-basic-bordered-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-bordered-heading-one"
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>

          <div
            className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            id="hs-bordered-heading-two"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-bordered-collapse-two"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #2
            </button>
            <div
              id="hs-basic-bordered-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-bordered-heading-two"
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the second item's accordion body.</em> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>

          <div
            className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
            id="hs-bordered-heading-three"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-bordered-collapse-three"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
              Accordion #3
            </button>
            <div
              id="hs-basic-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-bordered-heading-three"
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the first item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
      break
    case "borderOnlyWhenActiveAccordion":
      modalTitle = "Active content bordered"
      modalDescription = "Active content bordered accordion."
      previewExample = (
        <div className="hs-accordion-group">
          <div
            className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
            id="hs-active-bordered-heading-one"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-active-bordered-collapse-one"
            >
              Accordion #1
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-one"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the third item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
            id="hs-active-bordered-heading-two"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-active-bordered-collapse-two"
            >
              Accordion #2
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-two"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-two"
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the second item's accordion body.</em> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>

          <div
            className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
            id="hs-active-bordered-heading-three"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Accordion #3
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-three"
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-gray-200">
                  <em>This is the first item's accordion body.</em> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
      break
  }

  const [open, setOpen] = useState(false)
  const { setRerenderPreline } = useRerenderPreline()

  useEffect(() => {
    setRerenderPreline(open)
  }, [open])

  return (
    <>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, accordionElement)}
        className=" h-14 w-14 bg-muted/70 rounded-lg p-2 flex flex-row gap-[4px] relative"
      >
        <div
          className="absolute left-0 top-0 right-0 bottom-0 hover:bg-slate-500 flex justify-center items-center rounded-lg opacity-0 hover:opacity-100"
          onClick={() => setOpen(true)}
        >
          <EyeIcon className="" />
        </div>
        <div className="border-dashed border-[1px] h-full rounded-sm bg-muted border-muted-foreground/50 w-full" />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription>{modalDescription}</DialogDescription>
          </DialogHeader>
          <div className="p-4">{previewExample}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AccordionPlaceholder
