import { ComboBox } from 'bombastic-ui';
import React, { useState } from 'react'
import { theme } from '../../styles/theme';

const options = [
    { label: "pizza", value: "pizza" },
    { label: "hamburger", value: "hamburger" },
    { label: "tacos", value: "tacos" },
];

const ComboBoxBombastic = () => {
    const [comboBoxValue, setComboBoxValue] = useState<string | number | undefined>('')

    return (

        <ComboBox theme="light" options={options} onChange={setComboBoxValue} labelBgColor={ theme.colors.black} />

    );
}

export default ComboBoxBombastic;