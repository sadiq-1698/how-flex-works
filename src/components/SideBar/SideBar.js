import { SideBarContainer } from './SideBar.styles';
import FilterChipsSectionContainer  from '../FilterChipsSection/FilterChipsSection';

const SideBar = () => {

    const flexDirection = ["row", "column"];
    const justifyContent = ["center", "flex-start", "flex-end", "space-between", "space-evenly", "space-around"];
    const alignItems = ["center", "flex-start", "flex-end", "space-between", "space-evenly", "space-around"];

    return (
        <SideBarContainer>
            <FilterChipsSectionContainer items={flexDirection} itemHeader="Flex direction"/>
            <FilterChipsSectionContainer items={justifyContent} itemHeader="Justify content"/>
            <FilterChipsSectionContainer items={alignItems} itemHeader="Align items"/>
        </SideBarContainer>
    )
}

export default SideBar;
