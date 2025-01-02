import InfoCard from "../components/InfoCard";
import InfiniteTimer from "../components/InfiniteTimer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Profile } from "../types/Profile";


const AboutMe = () => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile");
        // console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching Discord profile:", error);
      }
    };
    fetchProfile();
  },[]);
// oauth2 hkq0aDTu3uX4Ma__CCgAnr1OtOP_XCaM
  // 1024;
  return (
    <>
      <h1 className='text-center'>My DashBoard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center items-center lg:mx-72 md:mx-20 '>
        <InfoCard title={"My Age"} desc={<InfiniteTimer />} />
        <InfoCard title={"My Age"} desc={"21"} />
        <InfoCard title={"My Age"} desc={"21"} />
        <InfoCard discord={true} profile={profile} />
        {/* {profile && (
          <>
            <h1>{profile.username}</h1>
            <img
              src={profile.avatar}
              alt='Avatar'
              className='rounded-full'
            />
          </>
        )} */}
      </div>
    </>
  );
};
export default AboutMe;
