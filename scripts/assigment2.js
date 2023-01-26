/*function addStudent(){
    let userName = prompt("Enter student name: ");
    let fsdi101 = Number(prompt("Enter the FSDI 101 grade: "));
    let fsdi102 = Number(prompt("Enter the FSDI 102 grade: "));
    
   // let gpa = (fsdi101+fsdi102)/2;

    document.getElementById("text").innerHTML+=`
    <h5>Welcome ${userName}</h5>
    <p>Name: ${userName}</p>
    <p>GPA: ${(fsdi101+fsdi102)/2}</p>
`;
}*/


function addProduct(){
    let productName = prompt("Enter product name: ");
    let productPrice = Number(prompt("Enter product price per unit: "));
    let poductQty = Number(prompt("Enter the qty: "));
    const taxes =0.6;
    let productTaxes = poductQty*taxes;
    
   // let gpa = (fsdi101+fsdi102)/2;

    document.getElementById("container").innerHTML+=`
    <h5>You are buying: <span Class="blueColor"> ${productName}</span></h5>
    <p>Unitary price = <span Class="text">$${productPrice}</span></p>
    <p>Subtotal $${productPrice} x ${poductQty} ${productName}  <span Class="text">= $${productPrice * poductQty}</span></p>
    <p>Total (plus 6% tax) = <span Class="total">$${poductQty*productTaxes}</span></p>
`;
}