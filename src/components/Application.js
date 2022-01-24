import React from "react";
import { StyledApplication } from "./styles/Application.styled"
import { Button } from "./styles/Button.styled"

export default function Application() {
    return(
        <StyledApplication>
            <h2>Ready To Build Your Community?</h2> 
            <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
        </StyledApplication>
    )
}