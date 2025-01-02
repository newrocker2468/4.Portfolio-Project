// src/techStyles.ts
interface TechStyle {
  names: string[];
  bgColor: string;
  textColor: string;
  logo?: string;
  svg?: string; // Just the name, not the actual import
}

const techStyles: { [key: string]: TechStyle } = {
  tailwindcss: {
    names: ["tailwindcss", "tailwind css", "tailwind"],
    bgColor: "dark:bg-tailwindbgdark bg-tailwindbg",
    textColor: "dark:text-tailwindtextdark text-tailwindtext",
    svg: "TailwindCss",
  },
  react: {
    names: ["react", "reactjs", "react js"],
    bgColor: "dark:bg-reactbgdark bg-reactbg",
    textColor: "dark:text-reacttextdark text-reacttext",
    svg: "ReactIcon",
  },
  shadowdom: {
    names: ["shadowdom", "shadow dom"],
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-200",
  },
  JWT: {
    names: ["jwt", "json web token"],
    bgColor: "bg-jwtbg dark:bg-jwtbgdark",
    textColor: "text-jwttext dark:text-jwttextdark",
    svg: "JwtIcon",
  },
  NodeJs: {
    names: ["nodejs", "node.js"],
    bgColor: "bg-nodejsbg dark:bg-nodejsbgdark",
    textColor: "text-nodejstext dark:text-nodejstextdark",
    svg: "NodejsIcon",
  },
  ExpressJs: {
    names: ["expressjs", "express.js", "express"],
    bgColor: "bg-expressjsbg dark:bg-expressjsbgdark",
    textColor: "text-expressjstext dark:text-expressjstextdark",
    svg: "ExpressjsIcon",
  },
  MongoDB: {
    names: ["mongodb", "mongo db", "mongo"],
    bgColor: "bg-mongodbbg dark:bg-mongodbbgdark",
    textColor: "text-mongodbtext dark:text-mongodbtextdark",
    svg: "MongodbIcon",
  },
  PassportJs: {
    names: ["passportjs", "passport.js", "passport"],
    bgColor: "bg-passportjsbg dark:bg-black",
    textColor: "text-white dark:text-white",
    svg: "PassportjsIcon",
  },
  Bootstrap: {
    names: ["bootstrap"],
    bgColor: "bg-bootstrapbg dark:bg-bootstrapbgdark",
    textColor: "text-bootstraptext dark:text-bootstraptextdark",
    svg: "BootstrapIcon",
  },
  Ejs: {
    names: ["ejs"],
    bgColor: "bg-ejsbg dark:bg-ejsbgdark",
    textColor: "text-ejstext dark:text-ejstextdark",
    svg: "EjsIcon",
  },
  Mapbox: {
    names: ["mapbox"],
    bgColor: "bg-mapboxbg dark:bg-mapboxbgdark",
    textColor: "text-mapboxtext dark:text-mapboxtextdark",
    svg: "MapboxIcon",
  },
  Cloudinary: {
    names: ["cloudinary"],
    bgColor: "bg-cloudinarybg dark:bg-cloudinarybgdark",
    textColor: "text-cloudinarytext dark:text-cloudinarytextdark",
    svg: "CloudinaryIcon",
  },
  Shadcn: {
    names: ["shadcn"],
    bgColor: "bg-shadcnbg dark:bg-shadcnbgdark",
    textColor: "text-shadcncolor dark:text-shadcncolordark",
    svg: "ShadcnIcon",
  },
  NextUI: {
    names: ["nextui", "next ui", "next-ui"],
    bgColor: "bg-nextui dark:bg-nextuibgdark",
    textColor: "dark:text-white",
    svg: "NextuiIcon",
  },
  Mysql: {
    names: ["mysql", "sql"],
    bgColor: "bg-mysqlbg dark:bg-mysqlbgdark",
    textColor: "text-mysqltext dark:text-mysqltextdark",
    svg: "MysqlIcon",
  },
  Firebase:{
    names: ["firebase"],
    bgColor: "bg-firebasebg dark:bg-firebasebgdark",
    textColor: "text-firebasetext dark:text-firebasetextdark",
    svg: "FirebaseIcon",
  },
};

export default techStyles;
