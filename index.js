let btnAdd = document.querySelector('#buttonAdd');
let btnDel = document.querySelector('#buttonDelete');
let tableShow = document.querySelector('#table-show');
let arrData = []

function addContact() {
  var fullname = document.getElementById('btn-fullname').value;
  var phone = document.getElementById('btn-phone').value;
  var address = document.getElementById('btn-address').value;

  curfullname = fullname;
  curphone = phone;
  curaddress = address;
  arrData.push({
    fullname: curfullname,
    address: curaddress,
    phone: curphone
  })
  var row = tableShow.insertRow(2);
  var cel1 = row.insertCell(0);
  var cel2 = row.insertCell(1);
  var cel3 = row.insertCell(2);


  cel1.innerHTML = curfullname;
  cel2.innerHTML = curphone;
  cel3.innerHTML = curaddress;
}

function delContact() {

  tableShow.deleteRow(1);

}
btnAdd.addEventListener('click', addContact);
btnDel.addEventListener('click', delContact);