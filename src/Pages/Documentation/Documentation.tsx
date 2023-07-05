import React from 'react';
import Layout from '../../Components/Layout/Layout';
import { DocumentationWrapper } from './Documentation.styles';
import SideBar from '../../Components/SideBar/SideBar';
import LibraryComponent from '../../Components/LibraryComponent/LibraryComponent';
import { LibraryComponentsList } from '../../Data/Components';
import { Paragraph, PrimaryTitle, Title } from '../../styles/Typography';
import { CopyBlock, hybrid } from 'react-code-blocks';

const Documentation = () => {
  return (
    <Layout>
      <DocumentationWrapper>
        <SideBar />
        <div className='content'>
          <div className='Overview' id='Overview'>
            <PrimaryTitle>Overview</PrimaryTitle>
            <div id='Introduction' className='introduction'>
              <Title>Introduction</Title>
              <Paragraph as='div'>
                <p><b>Bombastic-ui</b> is an open-source component library for React, designed to facilitate the development of elegant and modern user interfaces. With customizable and reusable components, developers can efficiently build web applications.</p>

                <p>Bombastic-ui is licensed under <b>MIT</b>, allowing developers to freely use, modify, and distribute the library. Collaboration and community adoption are encouraged, inviting others to contribute and improve the library.</p>

                <p>Developed using Node.js as the environment and TypeScript as the primary language, Bombastic-ui ensures a reliable development platform with static typing and enhanced autocompletion.</p>

                <p>The library is distributed through npm, making it easy to install and update in React projects. The source code is hosted on GitHub, allowing developers to explore, raise issues, and contribute via pull requests. Visit the GitHub repository at <a href="https://github.com/HeyChobe/bombastic-ui/tree/main">https://github.com/HeyChobe/bombastic-ui/tree/main</a> for code exploration and contributions.</p>

                <p>Get Bombastic-ui on npm at <a href="https://www.npmjs.com/package/bombastic-ui">https://www.npmjs.com/package/bombastic-ui</a></p>
              </Paragraph>
            </div>
            <div id='Getting started' className='installation'>
              <Title>Getting started</Title>
              <Paragraph> You can install <b>bombastic-ui</b> by running the following code on your project</Paragraph>
              <Paragraph>Using npm</Paragraph>
              <CopyBlock
                text={'npm install bombastic-ui --save'}
                language='bash'
                theme={hybrid}
                codeBlock={true}
                showLine
              />
              <Paragraph>Using yarn</Paragraph>
              <CopyBlock
                text={'yarn add bombastic-ui'}
                language='bash'
                theme={hybrid}
                codeBlock={true}
              />

            </div>
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
