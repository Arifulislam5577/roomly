const WhyUs = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-end gap-5 justify-between">
          <div className="col-span-12 mb-12">
            <div className="text-center">
              <p className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Why Choose Us?
              </p>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:w-full max-w-xl col-span-12 mx-auto border border-slate-200 flex items-start p-6 rounded-lg bg-white">
            <div className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-10 text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="flex-auto">
              <p className="text-lg font-semibold text-black mb-2">
                Seamless Booking Experience
              </p>
              <p className="text-base leading-relaxed text-gray-600 max-w-sm">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:w-full max-w-xl mx-auto col-span-12 border border-slate-200 flex items-start p-6 rounded-lg bg-white">
            <div className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-10 text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </div>
            <div className="flex-auto">
              <p className="text-lg font-semibold text-black mb-2">
                Secure Transactions
              </p>
              <p className="text-base leading-relaxed text-gray-600 max-w-sm">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
