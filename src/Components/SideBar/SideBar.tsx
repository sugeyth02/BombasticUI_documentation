import React from 'react'
import { SideBarWrapper } from './SideBar.styles'
import { SectionTitle, Tag } from '../../styles/Typography'
import { data } from './Data'

const SideBar = () => {
  return (
      <SideBarWrapper>
          {data.map((section) => <div className='section'>
              <SectionTitle>{section.title}</SectionTitle>
              <div className='options'>
                  {section.elements.map((element) =>
                      <Tag>{element}</Tag>
                  )}
              </div>
          </div>)}
          
    </SideBarWrapper>
  )
}

export default SideBar