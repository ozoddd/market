import { renderUi } from "./renderUi.js";

const pending = document.getElementById("pending");
export async function request(url) {
  pending.classList.remove("hidden");
  const req = await fetch(url);
  const data = await req.json();
  pending.classList.add("hidden");
  renderUi(data);
}
