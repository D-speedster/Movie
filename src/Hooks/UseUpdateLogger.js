import React, { useEffect, useState } from 'react'

export default function UseUpdateLogger(title) {

    useEffect(() => {
        console.log(title)

    }, [title])
}
