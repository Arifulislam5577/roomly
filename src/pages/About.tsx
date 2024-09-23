import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";
import MissionImage from "../assets/images/mission.jpg";
import StoryImage from "../assets/images/story.jpg";

const About = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-y-12 gap-x-5  items-start lg:max-w-5xl max-w-full mx-auto">
          <div className="col-span-12">
            <img
              src={MissionImage}
              alt="Mission"
              className="lg:h-[400px] w-full object-cover rounded-xl"
            />
          </div>
          <div className="col-span-12 grid gap-8">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Our Mission</h2>
              <p className="mt-3 text-muted-foreground">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    High quality Co-Living spaces
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our fully furnished spaces are designed and purpose-built
                    with Co-Living in mind, featuring high-end finishes and
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>

              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Fostering vibrant communities
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>

              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Simple and all-inclusive
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We worry about the details so that our residents don&apos;t
                    have to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid gap-8">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Our Teams</h2>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4">
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg"
                alt="team"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Jane Cooper</h3>
              <p className="text-base text-slate-900 font-medium">
                Co-Founder of Roomly
              </p>
              <p className="text-base text-slate-600">
                Former Co-Founder of Roomly and Head of Product
              </p>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4">
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg"
                alt="team"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Jane Cooper</h3>
              <p className="text-base text-slate-900 font-medium">
                Co-Founder of Roomly
              </p>
              <p className="text-base text-slate-600">
                Former Co-Founder of Roomly and Head of Product
              </p>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-4">
            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg"
                alt="team"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Jane Cooper</h3>
              <p className="text-base text-slate-900 font-medium">
                Co-Founder of Roomly
              </p>
              <p className="text-base text-slate-600">
                Former Co-Founder of Roomly and Head of Product
              </p>
            </div>
          </div>
          <div className="col-span-12">
            <img
              src={StoryImage}
              alt="Story"
              className="lg:h-[400px] w-full object-cover rounded-xl"
            />
          </div>
          <div className="col-span-12 grid gap-8">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">
                Our Background & Story
              </h2>
              <p className="mt-3 text-muted-foreground">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment. For as long as
                there have been cities, the public square has been a fundamental
                part of the urban landscape - an open, approachable space to
                meet and engage with friends and neighbours. Space aims to
                capture this spirit of bringing people together in an exciting,
                welcoming environment.
              </p>
              <p className="mt-3 text-muted-foreground">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
