import InfoCard from "../components/InfoCard";
import InfiniteTimer from "../components/InfiniteTimer";
const AboutMe = () => {
  return (
    <>
      <h1 className="text-center">My DashBoard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center items-center lg:mx-72 md:mx-20 ">
        <InfoCard title={"My Age"} desc={<InfiniteTimer/>} />
        
        <InfoCard title={"My Age"} desc={"21"} />
        <InfoCard title={"My Age"} desc={"21"} />
        <InfoCard title={"My Age"} desc={"21"} />
      </div>
    </>
  );
};
export default AboutMe;
