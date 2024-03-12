import microPhone from "../images/microPhone.jpeg"
import airPad from "../images/airPad.jpeg"
import appleWatch from"../images/appleWatch.jpeg"
import headPhone from "../images/headPhone.jpg"
import ipad from "../images/ipad.jpeg"
import iphone from "../images/iphone.jpeg"
import macBook from "../images/macbook.jpeg"
import mouse from "../images/mouse.jpeg"
const productList=[
    {
        id:'1',
        title:'میکروفون',
        price:699,
        image:microPhone
    },
    {
        id:'2',
        title:'ایرپادز',
        price:199,
        image:airPad
    },
    {
        id:'3',
        title:'هدفون',
        price:689,
        image:headPhone
    },
    {
        id:'4',
        title:'اپل واچ',
        price:477,
        image:appleWatch
    },
    {
        id:'5',
        title:'آیپد',
        price:419,
        image:ipad
    },
    {
        id:'6',
        title:'آیفون',
        price:987,
        image:iphone
    },
    {
        id:'7',
        title:'مک بوک',
        price:1989,
        image:macBook
    },
    {
        id:'8',
        title:'ماوس',
        price:254,
        image:mouse
    },
]
function getProductData(id){
   let productData= productList.find((item)=>item.id===id)
   return productData
}
export{getProductData,productList}