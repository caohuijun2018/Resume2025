import { ThemeProvider } from "styled-components";
import { IconText } from "./components/IconText";
import { SectionContainer } from "./components/Section";
import { SectionTitle } from "./components/Section";
import { resumeData } from "./config/resumeData";
import { MailOutlined, PhoneOutlined, GithubOutlined } from "@ant-design/icons";
import { Flag, Information, Time, Phone, Email } from "./icon/icons";

import { theme } from "./styles/theme";
import { Space, List } from "antd";
import { ResumeContent } from './styles/globalStyles'
import Footer from "./components/Footer";
import { exportToPdf } from "./components/ExportToPDF";

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
      {/* <button onClick={exportToPdf} style={{ margin: "20px auto", display: "block" }}>
        Export to PDF
      </button> */}
      <ResumeContent id='resume'>
        {/* 基本信息 */}
        <SectionContainer>
          <SectionTitle level={4}>基本信息</SectionTitle>
          <div className="information">
            {resumeData.basicInfo.contact.map((item, index) => (
              <IconText key={index} icon={iconMap[item.icon]} text={item.text} />
            ))}
          </div>
        </SectionContainer>

        {/* 工作经历 */}
        <SectionContainer>
          <SectionTitle level={4}>工作经历</SectionTitle>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index}>
              <div className="line">
                <h4>{exp.company} - {exp.position}</h4>
                <p style={{ color: theme.secondaryColor }} className="right">{exp.period}</p>
              </div>
              <ul className="list">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="listItem">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </SectionContainer>
        {/* 项目描述 */}

        <SectionContainer>
          <SectionTitle level={4}>项目介绍</SectionTitle>
          {resumeData.projects.map((exp, index) => (
            <div key={index} className="project-block">
              <div className="line">
                <h4>{exp.name}</h4>
                <p style={{ color: theme.secondaryColor }} className="right">{exp.role}</p>
              </div>
              <ul className="list">
                {exp.description.map((highlight, i) => (
                  <li key={i} className="listItem">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </SectionContainer>
        <div className="page-break" ></div>

        {/* 技能清单 */}

        <SectionContainer>
          <SectionTitle level={4}>技能清单</SectionTitle>
          <ul>
            {resumeData.skills.map((exp, index) => (
              <div key={index}  className="list">
                <li className="listItem">{exp.description}</li>
              </div>
            ))}
          </ul>
        </SectionContainer>

        {/* 教育经历 */}
        <SectionContainer>
          <SectionTitle level={4}>教育经历</SectionTitle>
          <div className="line">
            <h4>{resumeData.education.university}</h4>
            <p style={{ color: theme.secondaryColor }} className="right">{resumeData.education.degree} {resumeData.education.period}</p>
          </div>
        </SectionContainer>
        {/* <Footer /> */}
      </ResumeContent>

    </ThemeProvider>
  );
}