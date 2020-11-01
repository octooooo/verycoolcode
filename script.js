let smart = ['dum', 'big brain', 'stupid', 'study kid', 'owo', 'brain size mega']

function tellSmart(){
  let yourMicrowave=
document.querySelector('input').value;
  console.log(yourMicrowave)

let pick = smart[Math.floor(Math.random()*smart.length)]
let howSmart = document.querySelector('.smart');
howSmart.textContent = yourMicrowave + ' sized microwave is ' + pick
}
