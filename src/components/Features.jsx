import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { FaUserCheck, FaCalendarAlt, FaNotesMedical, FaClipboardList, FaFileUpload } from "react-icons/fa";
function Features() {
  return (
    <div>
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="content-center">
              <span className="text-yellow-500 text-lg font-semibold">Why choose us?</span>
              <h2 className="text-4xl font-bold mt-2">Our Features</h2>
              <div className="my-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 text-blue-500">
                    <FaUserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Register</h3>
                    <p>Step 1: Users register and fill out the necessary information.</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-4 text-blue-500">
                    <FaCalendarAlt size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Select Doctor</h3>
                    <p>Step 2: Choose a doctor based on your requirements.</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-4 text-blue-500">
                    <FaNotesMedical size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Book Appointment</h3>
                    <p>Step 3: Book an appointment according to availability and share your issues.</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-4 text-blue-500">
                    <FaClipboardList size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">View Schedule</h3>
                    <p>Step 4: Once confirmed, view your appointment in the schedule section.</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mr-4 text-blue-500">
                    <FaFileUpload size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Upload Documents</h3>
                    <p>Step 5: Before visiting, upload and share health-related documents online.</p>
                  </div>
                </div>
              </div>
              <a href="#" className="btn bg-[#0C2B4B] text-white py-2 px-6 rounded-md inline-block">See Doctors</a>
            </div>
          </div>
          <div className="lg:w-2/3 md:w-1/2 p-4 w-full">
            <CardStructure />
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

const CardStructure = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">What to watch</p>
          <h4 className="text-black font-medium text-large">Stream the Health Summit</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/healthSummit.jpg"
        />
      </Card>
      <Card className="h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Excellence in Healthcare</p>
          <h4 className="text-white font-medium text-large">Be Part of a Healthier World</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/healtheirWorld.png"
        />
      </Card>
      <Card className="h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">Supercharged</p>
          <h4 className="text-black font-medium text-large">Innovate Health, Transform Lives</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/innovateHealth.jpg"
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px]">
  <CardHeader className="absolute z-10 top-1 flex-col items-start">
    <p className="text-tiny text-white/60 uppercase font-bold">New</p>
    <h4 className="text-white font-medium text-2xl">Advanced Health Monitor</h4>
  </CardHeader>
  <Image
    removeWrapper
    alt="Card example background"
    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
    src="/images/healthSystem.jpg"
  />
  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
    <div>
      <p className="text-black text-tiny">Coming Soon.</p>
      <p className="text-black text-tiny">Stay updated.</p>
    </div>
    <Button className="text-tiny" color="primary" radius="full" size="sm">
      Notify Me
    </Button>
  </CardFooter>
</Card>

<Card isFooterBlurred className="w-full h-[300px]">
  <CardHeader className="absolute z-10 top-1 flex-col items-start">
    <p className="text-tiny text-white/60 uppercase font-bold">Personalized Wellness</p>
    <h4 className="text-white/90 font-medium text-xl">Optimize Your Sleep Routine</h4>
  </CardHeader>
  <Image
    removeWrapper
    alt="Calming app background"
    className="z-0 w-full h-full object-cover"
    src="https://nextui.org/images/card-example-5.jpeg"
  />
  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
    <div className="flex flex-grow gap-2 items-center">
      <Image
        alt="Sleep aid app icon"
        className="rounded-full w-10 h-11 bg-black"
        src="https://nextui.org/images/breathing-app-icon.jpeg"
      />
      <div className="flex flex-col">
        <p className="text-tiny text-white/60">SleepWell App</p>
        <p className="text-tiny text-white/60">Improve your sleep quality</p>
      </div>
    </div>
    <Button radius="full" size="sm">Download Now</Button>
  </CardFooter>
</Card>

    </div>
  );
}

export default Features;
