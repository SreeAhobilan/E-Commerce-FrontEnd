import styled from "styled-components"

const Container=styled.div`
    height:30px;
    background-color:white;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
    text-align:center;
`

const Announcements = () => {
    return (
        <Container>
            Super Deal!!! Free Shipping on Order Over RS.5000
        </Container>
    )
}

export default Announcements
