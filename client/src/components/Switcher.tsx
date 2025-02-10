import { Dispatch, FC, SetStateAction } from "react";
import { LazySvg } from "./UseLazyImport";
interface SwitcherProps {
  View: string;
  SetView: Dispatch<SetStateAction<string>>;
}
const Switcher: FC<SwitcherProps> = ({ View, SetView }) => {
  // useEffect(() => {
  //     console.log("View changed to", View);
  // }, [View]);

  return (
    <div className='rounded-xl gap-1 w-min flex'>
      <LazySvg name='GridViewIcon' View={View} SetView={SetView} />
      <LazySvg name='ListViewIcon' View={View} SetView={SetView} />
    </div>
  );
};
export default Switcher;
