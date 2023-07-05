import { Rating } from 'bombastic-ui';
import React, { useState } from 'react'
import { Wrapper } from './Rating.styles';

const RatingBombastic = () => {
    const[value, setValue] = useState(undefined)
    return (
        <Wrapper>
            <Rating
                color="warning"
                disabled={false}
                readonly={false}
                onChange={(e) => { }}
                //@ts-ignore
                value={value}
            />  
        </Wrapper>
  )
}

export default RatingBombastic