import{_}from"./CvsNG_5k.js";import{_ as g,o as d,c as l,a as e,b as t,w as o,d as c,s as A,p as v,e as w,F as y,q as M,t as B,u as C,v as b,x as f,y as m,z as k}from"./BqKKfXP3.js";const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABHNCSVQICAgIfAhkiAAACD5JREFUWEeNmHdszW0Ux88taleraq/WKlVb7BkrRo1IjASRSCMi8YfEP0isxEiIkEgkiIQYb4gS0dAqgtptBbU3tWdt6r7nc17PfW9/9+Ke5P7R33ie7/M93/M951efX0MijJKSEnn37p28efNGXr16JR8+fJCvX78K18uUKSPly5eXKlWqSHx8vMTFxUm1atXseqThiwTMt2/f5NGjR3Lz5k3x+XzC32xSt25dSUpKkmPHjknfvn3lzp07UlRUJB8/fjRgRHJysjRs2FCio6P/iumPYCDt7t27cu3aNYmNjZW2bdva30+fPpUBAwYEFt+/f78MHz488Pf69eulZs2a0rJlS2MQJgHVpEkTO8zv4rdgPn/+LLm5ufLz50/p3r27VK5cWW7dumUM9erVqxT9XjCHDx+W27dv2wFiYmIMUK1atQxIt27dpFKlSmHxhAXz+vVruXDhgjRo0EBatGhhi6CVs2fPBoAFr7ZlyxY7OQz8+PFDqlatamnJy8uTRo0aGfCBAwcawHv37kn79u2lRo0aIYBCwDgggCDXLmCJ00G1N3bs2CHt2rUzwA4MQn748KEBaNWqlXTt2tVeg9mrV69Khw4dTOjBUQrMly9f5Pjx44JWWKB27dpStmxZ2+T8+fPSr18/iZo0SWTbNpHt20XGj5f379/L3r17jX4HhtTUVd2U6LsZug5phjmqDr0VFhbaHqS7YsWKATwBMNw8cuSIVQiIr1y5IoCjWp49e2YsQbkUFIjyLHo0+XLypFUPGmHDt2/fGjOxCiJFgd7bs0duvXxpaWYdWKLKOCiHoBgohKioKAMUAEMuKV1uOsXjIQW6+YsXL+xhtFCvXj1JnD5dyiiA3MWLpaRPHzl37px07NjRnqPsUw8dkmgFljN4sB2EYhg1apSl0jHB4bOzsyUxMVGaNm36P5jv379LVlaW9NGFqZrgeKkno7QRHWl4/vy5+PXZ9nPmyB1dJFsZADxVV1xcLD91rfSdOyVrwQKpqBtxHZanTp1qaQ8OmCcbpL9ChQr/MQNd0N2jR48QcZ7UVJCe+vXrB+6xwYfmzSVGaS/W0xaVK2ephZUYLf+PmsLnixaZLjBA3r1//7707NkzZP0zZ85I9erVpVmzZuJTUfmhCyBeVtj0wIEDhjz4Hptc05O31A2LR4yQf0aOtI3eqiWkTpwoD9etk2gVLO9/+vRJmitw9hgyZEhIe+A+RWPy0FL24ynBjurgoxnSN2jQoICdGyvak/K1urppZUVr2nYsWSLtFFCUCjYuJ0eerFxpPcppD79yMghneDn6Tmpqqvi0n/gpN0rTG1BMTocOHWqKhxF0QZnjR631XrKyUKBa+7p8uSQruLwZMyRK9UWTBBDi5L2DBw/aHlz3ButRHD6tBD9u2Lhx45CH2JBKGaxVQWBWCJiq4V68ekTazJmiHiCFs2dLQmamHJo1y9oAXZtfmzZt7F1O37p1a+tZ3sAc0axPH/JTlhiVNx4/fmxe4IRHV3aND0/hNKm7dkn9TZvEr/afu3ChPFN9cHp+3MfJCYRap06dUq7u9oNtWo0vMzPTj15wWm/gPbDQuXNn8yBS5WYayhxRx6uGklTg3/TUeWvWCDbhgFCu6IXIz8+3A4drJxjlIfUmn3bcSEYaefDggbkn+cfE0BObIcgO6iuFuulLTQkLc41U8Xyw3Yec1nPBp6Xrp6P+jRmcmIUBAyukCYHCwkJNDyldunSpgYEBehFpckEH59lwzMA2Ao9YM0xzMAEYxMu4wKZsOGbMGPt71apV1ttghdRiZi5Onz5t94IngRDNqHD8KNyaoCeCq4lm6MA4EQMGjzp16pQcPXpUevfuLdOmTTMwjAzBMwvv4yXhqomxgp9Ppzc//adLly4hYDA3NsFnKHG0ADOwwA9W5s6dK+PGjZPdu3dbRWzcuNGaHxs7T4nEZ8wk9ZR+8vknBybP5JXqYWHaP7q5dOmSeQ9NlOvp6ekyefJkWb16taXQfRmgoz85MMaakpIiPn3QehMUe5XvehO5RuCuPwEGAc+bN0+WLVsm169ft3mGtgGbUM5JXdBWftebqEz0aL2JumbowVnDtYQTJ06YnmgZzLUuTWiFCW+BNkw8BKfdunWrMA+vXbtWZuLMvwJ3ZQ8mO2+QWld9BobWD3K6s5cdTI95plOnTqYJFsW+mXtJVTkdHwhAkkr0l5CQILvUmXFcBAtwepR3nmFfhM03F/sGJj0+Q5g5+vfvH+i2UI6/kBI6MJRiZLC0YsUKWandmfJF3LQMtAMjfDdt2LDBehHgAIqY+e4Kbjv0KySAJxGlZmBu4gPkGx2Qa4YeNEAjJU0AnD9/vlXMSB0b2IR5BFY5PVMdINAgWiBFrMX7tBSYZL5hbTfmOqGX+jpg0EEjsMDXIKjpR5QxuqChPnnyxIakzZs3GxBOyjQ4bNiwwKcHwLAEmiNtA0ZgkIJwXweklIEuWOgh303QSqlTagzfLtgQcIDA9EaPHm0LAYZUTpgwIfAsnjN27FhJS0uT2TpawJILDoMlAJDvsOAI+0XpAPF54b6P0Y3TBunKyMgw04OdGzduyCS+p4LCfYPBpmsLjCCkhq8EL5BSmvGWHGJFC6SMkqQVsCkn46Rc37dvnw1QbDJlypTAEggWJhnSSTdVQ/oZL7yp+Ssz7gFyTClTaZwOYfI3aUIXfPLCzMWLF2WiDuIuEC7pY7C6fPmyPY/gKYY//b8mov/PQDneAgM4MaxRFQBhEzoyDsowxigBE/gGTFBFmGYkc01EYNyJqQA6uRshqBRKFAapOjyIZkrqYJJfuDkpxIZ/XfgXi0Rb4Yuc+o8AAAAASUVORK5CYII=",W={data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}}},h=r=>(v("data-v-6ae20c07"),r=r(),w(),r),j={class:"bg-white max-w-5xl sm:bg-white sm:max-w-5xl md:bg-white md:max-w-5xl lg:bg-white lg:max-w-5xl xl:bg-white xl:max-w-5xl"},L={class:"max-w-7xl mx-auto px-4"},P={class:"flex justify-between h-16"},F={class:"flex"},J=h(()=>e("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)),Y=[J],T={class:"flex-shrink-0 flex items-center"},N=h(()=>e("img",{src:I},null,-1)),S=h(()=>e("p",{class:"px-3 text-xs font-roboto text-zinc-400"},"Taiwan International Anti-Scam Association",-1)),z={class:"hidden lg:flex lg:items-center lg:justify-end lg:flex-1"},Q={class:"px-2 pt-2 pb-3 space-y-1"};function V(r,s,p,u,n,i){const a=_;return d(),l("div",null,[e("nav",j,[e("div",L,[e("div",P,[e("div",F,[e("button",{onClick:s[0]||(s[0]=(...x)=>i.toggleMenu&&i.toggleMenu(...x)),class:"text-gray-500 focus:outline-none lg:hidden"},Y)]),e("div",T,[N,e("div",null,[t(a,{to:"/",class:"px-2 font-sans-logo font-bold text-gray-800"},{default:o(()=>[c("台灣國際反詐騙協會")]),_:1}),S])]),e("div",z,[t(a,{href:"#support",class:"font-sans text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"},{default:o(()=>[c("詐騙受害人協助")]),_:1}),t(a,{href:"#expose",class:"font-sans text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"},{default:o(()=>[c("詐騙網站揭發")]),_:1}),t(a,{href:"#contact",class:"font-sans text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"},{default:o(()=>[c("聯絡我們")]),_:1})])])]),n.isMenuOpen?(d(),l("div",{key:0,class:"lg:hidden",onClick:s[1]||(s[1]=(...x)=>i.closeMenu&&i.closeMenu(...x))},[e("div",Q,[t(a,{href:"#support",class:"font-sans text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"},{default:o(()=>[c("詐騙受害人協助")]),_:1}),t(a,{href:"#expose",class:"font-sans text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"},{default:o(()=>[c("詐騙網站揭發")]),_:1}),t(a,{href:"#contact",class:"font-sans text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"},{default:o(()=>[c("聯絡我們")]),_:1})])])):A("",!0)])])}const D=g(W,[["render",V],["__scopeId","data-v-6ae20c07"]]),K={class:"bg-white"},U={class:"mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"},H={class:"flex justify-center space-x-6 md:order-2"},R=["href"],X={class:"sr-only"},Z=e("div",{class:"mt-8 md:order-1 md:mt-0"},[e("p",{class:"text-center text-xs leading-5 text-gray-500"},"© 2024 Taiwan International Anti-Scam ssociation. All rights reserved.")],-1),O={__name:"AppFooter",setup(r){const s=[{name:"Facebook",href:"https://www.facebook.com/taiwan.international.anti.scam",icon:f({render:()=>m("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[m("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})])})},{name:"Instagram",href:"https://www.instagram.com/taiwan_international_anti_scam",icon:f({render:()=>m("svg",{fill:"currentColor",viewBox:"0 0 24 24"},[m("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})])})}];return(p,u)=>(d(),l("footer",K,[e("div",U,[e("div",H,[(d(),l(y,null,M(s,n=>e("a",{key:n.name,href:n.href,class:"text-gray-400 hover:text-gray-500"},[e("span",X,B(n.name),1),(d(),C(b(n.icon),{class:"h-6 w-6","aria-hidden":"true"}))],8,R)),64))]),Z])]))}},E=O,q={};function G(r,s){const p=D,u=k,n=E;return d(),l("div",null,[t(p),t(u),t(n)])}const te=g(q,[["render",G]]);export{te as default};
