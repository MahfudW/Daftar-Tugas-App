import styled from "styled-components";

const Selesai = styled.div`
  ${(props) =>
    props.isCompleted &&
    `
    text-decoration: line-through;
    color: grey;
  `}
`;

export default Selesai;