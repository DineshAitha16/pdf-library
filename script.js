const upload = document.getElementById("pdfUpload");
const pdfList = document.getElementById("pdfList");

let pdfs = JSON.parse(localStorage.getItem("pdfs")) || [];

function renderPDFs() {
  pdfList.innerHTML = "";

  pdfs.forEach((pdf, index) => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${pdf.name}</h3>

      <button onclick="openPDF(${index})">
        View PDF
      </button>
    `;

    pdfList.appendChild(card);
  });
}

upload.addEventListener("change", function(e){

  const file = e.target.files[0];

  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(event){

    pdfs.push({
      name:file.name,
      data:event.target.result
    });

    localStorage.setItem("pdfs", JSON.stringify(pdfs));

    renderPDFs();
  };

  reader.readAsDataURL(file);
});

function openPDF(index){

  const pdf = pdfs[index];

  const win = window.open("");

  win.document.write(`
    <iframe 
      width="100%" 
      height="100%" 
      src="${pdf.data}">
    </iframe>
  `);
}

renderPDFs();
