import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "antd";

export const PDFExportButton = () => {
  const exportPDF = async () => {
    const element = document.getElementById("resume-content");
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  return <Button type="primary" onClick={exportPDF}>导出 PDF</Button>;
};