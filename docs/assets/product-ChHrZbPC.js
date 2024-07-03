import{p as e,g as i}from"./index-B1SfZye3.js";import{d as n,g as p,i as d}from"./defaultAuthData-Cj83w8W0.js";import{s as l,g}from"./storage-DaoGu1S_.js";import{s as u}from"./setDocumentTitle-CYsy-ZvK.js";function t(s){return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}u("29CM / 상품목록");localStorage.getItem("auth")||l("auth",n);async function f(){const s=await e.collection("products").getFullList({sort:"-created"}),{isAuth:r}=await g("auth");s.forEach(a=>{const c=a.price*(a.ratio*.01),o=`
        <li class="product-item">
          <div>
            <figure>
              <a href="${r?`/src/pages/detail/index.html?product=${a.id}`:"/src/pages/login/"}"></a>
              <img src="${p(a)}" alt="" />
            </figure>
            <span class="brand">${a.brand}</span>
            <span class="desc">${a.description}</span>
            <span class="price">${t(a.price)}원</span>
            <div>
              <span class="discount">${a.ratio}%</span>
              <span class="real-price">${t(a.price-c)}원</span>
            </div>
          </div>
        </li>
  `;d(".container > ul",o)}),i.from(".product-item",{y:30,opacity:0,stagger:.1})}f();
