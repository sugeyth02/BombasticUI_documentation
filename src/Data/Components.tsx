import React from 'react'
import { Button as BombasticButton } from "bombastic-ui";

export interface Iproperties {
    property: string;
    description: string;
    type: string;
    default: string;
    allowedInputs: string;
}

export interface IComponent {
    id: string;
    title: string;
    code: string;
    Element?: React.ReactNode;
    properties: Iproperties[]

}
 const Button: IComponent = {
    id: 'Button',
    title: 'Button',
    code: `import { Button } from "bombastic-ui";
        < Button
  bg="primary"
  label="Primary Ghost Button"
  small
  ghost
  onClick={() => console.log("hola")}
/>;`,
    Element: <BombasticButton
        bg="primary"
        label="Primary Ghost Button"
        // @ts-ignore
        small
        ghost
        onClick={() => console.log("hola")}
    />,
    properties: [
        {
            property: 'label',
            description: 'Text label',
            type: 'string ',
            default: '"Button"',
            allowedInputs: 'strings ',
        },
        {
            property: 'onClick',
            description: 'On click handler for Button component ',
            type: '(event: any) => void',
            default: '-',
            allowedInputs: '(event: any) => void',
        },
        {
            property: 'bg',
            description: 'Background color theme for Button component',
            type: 'string',
            default: 'primary',
            allowedInputs: '"primary" |"secondary" |"ok" |"cancel" |"warning" |hexColors | rgbColors |',
            
        },
        {
            property: 'ghost',
            description: 'Outlined background style',
            type: 'boolean',
            default: 'false',
            allowedInputs: 'false|true',

        },
        {
            property: 'small',
            description: 'Small size ',
            type: 'boolean',
            default: 'false',
            allowedInputs: 'false|true',

        },
        {
            property: 'disabled',
            description: ' Disable button for any actions  ',
            type: 'boolean',
            default: 'false',
            allowedInputs: 'false|true',

        },
    ],
 };
const Title: IComponent = {
    id: 'Title',
    title: 'Title',
    code: `import { Title } from "bombastic-ui";

<Title h={1} label="Hola a todos" mode="center" />;`,
    properties: [
        {
            property: 'h ',
            description: 'Represents the level of html "h" tag ',
            type: 'number ',
            default: '1',
            allowedInputs: '1|2|3|4|5|6 ',
        },
        {
            property: 'label',
            description: 'String content of the title component',
            type: 'string',
            default: '"Title"',
            allowedInputs: 'strings ',
        },
        {
            property: 'italic',
            description: ' Italic font style ',
            type: 'boolean ',
            default: 'false',
            allowedInputs: 'false|true',

        },
        {
            property: 'underlined',
            description: 'Underlined front style ',
            type: 'boolean ',
            default: 'false',
            allowedInputs: 'false|true',

        },
        {
            property: 'strong',
            description: 'Font weight style ',
            type: 'boolean ',
            default: 'true',
            allowedInputs: 'false|true',

        },
        {
            property: 'mode',
            description: 'Text position',
            type: ' string  ',
            default: '"left"',
            allowedInputs: '"left"|"right"|"center"|"justify"   ',

        },
        {
            property: 'color',
            description: 'Font color ',
            type: 'string|color inputs',
            default: ' "primary"',
            allowedInputs: '"primary"|"secondary"|"ok"|"cancel"|"warning"|hex color|rgb color',

        },
        {
            property: 'onClick',
            description: 'On click handler for Button component ',
            type: '(event: any) => void',
            default: '-',
            allowedInputs: '(event: any) => void',
        },
    ],
};
const InputText: IComponent = {
    id: 'InputText',
    title: 'Input Text',
    code: `import { InputText } from "bombastic-ui";
import { useState } from "react";

export default function MyPage() {
  const [value, setValue] = useState("");

  return (
    <InputText
      placeholder="hola"
      value={value}
      color="green"
      labelColor="red"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`,
    properties: [
        {
            property: 'placeholder',
            description: 'Placeholder text for Input Text component',
            type: 'string ',
            default: '"Type something"',
            allowedInputs: 'strings ',
        },
        {
            property: 'onChange',
            description: 'On change handler',
            type: '(event: any) => void',
            default: '-',
            allowedInputs: '(event: any) => void',
        },
        {
            property: 'value',
            description: 'Value for Input Text component ',
            type: 'any',
            default: '-',
            allowedInputs: 'any',

        },
        {
            property: 'color',
            description: 'Background color theme for borders',
            type: 'strings',
            default: '"primary"',
            allowedInputs: '"primary"|"secondary"|"ok"|"cancel"|"warining"|hexColors|rgbColors ',

        },
        {
            property: 'disabled',
            description: 'Disabled option for any action',
            type: 'boolean',
            default: 'false',
            allowedInputs: 'false|true',

        },
        {
            property: 'labelColor',
            description: 'Label text color',
            type: 'string',
            default: '"dark"',
            allowedInputs: '"dark"|"light"|hexColors|rgbColors',

        },
    ],
};
const Accordion: IComponent = {
    id: 'Accordion',
    title: 'Accordion',
    code: `import { Accordion } from "bombastic-ui";

<Accordion
  title={"Lorem"}
  description={
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum."
  }
  bg="light"
/>;`,
    properties: [
        {
            property: 'title',
            description: 'Text that appears always in the Accordion component',
            type: 'string',
            default: '"Title"',
            allowedInputs: 'strings ',
        },
        {
            property: 'description',
            description: 'Hidden text that appears when Accordion component is clicked',
            type: 'string',
            default: '"This is an example of paragraph"',
            allowedInputs: 'strings ',
        },
        {
            property: 'bg',
            description: 'Background theme',
            type: 'string',
            default: '"dark"',
            allowedInputs: '"dark"|"light"',
        },
    ],
};
const ComboBox: IComponent = {
    id: 'ComboBox',
    title: 'ComboBox',
    code: `import { ComboBox } from "bombastic-ui";
import { useState } from "react";

const options = [
  { label: "pizza", value: 1 },
  { label: "hamburger", value: "hamburger" },
  { label: "tacos", value: "tacos" },
];

export default function MyPage(){
    const [comboBoxValue, setComboBoxValue] = useState("")

    return(
        ...
        <ComboBox theme="light" options={options} onChange={setComboBoxValue} />
        ...
    );`,
    properties: [
        {
            property: 'theme',
            description: 'Default options colors provided',
            type: 'string',
            default: '"dark"',
            allowedInputs: '"dark"|"light"',
        },
        {
            property: 'themeColor',
            description: 'Overwrite the default colors provided to make a custom component',
            type: 'string',
            default: '""',
            allowedInputs: 'hexColors|rgbColors',
        },
        {
            property: 'placeholder',
            description: 'Placeholder text to identify the custom combobox',
            type: 'string',
            default: '"Select an option"',
            allowedInputs: 'strings',
        },
        {
            property: 'labelBgColor',
            description: 'When the placeholder is focus, it moves to the top of the input to act like a label. This property changes the background color to make a transparent effect between the borders and background page.',
            type: 'string',
            default: '""',
            allowedInputs: 'hexColors|regColors',
        },
        {
            property: 'options',
            description: 'Labels and values to select inside the combobox',
            type: 'Array of {label: string, value: string | number}',
            default: '[{label: "Option 1", value: 1}, {label: "Option 2"}]',
            allowedInputs: 'Array of {label: string, value: string | number}',
        },
        {
            property: 'onChange',
            description: 'Function to use the setStateAction dispatch',
            type: 'Dispatch<SetStateAction<string|number|undefined>>',
            default: '-',
            allowedInputs: 'Dispatch<SetStateAction<string|number|undefined>>',
        },
    ],
};
const Avatar: IComponent = {
    id: 'Avatar',
    title: 'Avatar',
    code: `import { Avatar } from "bombastic-ui";

//Avatar with image
<Avatar
    alt="example"
    src="https://depor.com/resizer.jpg"
    pointer/>

//Avatar without image
<Avatar letter="CC" pointer />`,
    properties: [
        {
            property: 'alt',
            description: `Alt text when image doesn't appear`,
            type: 'string',
            default: '-',
            allowedInputs: 'strings ',
        },
        {
            property: 'src',
            description: 'Image source',
            type: 'string',
            default: '-',
            allowedInputs: 'strings ',
        },
        {
            property: 'pointer',
            description: 'Cursor pointer when hover Avatar component',
            type: 'boolean',
            default: 'false',
            allowedInputs: 'false|true',
        },
        {
            property: 'width',
            description: 'Width of the circle',
            type: 'string',
            default: '"100px"',
            allowedInputs: 'strings',
        },
        {
            property: 'height',
            description: 'Height of the circle',
            type: 'string',
            default: '"100px"',
            allowedInputs: 'strings',
        },
        {
            property: 'letter',
            description: 'Letter that appears when Avatar exists without image',
            type: 'string',
            default: '-',
            allowedInputs: 'strings',
        },
        {
            property: 'bgColor',
            description: 'Background Color for Avatar component with letters',
            type: 'string',
            default: '-',
            allowedInputs: 'hexColors|rgbColors',
        },
    ],
};
const ImageCard: IComponent = {
    id: 'ImageCard',
    title: 'ImageCard',
    code: `import { ImageCard } from "bombastic-ui";

<ImageCard
  title="Titulo"
  text="Este es mi texto, la verdad super chivo"
  titleButton="Ver mas"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
  alt="alt image"
  theme="light"
/>`,
    properties: [
        {
            property: 'title',
            description: 'Title for Image Card component',
            type: 'string',
            default: '"Title"',
            allowedInputs: 'strings ',
        },
        {
            property: 'text',
            description: 'Text content for Image Component',
            type: 'string',
            default: '"Example of text content"',
            allowedInputs: 'strings ',
        },
        {
            property: 'titleButton',
            description: 'Title for the button',
            type: 'string',
            default: '"Go somewhere" ',
            allowedInputs: 'strings ',
        },
        {
            property: 'src',
            description: 'Image source ',
            type: 'string',
            default: '""',
            allowedInputs: 'strings ',
        },
        {
            property: 'alt',
            description: 'Alt text to image source',
            type: 'string',
            default: '""',
            allowedInputs: 'strings ',
        },
        {
            property: 'theme',
            description: 'Background color theme',
            type: 'string',
            default: '"dark"',
            allowedInputs: '"dark"|"light"',
        },
        {
            property: 'bgButtonColor',
            description: 'Overwrite the default background color for button',
            type: 'string',
            default: '""',
            allowedInputs: 'hexColors|rgbColors',
        },
    ],
};
const ProgressBar: IComponent = {
    id: 'ProgressBar',
    title: 'ProgressBar',
    code: `import { ProgressBar } from "bombastic-ui";

<ProgressBar width="76%" bgColor="green" />;`,
    properties: [
        {
            property: 'width',
            description: 'Width percentage indicator',
            type: 'string',
            default: '"100%"',
            allowedInputs: '"0-100%"',
        },
        {
            property: 'bgColor',
            description: 'Background color',
            type: 'string',
            default: '""',
            allowedInputs: 'hexColors|rgbColors',
        },
    ],
};
const Pagination: IComponent = {
    id: 'Pagination',
    title: 'Pagination',
    code: `import { Pagination } from "bombastic-ui";
import {useState} from "react"

export default function MyPage() {

    const [pagination, setPagination] = useState("")

    return(
    ...
    <Pagination total={10} onChange={setPagination} page={pagination} />;
    ...
    )
};`,
    properties: [
        {
            property: 'width',
            description: 'Width percentage indicator',
            type: 'string',
            default: '"100%"',
            allowedInputs: '"0-100%"',
        },
        {
            property: 'bgColor',
            description: 'Background color',
            type: 'string',
            default: '""',
            allowedInputs: 'hexColors|rgbColors',
        },
    ],
};


export const LibraryComponentsList = [Accordion, Avatar, ComboBox, Button, Pagination, InputText, Title, ProgressBar, ImageCard].sort((a, b) =>
    a.id.localeCompare(b.id));
