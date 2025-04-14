
async function generate() {
  const fileInput = document.getElementById('upload');
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = async () => {
    const base64 = reader.result.split(',')[1];
    const res = await fetch("https://hook.eu2.make.com/uhsiqjufw0q2tx5axepxmwaj986mx6e0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: base64,
        prompt: "Hello!!"
      })
    });
    const data = await res.json();
    document.getElementById('result').innerHTML =
      `<img src="${data.output_url}" style="width:300px;" /><br/><a href="${data.output_url}" download>Download</a>`;
  };
  reader.readAsDataURL(file);
}
