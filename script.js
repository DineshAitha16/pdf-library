const upload = document.getElementById("pdfUpload");
const pdfList = document.getElementById("pdfList");

let pdfs = [];

upload.addEventListener("change", function(e){

  const file = e.target.files[0];

  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(event){

    pdfs.push({
      name:file.name,
      data:event.target.result
    });

    renderPDFs();
  };

  reader.readAsDataURL(file);
});

function renderPDFs(){

  pdfList.innerHTML = "";

  pdfs.forEach((pdf,index)=>{

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <h3>${pdf.name}</h3>

      <a href="${pdf.data}" target="_blank">
        <button>View PDF</button>
      </a>
    `;

    pdfList.appendChild(card);
  });
}
