import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const SectionContainer = styled.section`
  margin: 1rem 0;
  padding: 0.8rem;
  background: ${({ theme }) => theme.sectionBackground};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  .line {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 22px;
    .right {
      margin-left: 20px;
    }
  }

  .list {
    .listItem {
      margin: 10px 0;
    }
  }

  .information {
    margin: 0 40px;
  }

  .project-block {
    margin: 20px 0;
  }
`;

export const SectionTitle = styled(Title)`
  && {
    color: ${({ theme }) => theme.primaryColor};
    border-left: 4px solid ${({ theme }) => theme.primaryColor};
    padding-left: 1rem;
    margin-top: 1rem !important;
    margin-bottom: 1.5rem !important;
  }
`;