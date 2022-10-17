import FilterButton from '../filterBtn/filterBtn';

import { VisibilityFilter } from '../../features/slices/visibilityFilterSlice';

const FilterOption = () => {
  return (
    <div>
      <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={'All'} />
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowActive}
        text={'Active'}
      />
      <FilterButton
        visibilityFilter={VisibilityFilter.ShowCompleted}
        text={'Completed'}
      />
    </div>
  );
};

export default FilterOption;
