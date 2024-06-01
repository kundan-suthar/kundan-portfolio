import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../app/GlobalContext";
import { Reveal } from "./utils/Reveal";

const Contact = () => {
  const ref = useRef();
  const isInview = useInView(ref);
  const { contactIsInViewSetter } = useGlobalContext();
  useEffect(() => {
    if (isInview) {
      contactIsInViewSetter(isInview);
    } else {
      contactIsInViewSetter(isInview);
    }
  }, [isInview]);
  return (
    <div ref={ref} id="contact" className="  w-full bg-background  ">
      <div className="m-auto p-7 md:relative  z-10 sm:max-w-[1150px]  w-full bg-background ">
        <div className="w-[100% ] flex justify-center  ">
          <Reveal>
            <div className="text-text  text-4xl sm:text-8xl font-black">
              Contact<span className="text-brand">.</span>
            </div>
          </Reveal>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-base font-semibold leading-6 text-text"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className=" bg-background-light block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-brand placeholder:text-text focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-text"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className=" bg-background-light block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-brand placeholder:text-text focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6  text-text"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className=" bg-background-light block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-brand placeholder:text-text focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-text"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className=" bg-background-light block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-brand placeholder:text-text focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 outline-none"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-brand px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-background-light hover:border-brand hover:border hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
