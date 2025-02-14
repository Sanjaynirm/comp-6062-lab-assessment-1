const studentFullName='SanjayNirmal';
const studentNumber = 1191752;
const result=`${studentFullName}-${studentNumber}`;
console.log(result);
let headerContent = document.querySelector("h1");
headerContent.innerHTML=result;
headerContent.classList.add("headingPrimary");
