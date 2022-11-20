import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 16px;
    }
    
    @media (max-width: 1350px) {
        html{
            font-size: 13px;
        }
    }
    @media (max-width: 900px) {
        html{
            font-size: 12px;
        }
    }
    @media (max-width: 600px) {
        html{
            font-size: 11px;
        }
    }
    @media (max-width: 450px) {
        html{
            font-size: 10px;
        }
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color.white};
        overflow-x: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: ${({ theme }) => theme.color.main.color};
           
        }
        &::-webkit-scrollbar-thumb:hover {
            background-color: ${({ theme }) => theme.color.main.dark};
        }
        &::-webkit-scrollbar-thumb:active {
            background-color: ${({ theme }) => theme.color.main.darker};
        }
    }
`;
export default GlobalStyle;
