import styled from "styled-components";

export const StyledApplication = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: auto;
    padding: 3rem 1rem;
    border-radius: 15px;
    max-width: 47.75rem;
    text-align: center;
    display: absolute;
    background-color: #fff;
    font-size: 1.5rem;
    transform: translateY(30%);
    overflow-x: hidden;
    
    h2{
        font-size: 2rem;
        margin-bottom: 3rem;
    }

    Button {
        font-size: 1.2rem;
        padding: 1.5rem 8rem;
    }

    @media(max-width: 750px){
        margin: .5rem;
        padding: 3rem .4rem;
        transform: translateY(40%);
        h2 {
            margin: 0;
            font-size: 1.5rem;
            padding: 0;
            margin-bottom: 2rem;
        }
        Button {
            font-size: .9rem;
            padding: 1.2rem 2.6em;
            width: 80%; 
        }
    }
`