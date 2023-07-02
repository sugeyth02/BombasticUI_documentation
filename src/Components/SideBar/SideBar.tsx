import React from 'react'
import { SideBarWrapper } from './SideBar.styles'
import { SectionTitle, Tag } from '../../styles/Typography'
import { data } from '../../Data/ComponentsNavigation'
import { useLocation } from 'react-router-dom'


const SideBar = () => {
    const { pathname } = useLocation();
  return (
      <SideBarWrapper>
          {data.map((section) => <div className='section' key={section.title}>
              <SectionTitle href={`#${section.title}`} $active={pathname.includes(section.title)}>{section.title}</SectionTitle>
              <div className='options'>
                  {section.elements.map((element) =>
                      <Tag href={`#${element}`} key={element} $active={pathname.includes(element)}>{element}</Tag>
                  )}
              </div>
          </div>)}
    </SideBarWrapper>
  )
}

export default SideBar