import styled from "styled-components";
import { Space } from "antd";

const StyledIconText = styled(Space)`
 display: flex;
 width: 200px;
 margin: 3px 0;
  .anticon {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 1.1rem;
  }
`;

export const IconText = ({ icon, text }) => (
  <StyledIconText>
    {icon}
    <span>{text}</span>
  </StyledIconText>
);