const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");

const url = "https://script.google.com/macros/s/AKfycbxlMMToZAOwpCFiKxiXH9cVfp_rO6X3CCW7xOYkMZ7_ZjqKmllf0V1aEdevo0j8xLebMw/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value,
    suggestion: document.getElementById("suggestion").value,
    user: document.getElementById("user").value
  };

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    });

    message.textContent = "Gracias por tu opinión 💖";
    form.reset();

  } catch (error) {
    message.textContent = "Error al enviar 😢";
    console.error(error);
  }
});