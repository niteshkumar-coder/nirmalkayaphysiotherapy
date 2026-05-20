import jsPDF from 'jspdf';

interface AppointmentData {
  name: string;
  phone: string;
  treatment: string;
  condition: string;
  date: string;
  time: string;
}

export const generateAppointmentSlip = (data: AppointmentData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a5'
  });

  // Header
  doc.setFillColor(239, 68, 68); // clinic-red
  doc.rect(0, 0, 148, 20, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('NIRMAL KAYA', 10, 13);
  doc.setFontSize(8);
  doc.text('PHYSIOTHERAPY & REHABILITATION CENTER', 10, 17);

  // Doctor Info
  doc.setTextColor(2, 6, 23); // clinic-blue
  doc.setFontSize(12);
  doc.text('DR. KUNDAN KUMAR', 85, 13);
  doc.setFontSize(8);
  doc.text('BPT, MPT, MIAP', 85, 17);

  // Title
  doc.setFontSize(14);
  doc.text('BOOK APPOINTMENT SLIP', 74, 30, { align: 'center' });
  doc.setLineWidth(0.5);
  doc.line(40, 32, 108, 32);

  // Content
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  let y = 45;
  const drawRow = (label: string, value: string) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, 20, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 60, y);
    y += 10;
  };

  drawRow('PATIENT NAME', data.name.toUpperCase());
  drawRow('PHONE NUMBER', data.phone);
  drawRow('TREATMENT TYPE', data.treatment.toUpperCase());
  drawRow('CONDITION', data.condition || 'NOT SPECIFIED');
  drawRow('PREFERRED DATE', data.date);
  drawRow('PREFERRED TIME', data.time);

  // Footer / Instructions
  y += 5;
  doc.setFillColor(248, 250, 252); // slate-50
  doc.rect(10, y, 128, 25, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.text('Note: Please bring any previous medical reports or prescriptions', 15, y + 8);
  doc.text('during your visit for better assessment.', 15, y + 13);
  doc.text('Contact: +91 9899532930', 15, y + 18);

  // Clinic Info
  y += 35;
  doc.setFont('helvetica', 'bold');
  doc.text('Nirmal Kaya Physiotherapy Center', 74, y, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.text('Road No. 11D, Rajendra Nagar, Patna-16, Bihar', 74, y + 5, { align: 'center' });

  // Save the PDF
  doc.save(`Appointment_${data.name.replace(/\s+/g, '_')}.pdf`);
};
