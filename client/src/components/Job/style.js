import styled from 'styled-components';

export const Div = styled.div`
padding: 0px 5px;
width: 60%;
justify-content: space-evenly ;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
border: 1px solid #DCDCDC;
border-bottom: 2px solid #C0C0C0 !important;
border-radius: 5px;
align-content: center;
margin: 0 auto;
:hover {
    cursor: pointer;
    color: gray;
}
`
export const SubDiv = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
`


