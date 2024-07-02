import "@/pages/product/product.css";
import { tiger, insertLast, comma, setDocumentTitle } from "kind-tiger";
import getPbImageURL from "@/api/getPbImageURL";
import gsap from "gsap";

// console.log(import.meta.env.VITE_PB_API);

setDocumentTitle("29CM / 상품목록");

async function renderProductItem() {
  const response = await tiger.get(
    `${import.meta.env.VITE_PB_API}/collections/products/records`,
  );

  const productsData = response.data.items;

  productsData.forEach((item) => {
    const discount = item.price * (item.ratio * 0.01);

    const template = `
        <li class="product-item">
          <div>
            <figure>
              <img src="${getPbImageURL(item)}" alt="" />
            </figure>
            <span class="brand">${item.brand}</span>
            <span class="desc">${item.description}</span>
            <span class="price">${comma(item.price)}원</span>
            <div>
              <span class="discount">${item.ratio}%</span>
              <span class="real-price">${comma(item.price - discount)}원</span>
            </div>
          </div>
        </li>
  `;

    insertLast(".container > ul", template);
  });

  gsap.from(".product-item", { y: 30, opacity: 0, stagger: 0.1 });
}

renderProductItem();
