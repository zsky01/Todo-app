import {useAppDispatch, useAppSelector} from "redux-hook";
import {clearCompleted} from "features/Todos/todoSlice";
import {BottomInfo} from "./BottomInfo";
import {Button} from "./Button";
import {Navigation} from "./Navigation";
import {selectActiveTodos} from "features/Todos/todoSelectors";

interface FiltersProps {
  path: string | undefined
}

const Filters = ({path}: FiltersProps) => {
  const dispatch = useAppDispatch();
  const activeTodos = useAppSelector(selectActiveTodos);

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return <>
    <BottomInfo>
      <div>{activeTodos.length} items left</div>
      <Navigation forMobile={false} path={path} />
      <Button onClick={handleClearCompleted}>Clear Completed</Button>
    </BottomInfo>
    <Navigation forMobile={true} path={path} />
  </>
};

export {Filters};