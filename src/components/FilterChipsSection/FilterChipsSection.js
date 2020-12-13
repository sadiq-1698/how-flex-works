import {FilterChipsSectionContainer} from './FilterChipsSection.styles';
import FilterChips from '../FilterChips/FilterChips';

const FilterChipsSection = ({ items, itemHeader }) => {

    return (
        <>
            <h4 style={{padding : "5px" }}>{itemHeader}</h4>
            <FilterChipsSectionContainer>
                {
                    items.map((val, index)=>{
                        return (
                            <FilterChips key={index} value={val}/>
                        );
                    })
                }
            </FilterChipsSectionContainer>
        </>
    )
}

export default FilterChipsSection;
