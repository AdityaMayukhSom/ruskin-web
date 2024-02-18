import Image from "next/image";
export default function Performance() {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-32">
      <div className="">
        <h2 className="text-2xl md:text-center font-semibold text-secondary-font-color py-2">
          Performance
        </h2>
        <h1 className="text-4xl md:text-center font-bold py-1">
          Upto 2x faster
        </h1>
        <p className="text-1xl md:text-center text-tertiary-font-color py-1">
          Reduces server load by 90% and executes 2 times faster than usual. 
        </p>
      </div>

      <div className="relative w-full h-120 flex justify-center items-center">
        <Image
          src="/performance.png"
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
