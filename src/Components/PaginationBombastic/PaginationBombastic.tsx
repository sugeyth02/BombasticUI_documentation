import { Pagination } from 'bombastic-ui';
import React, { useState } from 'react'

const PaginationBombastic = () => {
    const [pagination, setPagination] = useState<number | undefined>()

    return (
        <Pagination total={10} onChange={setPagination} page={pagination} />
    )
}

export default PaginationBombastic