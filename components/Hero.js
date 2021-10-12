import Tabs from "./Tabs";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-2">
      <div className="my-4 heading">
        <h1 className="font-semibold font-montserrat text-7xl">
          Github Search
        </h1>
      </div>
      <Tabs />
    </div>
  );
};

export default Hero;
