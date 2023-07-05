import { SearchBar } from 'bombastic-ui';
import React, { useState } from 'react'
import { Wrapper } from './SearchBar.styles';

const SearchBarBombastic = () => {
    const [value, setValue] = useState()
    return (
        <Wrapper>
            <SearchBar
                color="primary"
                onChange={(e) => setValue(e.value)}
                onSubmit={(e) => setValue(e.value)}
            />
        </Wrapper>
    )
}

export default SearchBarBombastic