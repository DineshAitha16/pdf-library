const upload = document.getElementById("pdfUpload");
const pdfList = document.getElementById("pdfList");

let pdfs = [];

upload.addEventListener("change", function(e){

  const file = e.target.files[0];

  if(!file) return;

  const url = URL.createObjectURL(file);

  pdfs.push({
    name:file.name,
    url:url
  });

  renderPDFs();
});

function renderPDFs(){

  pdfList.innerHTML = "";

  pdfs.forEach((pdf,index)=>{

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

function openPDF(index){

  window.open(pdfs[index].url, "_blank");
}
