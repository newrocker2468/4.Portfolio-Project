import { FC } from "react";
import { Profile } from "../types/Profile";
import DiscordLogo from "../assets/DiscordLogo";
import BlurContainer from "./BlurComponent";

interface InfoCardProps {
  title?: string;
  desc?: string | JSX.Element;
  status?: string;
  discord?: boolean;
  profile?: Profile;
  ref?: React.LegacyRef<HTMLDivElement>;
}

const StatusIndicator: FC<{ status: string }> = ({ status }) => (
  <span
    className={`flex items-center space-x-1 text-sm font-medium ${
      status === "online"
        ? "text-green-500"
        : status === "idle"
        ? "text-yellow-500"
        : status === "dnd"
        ? "text-red-500"
        : "text-gray-500"
    }`}
  >
    <span
      className={`w-2 h-2 rounded-full ${
        status === "online"
          ? "bg-green-500"
          : status === "idle"
          ? "bg-yellow-500"
          : status === "dnd"
          ? "bg-red-500"
          : "bg-gray-500"
      }`}
    ></span>
    <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
  </span>
);

const DiscordProfile: FC<{ profile: Profile }> = ({ profile }) => (
  <>
    <div>
      <h1 className='text-xl font-bold mb-2'>#{profile.username}</h1>
      <div className='flex justify-start gap-5 items-center'>
        <DiscordLogo />
        <StatusIndicator status={profile.status} />
      </div>
    </div>
    <img
      src={profile.avatar}
      alt='Avatar'
      className='rounded-full w-auto sm:w-14 md:w-16 lg:w-20 max-w-20 '
    />
  </>
);

const InfoCard: FC<InfoCardProps> = ({
  title,
  desc,
  status,
  discord,
  profile,
}) => {
  return discord ? (
    <BlurContainer className='flex items-center justify-around dark:bg-infocardbg border-[#2a2a2a] border border-solid border-1 bg-white sm:flex-col-reverse shadow-md xl:flex-row lg:flex-col-reverse rounded-2xl p-5 '>
      {" "}
      {profile && <DiscordProfile profile={profile} />}{" "}
    </BlurContainer>
  ) : (
    <BlurContainer className='flex flex-col items-center dark:bg-infocardbg border-[#2a2a2a] border border-solid border-1 bg-white shadow-md justify-center rounded-2xl p-5 '>
      {" "}
      <h1>{title}</h1> <p>{status}</p>{" "}
      <p className='flex flex-col justify-center items-center flex-wrap overflow-hidden text-ellipsis max-w-full'>
        {" "}
        {desc}{" "}
      </p>{" "}
      {profile && (
        <>
          {" "}
          <h1>{profile.username}</h1>{" "}
          <img src={profile.avatar} alt='Avatar' className='rounded-full' />{" "}
        </>
      )}{" "}
    </BlurContainer>
  );
};

export default InfoCard;
