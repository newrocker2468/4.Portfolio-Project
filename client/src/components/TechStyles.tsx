// techStyles.ts
import BoostrapIcon from '../icons/BootstrapIcon';
import ExpressjsIcon from '../icons/ExpressjsIcon';
import JwtIcon from '../icons/JwtIcon';
import MongodbIcon from '../icons/MongodbIcon';
import NodejsIcon from '../icons/NodejsIcon';
import PassportjsIcon from '../icons/PassportjsIcon';
import ReactIcon from '../icons/ReactIcon';
import TailwindCss from '../icons/TailwindCss';
interface TechStyle {
    names: string[];
    bgColor: string;
    textColor: string;
    logo?: string;
    svg?: JSX.Element;
}

const techStyles: { [key: string]: TechStyle } = {
    tailwindcss: {
        names: ["tailwindcss", "tailwind css", "tailwind"],
        bgColor: 'dark:bg-tailwindbgdark bg-tailwindbg',
        textColor: 'dark:text-tailwindtextdark text-tailwindtext',
        svg: <TailwindCss />,
    },
    react: {
        names: ["react", "reactjs", "react js"],
        bgColor: 'dark:bg-reactbgdark bg-reactbg',
        textColor: 'dark:text-reacttextdark text-reacttext',
        svg:<ReactIcon/>, // Replace with the actual path to the logo
    },
    shadowdom: {
        names: ["shadowdom", "shadow dom"],
        bgColor: 'bg-blue-100 dark:bg-blue-900',
        textColor: 'text-blue-800 dark:text-blue-200',
    },
    JWT: {
        names: ["jwt", "json web token"],
        bgColor: 'bg-jwtbg dark:bg-jwtbgdark',
        textColor: 'text-jwttext dark:text-jwttextdark',
        svg:<JwtIcon/>,
    },
    NodeJs:{
        names:["nodejs","node.js"],
        bgColor: 'bg-nodejsbg dark:bg-nodejsbgdark',
        textColor: 'text-nodejstext dark:text-nodejstextdark',
        svg:<NodejsIcon/>,
    }    ,
    ExpressJs:{
        names:["expressjs","express.js","express"],
        bgColor: 'bg-expressjsbg dark:bg-expressjsbgdark',
        textColor: 'text-expressjstext dark:text-expressjstextdark',
        svg:<ExpressjsIcon/>,
    },
    MongoDB:{
        names:["mongodb","mongo db","mongo"],
        bgColor: 'bg-mongodbbg dark:bg-mongodbbgdark',
        textColor: 'text-mongodbtext dark:text-mongodbtextdark',
        svg:<MongodbIcon/>,
    },
    PassportJs:{
        names:["passportjs","passport.js","passport"],
        bgColor: 'bg-passportjsbg dark:bg-black',
        textColor: 'text-white dark:text-white',
        svg:<PassportjsIcon/>,
    },
    Bootstrap:{
        names:["bootstrap"],
        bgColor: 'bg-bootstrapbg dark:bg-bootstrapbgdark',
        textColor: 'text-bootstraptext dark:text-bootstraptextdark',
        svg:<BoostrapIcon/>,
    }
};

export default techStyles;
