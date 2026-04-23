const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");

const url = "https://script.google.com/macros/s/AKfycbyDzvOQUBCViMZ18I_xIwMk8l2wYxwnePzo4KotUbsty4dyvXB6twmNyg2woGY1XABf4Q/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams();
  data.append("rating", document.getElementById("rating").value);
  data.append("comment", document.getElementById("comment").value);
  data.append("suggestion", document.getElementById("suggestion").value);
  data.append("user", document.getElementById("user").value);

  try {
    await fetch(url, {
      method: "POST",
      body: data
    });

    message.textContent = "Gracias por tu opinión 💖";
    form.reset();

  } catch (error) {
    message.textContent = "Error al enviar 😢";
    console.error(error);
  }
});