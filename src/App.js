import { ThemeProvider } from "styled-components";
import { PDFExportButton } from "./components/PDFExportButton";
import { IconText } from "./components/IconText";
import { SectionContainer } from "./components/Section";
import { SectionTitle } from "./components/Section";
import { resumeData } from "./config/resumeData";
import { MailOutlined, PhoneOutlined, GithubOutlined } from "@ant-design/icons";
import { Flag, Information, Time, Phone, Email } from "./icon/icons";

import { theme } from "./styles/theme";
import { Space } from "antd";
import { ResumeContent } from './styles/globalStyles'

const iconMap = {
  Flag: <Flag />,
  Information: <Information />,
  Time: <Time />,
  Phone: <Phone />,
  Email: <Email />,
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResumeContent>
        {/* 基本信息 */}
        <SectionContainer>
          <SectionTitle level={4}>基本信息</SectionTitle>
          <div>
            {resumeData.basicInfo.contact.slice(0, 3).map((item, index) => (
              <IconText key={index} icon={iconMap[item.icon]} text={item.text} />
            ))}
          </div>
          <div>
            {resumeData.basicInfo.contact.slice(3, 5).map((item, index) => (
              <IconText key={index} icon={iconMap[item.icon]} text={item.text} />
            ))}
          </div>
        </SectionContainer>

        {/* 工作经历 */}
        <SectionContainer>
          <SectionTitle level={4}>工作经历</SectionTitle>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index}>
              <h4>{exp.company} - {exp.position}</h4>
              <p style={{ color: theme.secondaryColor }}>{exp.period}</p>
              <ul>
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </SectionContainer>
        {/* 项目描述 */}

        <SectionContainer>
          <SectionTitle level={4}>项目介绍</SectionTitle>
          {resumeData.projects.map((exp, index) => (
            <div key={index}>
              <h4>{exp.name}</h4>
              <p style={{ color: theme.secondaryColor }}>{exp.role}</p>
              <ul>
                {exp.description.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </SectionContainer>

        {/* 技能清单 */}

        <SectionContainer>
          <SectionTitle level={4}>技能清单</SectionTitle>
          <ul>
            {resumeData.skills.map((exp, index) => (
              <div key={index}>
                <li>{exp.description}</li>
              </div>
            ))}
          </ul>
        </SectionContainer>

        {/* 教育经历 */}
        <SectionContainer>
          <SectionTitle level={4}>教育经历</SectionTitle>
          <div>
            <h4>{resumeData.education.university}</h4>
            <p style={{ color: theme.secondaryColor }}>{resumeData.education.degree} {resumeData.education.period}</p>
          </div>
        </SectionContainer>

      </ResumeContent>
    </ThemeProvider>
  );
}