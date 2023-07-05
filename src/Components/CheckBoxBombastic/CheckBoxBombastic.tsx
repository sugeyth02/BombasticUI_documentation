import { Checkbox } from 'bombastic-ui';
import React, { useState } from 'react'

const CheckBoxBombastic = () => {
    const [value, setValue] = useState<boolean | undefined>()
  return (
      <Checkbox
          checked={value}
          disabled={false}
          ghost={false}
          color="primary"
          onChange={() => setValue(!value)}
      />
  )
}

export default CheckBoxBombastic