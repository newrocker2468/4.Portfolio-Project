import { ComponentProps, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import Spinner from "./Spinner";

interface LazySvgProps extends ComponentProps<"svg"> {
  name: string;
  View?: string;
  SetView?: Dispatch<SetStateAction<string>>;
}

// This hook can be used to create your own wrapper component.
const UseLazyImport = (name: string) => {
  const importRef = useRef<FC<ComponentProps<"svg">>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        importRef.current = (
          await import(`../assets/${name}.tsx?react`)
        ).default; // We use `?react` here following `vite-plugin-svgr`'s convention.
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return {
    error,
    loading,
    Svg: importRef.current,
  };
};
export const LazySvg = ({ name, ...props }: LazySvgProps) => {
  const { loading, error, Svg } = UseLazyImport(name);

  if (error) {
    return "An error occurred";
  }

  if (loading) {
    return <Spinner/>;
  }

  if (!Svg) {
    return null;
  }

  return <Svg {...props} />;
};


