import React from 'react';
import Layout from '../../Components/Layout/Layout';
import { DocumentationWrapper } from './Documentation.styles';
import SideBar from '../../Components/SideBar/SideBar';
import { Paragraph, Title } from '../../styles/Typography';
import { CopyBlock, hybrid } from 'react-code-blocks';

const Documentation = () => {
  return (
    <Layout>
      <DocumentationWrapper>
        <SideBar />
        <div className='content'>
          <div className='component' id='Button'>
            <Title>Button</Title>
            <Paragraph>Usage</Paragraph>
            <CopyBlock
              text={`import { Button } from "bombastic-ui";
<Button
  bg="primary"
  label="Primary Ghost Button"
  small
  ghost
  onClick={() => console.log("hola")}
/>;`}
              language='jsx'
              showLineNumbers
              theme={hybrid}
            />
           
          </div>
        </div>
      </DocumentationWrapper>
    </Layout>
  );
};

export default Documentation;
