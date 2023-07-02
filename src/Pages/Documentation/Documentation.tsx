import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { DocumentationWrapper } from './Documentation.styles'
import SideBar from '../../Components/SideBar/SideBar'

const Documentation = () => {
  return (
    <Layout>
      <DocumentationWrapper>
        <SideBar/>
      </DocumentationWrapper>
      
    </Layout>
  )
}

export default Documentation