import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    review:
      "The meeting room booking service has made managing our office spaces so much easier! It's user-friendly, and we never have double bookings anymore. Plus, the reminders help keep everyone on track.",
  },
  {
    name: "David Patel",
    position: "Project Lead",
    img: "https://randomuser.me/api/portraits/men/59.jpg",
    review:
      "We’ve been using this system for over 6 months, and it’s been a game-changer. The interface is clean, and the ability to see room availability in real time saves us a lot of back-and-forth communication.",
  },
  {
    name: "Emily Thompson",
    position: "Executive Assistant",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    review:
      "I love how simple and efficient the booking process is. It's so easy to reserve a room, and the notifications make sure I never miss a booking or get confused with times. Highly recommended for any office.",
  },
  {
    name: "Michael Lee",
    position: "HR Director",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    review:
      "The booking service integrates seamlessly with our calendar and is perfect for our fast-paced environment. It's intuitive and customizable, so setting up recurring meetings is a breeze. Highly recommended for any office.",
  },
  {
    name: "Alicia Gomez",
    position: "Operations Manager",
    img: "https://randomuser.me/api/portraits/men/13.jpg",
    review:
      "This has simplified meeting room management for our entire team. Booking a room is now as easy as a few clicks, and the automated scheduling helps avoid conflicts. A must-have for any modern office!",
  },
];

const Testimonial = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-blue-600">30k+</span> world class
            companies &amp; teams
          </h2>
        </div>
        <Carousel>
          <CarouselContent>
            {testimonials.map((item) => {
              return (
                <CarouselItem
                  key={item.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="overflow-hidden bg-white rounded-md border border-slate-100">
                    <div className="px-8 py-12">
                      <div className="relative w-24 h-24 mx-auto">
                        <img
                          className="relative object-cover w-24 h-24 border-4 border-blue-100 border-spacing-2 mx-auto rounded-full"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                          <svg
                            className="w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
                          </svg>
                        </div>
                      </div>
                      <blockquote className="mt-7">
                        <p className="text-lg text-slate-600 font-medium">
                          “{item.review}”
                        </p>
                      </blockquote>
                      <p className="text-base font-semibold tex-slate-900 mt-9">
                        {item.name}
                      </p>
                      <p className="mt-1 text-base text-slate-400">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
