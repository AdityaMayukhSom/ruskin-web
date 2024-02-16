import Link from "next/link";
export default function Setup() {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-32">
      <div className="">
        <h1 className="text-4xl md:text-center font-bold py-2">
          Setup ruskin in seconds
        </h1>
        <p className="text-1xl md:text-center text-tertiary-font-color">
          Install with a single Docker command.
        </p>
        <p className="text-1xl md:text-center text-tertiary-font-color">
          Lightweight enough to run on a $4 Digital Machine. 
        </p>
      </div>

      {/* TODO: Make this as a Button same as the one used in hero section */}
      <div className="py-4">
        <Link className="p-4" href="">
          Get Started
        </Link>
      </div>
    </section>
  );
}
