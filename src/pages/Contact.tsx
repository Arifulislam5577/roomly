const Contact = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-slate-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-slate-900">
                  +880 123 456 789
                </p>
                <p className="mt-1 text-lg font-medium text-slate-900">
                  +880 789 345 123
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-slate-900">
                  contact@roomly.com
                </p>
                <p className="mt-1 text-lg font-medium text-slate-900">
                  bookroomly@gmail.com
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium leading-relaxed text-slate-900">
                  Joy Bangla Road, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-slate-900">
                Send us a message
              </h3>
              <form action="#" method="POST" className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-slate-900"
                    >
                      Your name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-slate-900 placeholder-slate-500 transition-all duration-200 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-600 caret-slate-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-slate-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="block w-full px-4 py-4 text-slate-900 placeholder-slate-500 transition-all duration-200 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-600 caret-slate-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="sub"
                      className="text-base font-medium text-slate-900"
                    >
                      Subject
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="sub"
                        id="sub"
                        placeholder="Enter your subject"
                        className="block w-full px-4 py-4 text-slate-900 placeholder-slate-500 transition-all duration-200 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-slate-600 caret-slate-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-base font-medium text-slate-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message"
                        className="block w-full px-4 py-4 text-black placeholder-slate-500 transition-all duration-200 bg-white border border-slate-200 rounded-md resize-y focus:outline-none focus:border-slate-600 caret-slate-600"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-md focus:outline-none hover:bg-slate-800 focus:bg-slate-800"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
