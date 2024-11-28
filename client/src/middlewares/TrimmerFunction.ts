import { useEffect, useState } from "react";

const TrimmerFunction = (input: string): string => {
  const [ReducedText, setReducedText] = useState<string>(input);

  useEffect(() => {
    if (input.length > 250) {
      setReducedText(input.slice(0, 250) + ".... Click to read more");
    }
    // console.log("ReducedText", ReducedText);
  }, [ReducedText, input]);

  return ReducedText;
};

export default TrimmerFunction;
