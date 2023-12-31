import React from 'react'
import { IComponent } from '../../Data/Components'
import { Paragraph, Title } from '../../styles/Typography'
import { CopyBlock, hybrid } from 'react-code-blocks';
import Table from '../Table/Table'
import { ComponentWrapper } from './LibraryComponent.styles';

const LibraryComponent = ({ component }: { component: IComponent }) => {
    const { Element, id, title, code, properties } = component

    return (
        <ComponentWrapper className='component' id={id}>
            <Title>{title}</Title>
            {Element}
            <Paragraph className='usage'>Usage</Paragraph>
            <div className='code'>
                <CopyBlock
                    text={code}
                    language='jsx'
                    theme={hybrid}
                />
            </div>
            <Paragraph>Properties</Paragraph>
            <Table data={properties} />
        </ComponentWrapper>

    )
}

export default LibraryComponent