import Image from "next/image";

export default function ProductionDescription() {
  return (
    <section className="relative w-full grid grid-cols-2 justify-center items-center px-32 py-32 max-h-min">
      <div className="">
        <h1 className="text-5xl font-bold py-2 drop-shadow-2xl">
          Your Product
        </h1>
        <h1 className="text-5xl font-bold py-2 drop-shadow-2xl">
          Your Language
        </h1>
        <h1 className="text-5xl font-bold py-2 drop-shadow-2xl">
          Your Platform
        </h1>

        <p className=" py-6 text-2xl pr-32 leading-8 drop-shadow-2xl">
          Packing the power of robust code hosting, seamless collaboration
          through code reviews, and flexible pipelines for any language. All
          with the security and governance policies developers need to write and
          deliver code with confidence.
        </p>
      </div>

      <div className="relative w-full h-120 flex justify-center items-center">
        <Image
          src="/product-description.png"
          alt="ruskin is packed with power, check how"
          width="20"
          height="20"
          sizes="100vw"
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
}
