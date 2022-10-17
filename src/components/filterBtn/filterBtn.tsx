import {
  setVisibilityFilter,
  VisibilityFilter,
} from '../../features/slices/visibilityFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store/rootReducer';

import {MyButton} from './filterBtn.styles'

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

const FilterButton = ({ visibilityFilter, text }: FilterButtonProps) => {
  const dispatch = useDispatch();

  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  );

  return (
    <MyButton
      variant='contained'
      size='small'
      disabled={currentVisibilityFilter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </MyButton>
  );
};

export default FilterButton;
