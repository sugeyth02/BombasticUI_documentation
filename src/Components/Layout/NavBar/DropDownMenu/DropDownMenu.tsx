import React from 'react'
import { DropdownMenuContainer } from './DropDownMenu.styles'
import { NavigationTag, SectionTitle, Tag } from '../../../../styles/Typography';
import { data } from '../../../../Data/ComponentsNavigation';


interface DropdownMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const DropDownMenu = ({ isOpen,setIsOpen }: DropdownMenuProps) => {
    return (
        <DropdownMenuContainer $isOpen={isOpen}>
            <div className='content'>
                <NavigationTag href='/documentation'>Documentation</NavigationTag>
                <div className='documentation'>
                    {data.map((section) => <div className='section' key={section.title}>
                        <SectionTitle href={`./documentation#${section.title}`}>{section.title}</SectionTitle>
                        <div className='options'>
                            {section.elements.map((element) =>
                                <Tag href={`./documentation#${element}`} key={element} onClick={()=>setIsOpen(!isOpen)}>{element}</Tag>
                            )}
                        </div>
                    </div>)}
                </div>
                <NavigationTag href='/about-us'>About us</NavigationTag>
            </div>
        </DropdownMenuContainer>
    )
}

export default DropDownMenu