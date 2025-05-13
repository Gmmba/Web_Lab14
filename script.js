document.querySelectorAll('.editable').forEach(el => {
  el.addEventListener('input', () => {
    el.style.animation = 'pulse 0.3s ease';
    setTimeout(() => el.style.animation = '', 300);
  });
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const element = document.getElementById('resume');
  html2pdf().from(element).set({
    margin: 0.5,
    filename: 'resume.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).save();
});