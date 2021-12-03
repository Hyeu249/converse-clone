import { v4 as uuidv4 } from "uuid";

const alotOfShoes = [
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwf48348bc/images/e_08/M7652_E_08X1.jpg?sw=406",
    backImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwf1702069/images/d_08/M7652_D_08X1.jpg?sw=406",
    productName: "Chuck Taylor All Star",
    price: 60,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 13,
    color: "Optical White",
    size: "Men's 4.5 / Women's 6.5",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw48a63495/images/e_08/170554C_E_08X1.jpg?sw=406",
    backImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw04de31e2/images/d_08/170554C_D_08X1.jpg?sw=406",
    productName: "Converse Color Vintage Canvas Chuck 70",
    price: 80,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 7,
    color: "Dark Root/Black/Egret",
    size: "Men's 7 / Women's 9",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwc30f8346/images/e_08/M9696_E_08X1.jpg?sw=406",
    backImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw540ffa1e/images/d_08/M9696_D_08X1.jpg?sw=406",
    productName: "Chuck Taylor All Star",
    price: 65,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 8,
    color: "Red",
    size: "Men's 7 / Women's 7",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw1e4c4aea/images/e_08/159574C_E_08X1.jpg?sw=406",
    backImage:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwb92ecee7/images/d_08/159574C_D_08X1.jpg?sw=406",
    productName: "CONS CTAS Pro",
    price: 75,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 15,
    color: "Black",
    size: "Men's 8.5",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70SherpaHiHO21_v6?obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=e1b05b&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g1&color=BE7B58&show&obj=/s/g2&color=221e1f&show&obj=/s/g3&color=CDBAA2&show&obj=/s/g15&color=F9F1DF&show&obj=/s/g16&color=CDBAA2&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=BE7B58&show&obj=/s/g11/leather&color=221e1f&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    backImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70SherpaHiHO21_v3?obj=/s/g7&color=F9F1DF&show&obj=/s/g9&color=F9F1DF&show&obj=/s/g10&color=e1b05b&show&obj=/s/g12&color=F9F1DF&show&obj=/s/g17&color=F9F1DF&show&obj=/s/g13&color=151416&show&obj=/s/g14&color=151416&show&obj=/s/g1&color=BE7B58&show&obj=/s/g2&color=221e1f&show&obj=/s/g3&color=CDBAA2&show&obj=/s/g15&color=F9F1DF&show&obj=/s/g16&color=CDBAA2&show&obj=/s/g21&color=151416&show&obj=/s/g8&color=BE7B58&show&obj=/s/g11/leather&color=221e1f&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    productName: "Custom Sherpa Chuck 70 By You",
    price: 110,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 4,
    color: "Ginger",
    size: "Men's 10.5",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70CelticsHO21_v6?obj=/s/g1/luckyT&show&obj=/s/g2/cigarM&show&obj=/s/g3/winningB&show&obj=/s/g4&color=F4F6EF&show&obj=/s/g6&color=F4F6EF&show&obj=/s/g8&color=151416&show&obj=/s/g10&color=151416&show&obj=/s/g11/shiny&color=e1b05b&show&obj=/s/g12&color=F4F6EF&show&obj=/s/g14&color=151416&show&obj=/s/g15&color=151416&show&obj=/s/g16&color=634437&show&obj=/s/g9&color=F4F6EF&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    backImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70CelticsHO21_v3?obj=/s/g1/luckyT&show&obj=/s/g2/cigarM&show&obj=/s/g3/winningB&show&obj=/s/g4&color=F4F6EF&show&obj=/s/g6&color=F4F6EF&show&obj=/s/g8&color=151416&show&obj=/s/g10&color=151416&show&obj=/s/g11/shiny&color=e1b05b&show&obj=/s/g12&color=F4F6EF&show&obj=/s/g14&color=151416&show&obj=/s/g15&color=151416&show&obj=/s/g16&color=634437&show&obj=/s/g9&color=F4F6EF&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    productName: "Custom NBA City Edition Boston Celtics Chuck 70 By You",
    price: 115,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 1,
    color: "White-Gray-Green",
    size: "Men's 10.5",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70LakersHO21_v6?obj=/s/g1/dynastyT&show&obj=/s/g2/earlydomM&show&obj=/s/g3/firstB&show&obj=/s/g4&color=F4F6EF&show&obj=/s/g7/firstH&show&obj=/s/g8&color=151416&show&obj=/s/g10&color=F4F6EF&show&obj=/s/g11/shiny&color=e1b05b&show&obj=/s/g12&color=F4F6EF&show&obj=/s/g14&color=F4F6EF&show&obj=/s/g15&color=F4F6EF&show&obj=/s/g16&color=634437&show&obj=/s/g9&color=F4F6EF&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    backImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70LakersHO21_v3?obj=/s/g1/dynastyT&show&obj=/s/g2/earlydomM&show&obj=/s/g3/firstB&show&obj=/s/g4&color=F4F6EF&show&obj=/s/g7/firstH&show&obj=/s/g8&color=151416&show&obj=/s/g10&color=F4F6EF&show&obj=/s/g11/shiny&color=e1b05b&show&obj=/s/g12&color=F4F6EF&show&obj=/s/g14&color=F4F6EF&show&obj=/s/g15&color=F4F6EF&show&obj=/s/g16&color=634437&show&obj=/s/g9&color=F4F6EF&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    productName: "Custom NBA City Edition Los Angeles Lakers Chuck 70 By You",
    price: 115,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 1,
    color: "Orange-Magenta-Violet",
    size: "Men's 10.5",
  },
  {
    id: uuidv4().replace(/-/g, ""),
    frontImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70WarriorsHO21_v6?obj=/s/g1/1946T&show&obj=/s/g2/webelieveM&show&obj=/s/g3/webelieveB&show&obj=/s/g5/1946Tong&show&obj=/s/g7/webelieveH&show&obj=/s/g8&color=151416&show&obj=/s/g10&color=151416&show&obj=/s/g11/shiny&color=e1b05b&show&obj=/s/g12&color=F4F6EF&show&obj=/s/g14&color=151416&show&obj=/s/g15&color=151416&show&obj=/s/g16&color=634437&show&obj=/s/g9&color=151416&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    backImage:
      "https://secure-render.nike.com/ir/render/nikeidrender/CT70WarriorsHO21_v3?obj=/s/g1/1946T&show&obj=/s/g2/webelieveM&show&obj=/s/g3/webelieveB&show&obj=/s/g5/1946Tong&show&obj=/s/g7/webelieveH&show&obj=/s/g8&color=151416&show&obj=/s/g10&color=151416&show&obj=/s/g11/shiny&color=e1b05b&show&obj=/s/g12&color=F4F6EF&show&obj=/s/g14&color=151416&show&obj=/s/g15&color=151416&show&obj=/s/g16&color=634437&show&obj=/s/g9&color=151416&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&wid=406",
    productName:
      "Custom NBA City Edition Golden State Warriors Chuck 70 By You",
    price: 120,
    productGender: "UNISEX LOW TOP SHOE",
    colorAvailable: 1,
    color: "Dark Blue-Black",
    size: "Men's 9.5",
  },
];

export default alotOfShoes;
