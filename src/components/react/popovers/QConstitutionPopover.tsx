/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Popover, Transition } from "@headlessui/react";

interface QConstitutionPopoverProps {
  children?: any;
  title: string;
}

export default qwikify$(
  ({ children, title }: QConstitutionPopoverProps) => (
    <Popover className="relative">
      <Popover.Button
        className="w-[85px] rounded-5 border bg-senate-pink py-10 outline-0 transition-transform md:w-[95px] md:hover:rotate-1 md:hover:scale-110"
        aria-label="ไม่ผ่าน"
      >
        <svg
          className="mx-auto mb-10"
          width="43"
          height="43"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 43 43"
        >
          <path
            fill="#fff"
            stroke="#000"
            strokeWidth="2"
            d="M21.838 15.97l13.71-13.71 5.161 5.16L26.7 21.131l-.73.715.73.714L40.71 36.271l-5.153 5.153-13.71-14.009-.715-.73-.715.73-13.71 14.009-5.16-5.16 13.71-13.711.707-.707-.707-.707L1.546 7.428 6.712 2.26l13.71 13.71.708.708.707-.707z"
          />
        </svg>
        <span className="wv-b5 nobr block bg-white py-4 text-center font-bold">
          ไม่ผ่าน
        </span>
      </Popover.Button>

      <Transition
        enter="transition-all fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute z-10 md:top-10 md:left-10 md:translate-x-0 md:translate-y-0 md:origin-top-left"
        enterFrom="scale-0 opacity-0"
        enterTo="scale-100 opacity-100"
        entered="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute z-10 md:top-10 md:left-10 md:translate-x-0 md:translate-y-0 "
        leave="transition-all fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute z-10 md:top-10 md:left-10 md:translate-x-0 md:translate-y-0 md:origin-top-left"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-0 opacity-0"
      >
        <Popover.Panel className="w-[300px] rounded-10 border bg-senate-pink py-20 px-10 md:w-[320px] ">
          <Popover.Button
            className="absolute top-10 right-10"
            type="button"
            aria-label="ปิด"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              width={30}
              height={30}
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M22.227 7.773a.938.938 0 010 1.328L9.1 22.226a.939.939 0 01-1.327-1.328L20.899 7.773a.936.936 0 011.328 0z"
                clipRule="evenodd"
              />
              <path
                fill="#000"
                fillRule="evenodd"
                d="M7.774 7.773a.938.938 0 000 1.328l13.125 13.125a.939.939 0 001.328-1.328L9.1 7.773a.937.937 0 00-1.327 0z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>
          <svg
            className="mx-auto mb-20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 60 64"
            width={60}
            height={64}
          >
            <rect width="60" height="63.699" fill="#fff" rx="8" />
            <path
              fill="#000"
              d="M36.227 38.603v-1.818c2.348-.089 3.146-.591 3.146-3.148v-9.341h4.506v1.448l-.768.089c-.857.089-1.241.37-1.241 1.478v6.385c0 5.262-5.643 4.907-5.643 4.907zM17.597 33.71v-6.399c0-1.108-.37-1.39-1.24-1.478l-.77-.089v-1.448h4.506v9.356c0 2.557.798 3.06 3.147 3.148v1.818c0-.015-5.643.34-5.643-4.907z"
            />
            <path
              fill="#000"
              d="M22.088 43.628v-1.463l.769-.118c.856-.118 1.24-.429 1.24-1.478v-.222c0-1.67.769-2.557 2.497-3 0 0-2.497-.592-2.497-3.636v-6.4c0-1.108-.369-1.39-1.24-1.478l-.769-.089v-1.448h4.506v9.356c0 2.557.798 3.06 3.147 3.148v1.818c-2.364 0-3.147.65-3.147 1.729v3.281h-4.506zM32.887 43.628v-3.281c0-1.079-.783-1.73-3.146-1.73V36.8c2.349-.089 3.146-.591 3.146-3.148v-9.356h4.506v1.448l-.768.089c-.857.089-1.241.37-1.241 1.478v6.385c0 3.06-2.497 3.636-2.497 3.636 1.729.428 2.497 1.33 2.497 3v.222c0 1.05.37 1.36 1.24 1.478l.769.118V43.6h-4.506v.03zM50.943 19.521H9.123v2.262h41.82V19.52zM50.943 14.674H9.123v2.261h41.82v-2.261zM45.12 45.934H15.588v2.424H45.12v-2.424z"
            />
            <rect width="60" height="63.699" stroke="#000" rx="8" />
          </svg>
          <span className="wv-h9 mb-20 block font-kondolar font-bold">{title}</span>
          <div className="wv-b5 mb-20 flex items-center justify-center gap-4 rounded-full bg-black py-4 text-center font-bold text-white">
            สถานะ:{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 17"
              width={16}
              height={17}
            >
              <path
                fill="#fff"
                d="M3.529 4.227c.26-.26.682-.26.943 0L8 7.755l3.529-3.528a.667.667 0 11.943.942L8.943 8.698l3.529 3.528a.667.667 0 01-.943.943L8 9.641l-3.528 3.528a.667.667 0 11-.943-.943l3.528-3.528L3.53 5.169a.667.667 0 010-.942z"
              />
            </svg>
            ไม่ผ่าน
          </div>
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  ),
  {
    eagerness: "visible",
  }
);
