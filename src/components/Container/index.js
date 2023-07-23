import React from "react";
import { Container as ContainerStyles } from './styles'

function Container({children}) {
    return <ContainerStyles>{children}</ContainerStyles>
}

export default Container