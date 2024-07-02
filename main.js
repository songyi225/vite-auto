import "/src/styles/global.css";
import { getStorage, setStorage, insertLast, getNode } from "kind-tiger";
import getPbImageURL from "@/api/getPbImageURL";
import pb from "@/api/pocketbase";
import gsap from "gsap";
import defaultAuthData from "@/api/defaultAuthData";

const tl = gsap.timeline({
  defaults: {
    opacity: 0,
  },
});

tl.from(".visual", { delay: 0.3, y: 30 });
tl.from("h2 > span", { x: -30 }, "-=0.2");

async function logout() {
  // 로컬스토리지에 auth라는 애가 있다면 아래 코드를 실행
  if (localStorage.getItem("auth")) {
    const { isAuth, user } = await getStorage("auth");
    if (isAuth) {
      const template = `
        <div class="thumbnail">
          <img src="${getPbImageURL(user, "avatar")}" alt="" />
        </div>
        <div class="username">${user.name}님 반갑습니다!</div>
        <button type="button" class="logout">로그아웃</button>
      `;
      insertLast(".container", template);

      const logout = getNode(".logout");

      function handleLogout() {
        if (confirm("정말 로그아웃 하시겠습니까?")) {
          pb.authStore.clear();
          setStorage("auth", defaultAuthData);
          location.reload();
        }
      }

      logout.addEventListener("click", handleLogout);
    }
  }
}

logout();
