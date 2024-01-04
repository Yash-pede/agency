import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { format } from "date-fns";
const Hero = () => {
  return (
    <div className="headder z-10 flex flex-col w-full mx-auto justify-center items-center space-y-7">
        <Chip color="warning" variant="dot">
          2/3 Spots remaining for {format(new Date(), "MMMM")}
        </Chip>
        <div className="">
          <h3 className="text-7xl font-extrabold text-center leading-snug tracking-tighter bg-clip-text">
            Coding Dreams into Digital Realities
          </h3>
          <p className="text-lg text-foreground-500 text-center leading-loose tracking-tight bg-clip-text ">
            At Amperfect, we invite you to explore the fascinating intersection
            of imagination and technology. Our commitment is to turn your
            aspirations into beautifully functional websites that stand out in
            the digital landscape. Join us in shaping the future of the web,
            where innovation meets user delight.
          </p>
        </div>
        <div className="space-x-7">
          <Button radius="sm" color="primary" className="">
            Projects
          </Button>
          <Button color="default" radius="sm">
            Contact Us
          </Button>
        </div>
      </div>
  )
}

export default Hero