import { SideBarContainer } from './SideBar.styles';
import FilterChips  from '../FilterChips/FilterChips';

const SideBar = () => {

    return (
        <SideBarContainer>
            <FilterChips value="flex-start"/>
            <FilterChips value="flex-end"/>
            <FilterChips value="space-between"/>
            <FilterChips value="space-around"/>
            <FilterChips value="space-evenly"/>
            <FilterChips value="center"/>
        </SideBarContainer>
    )
}

export default SideBar;
