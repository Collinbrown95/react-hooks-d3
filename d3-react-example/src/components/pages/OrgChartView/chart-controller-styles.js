import styled from 'styled-components';

import FontAwesome from 'react-fontawesome';

/**
 * Custom dropdown
 */

 export const DropDownWrapper = styled.div`
    margin: 2% 0%;
    width: 92.5%;

    cursor: pointer;

    position: relative;
`;

 export const DropDownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.5% 0%;

    background: #fff;
    border-radius: 1.5px;
    
    border-bottom: 0.5px solid rgba(41, 41, 41, 0.5);
`;

export const DropDownHeaderTitle = styled.div`
    color: #282828;

    font-size: 16px;
    font-weight: 300;

    margin-left: 2.5%;
`;

export const DropDownArrow = styled(FontAwesome)`
    margin-right: 5%;
`;


export const DropDownCheck = styled.div`
    float: right;
    vertical-align: middle;
    margin-right: 5%;
`;

export const DropDownUnorderedList = styled.ul`
    z-index: 10;
    position: absolute;
    width: 100%;
    background-color: white;
    
    max-height: 500%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    animation: move-in-down 0.1s ease-out;
    @keyframes move-in-down {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const DropDownListItem = styled.li`
    width: 100%;

    margin-top: 1%;

    cursor: pointer;

    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-weight: 300;
    font-size: 14px;
    text-indent: 2.5%;

    border-bottom: 0.25px solid rgba(41, 41, 41, 0.5);

    &.selected{
        color: white;
        background-color: rgba(41, 41, 41, 0.3);
    }

    &:hover{
        font-weight: 400;
        color: white;
        background-color: rgba(41, 41, 41, 0.2);
    }
`;

/**
 * Search bar styles
 */
export const SearchBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 92.5%;
    margin: 2% 0%;

    @media screen and (max-width: 1100px) {
        width: 92.5%;
        margin: 2% 0%;
    }
`;

export const FormStyle = styled.form`
    width: 100%;

    display: flex;
    flex-direction: row;

    text-align: center;
    
`;

export const SearchBarStyle = styled.input`
    flex: 10;
    font-weight: 300;

    padding-left: 2.5%;

    border: 1px solid #282828;
    border-radius: 2px;
    outline: none;
    color: #282828;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: 300;

        color: rgba(41, 41, 41, 0.5);
    }
    :-ms-input-placeholder {
        font-weight: 400;

        color: rgba(41, 41, 41, 0.5);
    }
    @media screen and (max-width: 1100px) {
        width: 92.5%;
        margin: 2% 0%;
    }
`;

export const SubmitButtonStyle = styled.button`
    flex: 1;
    display: inline-block;
    text-align: center;
    
    border: 1px solid #282828;
    border-radius: 2px;
    background: "#fff";
    color: #282828;

    outline: none;

    font-weight: 400;
    font-size: 12px;

    @media screen and (max-width: 1100px) {
        width: 92.5%;
        margin: 2% 0%;
    }
`;

/**
 * Button Group Styles
 */

export const ButtonGroupDiv = styled.div`
    margin-top: 5%;    

    display: flex;
    flex-direction: row;
    
    border: 1px solid #fff;
    border-radius: 2px;

    width: 92.5%;

    
`;

export const InnerButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    flex: 1;

    border: ${props => props.activeButton ? "1px solid #fff": "1px solid #fff"};
    
    background: ${props => props.activeButton ? "rgba(41,41,41,0.3)" : "#fff"};
    color: ${props => props.activeButton ? "#fff" : "#282828"};
    padding-top: 1%;
    padding-bottom: 1%;
    
    font-weight: 300;
    font-size: 16px;

    outline: none;

`;