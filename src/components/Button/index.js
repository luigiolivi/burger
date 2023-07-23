import React from "react";
import { Button as ButtonStyles } from './styles'

function Button({children, ...props}) {
    return <ButtonStyles {...props}>{children}</ButtonStyles>
}

export default Button