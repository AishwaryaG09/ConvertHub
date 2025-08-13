import jsPDF from 'jspdf';

const downloadAsPDF = ({
    title = "PDF Report",
    author = "ConvertHub.com",
    filename = "report.pdf",
    data = [],
    footer = "© 2025 ConvertHub.com - All rights reserved",
}) => {
    const doc = new jsPDF();

    // Set metadata
    doc.setProperties({ title, author });

    // Add title
    doc.setFontSize(16);
    doc.text(title, 20, 20);

    // Add content
    doc.setFontSize(12);
    let y = 40;
    data.forEach((item) => {
        doc.text(`${item.label}: ${item.value}`, 20, y);
        y += 10;
    });

    // Add footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text(footer, 20, pageHeight - 10);

    // Save PDF
    doc.save(filename);
};

export default downloadAsPDF;