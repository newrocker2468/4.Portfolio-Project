import React from 'react';
import techStyles from './TechStyles';

interface TechCardProps {
    techName: string;
}

const normalizeTechName = (techName: string): string => {
    return techName.toLowerCase().replace(/\s+/g, '');
};

const getTechStyles = (techName: string) => {
    const normalizedTechName = normalizeTechName(techName);
    for (const tech in techStyles) {
        if (techStyles[tech].names.some(name => normalizeTechName(name) === normalizedTechName)) {
            return techStyles[tech];
        }
    }
    return null; // Return null if no match is found
};

const TechCard: React.FC<TechCardProps> = ({ techName }) => {
    const techStyle = getTechStyles(techName);

    if (!techStyle) {
        // Return a default styling if the techName is not found
        return (
            <div className="rounded-lg px-2 py-1 m-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 flex font-medium text-xs items-center">
                <span>{techName}</span>
            </div>
        );
    }

    const { bgColor, textColor, svg } = techStyle;

    return (
        <div className={`px-2 py-1 m-1 rounded-full text-xs flex justify-between items-center font-medium ${bgColor} ${textColor} flex items-center `}>
            {/* {logo && <img src={logo} alt={`${techName} logo`} className="h-8 w-8 mr-2" />} */}
            {/* {svg && <svg className="h-5 w-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">{svg}</svg>} */}
            {svg && <div className="h-5 w-5 mx-1 flex justify-center items-center">{svg}</div>}
            <span className='relative'>{techName}</span>
        </div>
    );
};

export default TechCard;
