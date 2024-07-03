import{g as i,a as n,p as l}from"./index-B1SfZye3.js";import{g as u,i as r,d as c}from"./defaultAuthData-Cj83w8W0.js";import{g,s as m}from"./storage-DaoGu1S_.js";const a=i.timeline({defaults:{opacity:0}});a.from(".visual",{delay:.3,y:30});a.from("h2 > span",{x:-30},"-=0.2");async function d(){if(localStorage.getItem("auth")){const{isAuth:o,user:t}=await g("auth");if(o){let s=function(){confirm("정말 로그아웃 하시겠습니까?")&&(l.authStore.clear(),m("auth",c),location.reload())};const e=`
        <div class="thumbnail">
          <img src="${u(t,"avatar")}" alt="" />
        </div>
        <div class="username">${t.name}님 반갑습니다!</div>
        <button type="button" class="logout">로그아웃</button>
      `;r(".container",e),n(".logout").addEventListener("click",s)}}}d();
