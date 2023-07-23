import React from "react";
import { H1 as H1Styles } from './styles'

function H1({children, ...props}) {
    return <H1Styles {...props}>{children}</H1Styles>
}

export default H1