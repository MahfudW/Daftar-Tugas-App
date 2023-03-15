import styled from "styled-components";

const Checkbox = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    background: #d9d9d9;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    transition: all 300ms ease;
    &:hover {
        opacity: 0.8;
}
`

export default Checkbox;
