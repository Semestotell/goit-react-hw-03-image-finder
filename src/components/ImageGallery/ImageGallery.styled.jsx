import styled from "styled-components";

export const Gallery = styled.ul`
    display: grid;
    max-width: calc(100vw-48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: 10px;
    margin-right: 10px;
`