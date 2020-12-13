import { useState } from 'react';
import { FilterChip } from './FilterChips.styles';

const FilterChips = ({value}) => {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <FilterChip isSelected={isSelected} onClick={() => setIsSelected((prev) => !prev)}>
            {value}
        </FilterChip>
    )
}

export default FilterChips;
