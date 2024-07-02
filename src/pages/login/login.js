import "@/pages/login/login.css";
import { setDocumentTitle, getNode } from "kind-tiger";

setDocumentTitle("29CM / 로그인");

const loginButton = getNode(".login");

function handleLogin(e) {
  e.preventDefault();
  console.log("clicked!");
}

loginButton.addEventListener("click", handleLogin);
