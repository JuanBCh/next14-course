import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-between p-9">
      <aside>
        <h1 className="text-8xl font-bold max-w-xs leading-tight tracking-wide">
          Creative Thoughts Agency.
        </h1>
        <p className="max-w-xl text-lg py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi architecto, quam asperiores dignissimos aperiam
          impedit molestiae odit nam.
        </p>
        <div>
          <button className="shadow-inner bg-blue-900 rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5 mr-7">
            Learn More
          </button>
          <button className="text-dark-blue shadow-inner bg-white rounded-md w-44 h-12 py-1 hover:font-bold hover:px-5">
            Contact
          </button>
        </div>
        <Image className="pt-12" src="/brands.png" width={500} height={500} />
      </aside>
      <Image src="/hero.gif" width={700} height={700} />
    </div>
  );
};

export default Home;
