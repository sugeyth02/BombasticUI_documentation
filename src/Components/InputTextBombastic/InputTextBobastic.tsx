import React, { useState } from 'react'
import { theme } from '../../styles/theme'
import { InputText } from 'bombastic-ui'

const InputTextBobastic = () => {
    const [value, setValue] = useState('')
  return (
      <InputText
          placeholder="Write something"
          value={value}
          color={theme.colors.yellow}
          labelColor={theme.colors.white}
          onChange={(e) =>  setValue(e.target.value) }

      />
  )
}

export default InputTextBobastic