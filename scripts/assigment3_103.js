function calculate(){

    let num1 = Number(prompt("Enter number 1: "));
    let num2 = Number(prompt("Enter number 2: "));

    document.getElementById("operationResult").innerHTML+=`
    <ul>
        <li> ${num1} <span> + </span> ${num2} <span> = </span> ${num1+num2} </li>
        <li> ${num1} <span> - </span> ${num2} <span> = </span> ${num1-num2} </li>
        <li> ${num1} <span> * </span> ${num2} <span> = </span> ${num1*num2} </li>
        <li> ${num1} <span> / </span> ${num2} <span> = </span> ${num1/num2} </li>
    </ul>
    `;
}