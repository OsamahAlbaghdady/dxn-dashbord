const stats = {
  totalOrder: 0,
  PerDayOrder: 0,
  costmary: {
    num: 0,
    isUp: true,
  },
  inCame: {
    num: 0,
    isUp: false,
  },
  rate: {
    rate: 0,
    totalRatting: 0,
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0,
    average: 0,
  },
};
const orders = [
  {
    id: 1,
    name: "1",
    price: "2",
    status: 0,// 0 = new / 1 = accepted / 2 = competed / 3 = rejected
    date: "2",
    phoneNumber: "2",
    address: "2",
    image:""
  },
];
const order = {
    id:0,
    totalPrice:0,
    totalDiscount:0,
    finalPrice:0,
    states:0,
    user:{
        name:"",
        location:"",
        id:0,
        phoneNumber:"",
        image:"https://i.ebayimg.com/images/g/~R8AAOSwTOFkd34K/s-l1200.webp"
    },
    driver:{
        name:"",
        id:0,
        phoneNumber:"",
        image:"https://i.ebayimg.com/images/g/~R8AAOSwTOFkd34K/s-l1200.webp"
    },
    foods:[
        {
            name:'',
            desc:'',
            image:"https://i.ebayimg.com/images/g/~R8AAOSwTOFkd34K/s-l1200.webp",
            quantity:0,
            item_price:0,
            total_price:0
        }
    ],
    totalPrice:0,
    finalPrice:0
}
export {stats,orders,order}