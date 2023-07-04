import React from 'react';
import Layout from '../../Components/Layout/Layout';
import { DocumentationWrapper } from './Documentation.styles';
import SideBar from '../../Components/SideBar/SideBar';
import LibraryComponent from '../../Components/LibraryComponent/LibraryComponent';
import { LibraryComponentsList } from '../../Data/Components';
import { PrimaryTitle, Title } from '../../styles/Typography';

const Documentation = () => {
  return (
    <Layout>
      <DocumentationWrapper>
        <SideBar />
        <div className='content'>
          <div className='Overview' id='Overview'>
            <PrimaryTitle>Overview</PrimaryTitle>
          </div>
          <div className='components' id='Components'>
            <PrimaryTitle>Components</PrimaryTitle>
            {LibraryComponentsList.map((element) => <LibraryComponent component={element} />)}
          </div>

        </div>
      </DocumentationWrapper>
    </Layout>
  );
};

export default Documentation;
