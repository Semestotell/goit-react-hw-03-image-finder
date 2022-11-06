import styled from "styled-components";

export const Spinner = styled.div`
    margin: 150px auto;
    width: 80px;
    > svg {
        width: 80px;
        height: 80px;
        fill: #3f51b5;
        animation: icon-spin 2s infinite linear;
        @keyframes icon-spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(359deg);
            }
        }
    }
`;