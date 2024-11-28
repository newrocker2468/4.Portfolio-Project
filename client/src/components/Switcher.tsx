import GridViewIcon from "../icons/GridViewIcon";
import ListViewIcon from "../icons/ListViewIcon";
import { Dispatch, FC, SetStateAction } from "react";
interface SwitcherProps {
    View: string;
    SetView: Dispatch<SetStateAction<string>>;
}
const Switcher:FC<SwitcherProps> = ({View,SetView}) => {
    // useEffect(() => {
    //     console.log("View changed to", View);
    // }, [View]);
   
    return (
    
        <div className='rounded-xl gap-1 w-min flex'>
          <GridViewIcon View={View} SetView={SetView} />
          <ListViewIcon View={View} SetView={SetView} />
        </div>
  
    );
}
export default Switcher;