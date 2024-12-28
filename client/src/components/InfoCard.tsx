import { FC } from "react";
import { Profile } from "../types/Profile";
import DiscordLogo from "../icons/DiscordLogo";

interface InfoCardProps {
  title?: string;
  desc?: string | JSX.Element;
  status?: string;
  discord?: boolean;
  profile?: Profile;
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
    <img src={profile.avatar} alt='Avatar' className='rounded-full w-2/12' />
  </>
);

const InfoCard: FC<InfoCardProps> = ({
  title,
  desc,
  status,
  discord,
  profile,
}) => {
  return (
    <>
      {discord ? (
        <div className='flex items-center justify-around border-2 border-grey rounded-2xl p-5 md:m-5 sm:m-0'>
          {profile && <DiscordProfile profile={profile} />}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center border-2 border-grey rounded-2xl p-5 md:m-5 sm:m-0'>
          <h1>{title}</h1>
          <p>{status}</p>
          <p className='flex flex-col justify-center items-center flex-wrap overflow-hidden text-ellipsis max-w-full'>
            {desc}
          </p>
          {profile && (
            <>
              <h1>{profile.username}</h1>
              <img src={profile.avatar} alt='Avatar' className='rounded-full' />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default InfoCard;
