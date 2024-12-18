import {FC} from 'react';

interface InfoCardProps{
    title:string;
    desc:string | JSX.Element;
}


const InfoCard:FC<InfoCardProps> =({title,desc})=>{
    return (
      <>
        <div className='flex flex-col items-center justify-center border-2 border-grey rounded-2xl p-5 md:m-5 sm:m-0'>
          <h1>{title}</h1>
          <p className='flex flex-col justify-center items-center flex-wrap overflow-hidden text-ellipsis max-w-full'>
            {desc}
          </p>
        </div>
      </>
    );
}

export default InfoCard;