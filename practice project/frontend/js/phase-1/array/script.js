// Create an array of student names and print each
let arr = ["afnan","bhate","affan"];
console.log(arr);
let arr2=arr[2];
console.log(arr2);

// Filter even numbers from an array

let arr1 = [1,2,3,4,5,6];
let ans = arr1.filter((val)=>{
    return val % 2 ===0;
});
console.log(arr1);
console.log(ans);

// Map prices to include GST (18%)

let arr3 = [1,2,3,4,5,6];
let ans1 = arr3.map((val)=>{
    return val * 1.18 ;
});
console.log(arr3);
console.log(ans1);


// Find the first student with grade A

let arr4 = ["a","b","c"];
let ans2 = arr4.find((val)=>{
    return val === "a";
});
console.log(arr4);
console.log(ans2);

// Reduce salaries to calculate total payroll

let sal = [12000,15000,20000];
let total = sal.reduce((acc,val)=>{
    return acc + val;
},0);
console.log(sal);
console.log(total);

// Write a function to reverse an array

let a =[1,2,3,4,5];
console.log(a);

let rev =a.reverse();
console.log(rev);


// Sort array of ages in ascending order

let age =[10,26,5,27];
console.log(age);
let sort1= age.sort((a,b)=>{
    return a - b;
})


console.log(sort1);

// Destructure first two elements of an array

let ndest = [1,2,3,4];
let [a1,b1] = ndest;
 console.log(ndest);
console.log(a1,b1);

// Use some() to check if any student failed

let marks = [20,40,30,50,90];
let check = marks.some((val)=>{
    return val < 30;
})
 console.log(marks);
console.log(check);

// Use spread to copy and add new item

let array = [1,3,4,2];
let copy = [...array];

 console.log(array);
console.log(copy);

//add 2 in every values in array using foreach

let arrs = [1,2,3,4,5];
arrs.forEach(val=>{
    console.log(val+2);
});

console.log(arrs);


// cart total
// let cardtotal = 0;
// let object = {
//     key1 : 123,
//     key2 : 456
// };

// function abcd(cardtotal,appliedcoupen){
//     appliedcoupen.forEach(coupen=>{
//         if(object[coupen]){
//             let card = cardtotal + coupen;
            
//             console.log(card);
//         }
//         });

// }
// abcd();







const TAX_RATE = 0.18;       // 18% tax rate (fixed)
const SHIPPING = 50;         // default shipping charge (fixed)

let cartTotal = 0;           // cart ka current total

// Available coupons with their discount %
const coupons = {
  NEW10: 0.10,               // 10% off
  FESTIVE20: 0.20            // 20% off
};

function addItem(price) {    // cart me item add karne ka helper
  cartTotal += price;        // price ko total me jod do
}

// Multiple coupons apply karne wala helper
function applyCoupons(cartTotal, appliedCoupons) {
  let total = cartTotal;     // local total (yahin par discounts lagenge)
  appliedCoupons.forEach(coupon => {     // har coupon ko check/apply karo
    if (coupons[coupon]) {               // agar valid hai
      let discount = total * coupons[coupon]; // current total ka X% nikaalo
      total -= discount;                 // discount minus karo
      console.log(`Applied ${coupon}: -${discount}`);
    }
  });
  return total;              // discounts ke baad ka total
}

// ---- Shopping Flow ----
addItem(800);   // Bag
addItem(500);   // Shoes

console.log("Cart Total:", cartTotal);

// 1) Coupons
let afterCoupons = applyCoupons(cartTotal, ["NEW10", "FESTIVE20"]);
console.log("After Coupons:", afterCoupons);

// 2) Tax
let afterTax = afterCoupons + afterCoupons * TAX_RATE;
console.log("After Tax:", afterTax);

// 3) Shipping: NOTE -> yahan rule 'original cartTotal' par laga hai
let shippingCharge = cartTotal > 1000 ? 0 : SHIPPING;
let finalTotal = afterTax + shippingCharge;

console.log("Shipping:", shippingCharge);
console.log("Final Total (Payable):", finalTotal);


