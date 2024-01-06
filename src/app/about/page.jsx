import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-between p-9 pt-28">
      <aside className="max-w-2xl">
        <section className="pb-12">
          <h2 className="text-blue-500 text-2xl font-bold pb-12">
            About Agency
          </h2>
          <h1 className="text-6xl font-bold leading-tight pb-12">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We’re world’s
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
        </section>
        <section className="flex justify-between">
          <div>
            <h3 className="text-3xl text-blue-500 font-bold">10 K+</h3>
            <p className="text-sm pt-2">Years of experience</p>
          </div>
          <div>
            <h3 className="text-3xl text-blue-500 font-bold">234 K+</h3>
            <p className="text-sm pt-2">People reached</p>
          </div>
          <div>
            <h3 className="text-3xl text-blue-500 font-bold">5 K+</h3>
            <p className="text-sm pt-2">Services and plugins</p>
          </div>
        </section>
      </aside>
      <Image
        className="h-auto m-auto"
        src="/about.png"
        width={550}
        height={550}
      />
    </div>
  );
}
