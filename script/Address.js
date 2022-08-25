const api = "baa3b5744b47113da352b243b812e26e";
let getData = () => {
  let city = document.getElementById("incity").value;
  app();
  display(city);
};

function app() {
  let c = document.getElementById("container");
  c.innerHTML = null;
  let p1 = document.createElement("h3");
  p1.innerText = `DELIVERY LOCATION :`;
  p1.className = "you";
  c.append(p1);
}
function app1() {
  let c = document.getElementById("container");
  c.innerHTML = null;
  let p1 = document.createElement("h3");
  p1.innerText = `YOUR CURRENT LOCATION :`;
  p1.className = "you";
  c.append(p1);
}
function display(city) {
  let c = document.getElementById("container1");
  var xx = document.getElementById("gmap_canvas");
  xx.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  c.append(xx);
}
let getCoordintes = () => {
  navigator.geolocation.getCurrentPosition(success);
  function success(pos) {
    const crd = pos.coords;
    let lat = crd.latitude.toString();
    let lng = crd.longitude.toString();
    getCity(lat, lng);
  }
};
app1();
getCoordintes();
function getCity(lat, lng) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://us1.locationiq.com/v1/reverse.php?key=pk.47a11aa73f2ea1e0f6666b1fd369dd1b&lat=${lat}&lon=${lng}&format=json`
  );
  xhr.send();
  xhr.onreadystatechange = processRequest;
  xhr.addEventListener("readystatechange", processRequest, false);
  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let city = response.address.city;
      display(city);
    }
  }
}
let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
document.getElementById("continue").addEventListener("click", contin);
function contin() {
  let name = document.getElementById("name1").value;
  let mno = document.getElementById("m_no").value;
  let email = document.getElementById("email").value;
  let place = document.getElementById("place").value;
  let flat = document.getElementById("flat").value;
  let street = document.getElementById("Street").value;
  let neighour = document.getElementById("Neigh").value;
  let pin = document.getElementById("Pin").value;
  let city = document.getElementById("incity").value;
  let state = document.getElementById("state").value;
  let landmark = document.getElementById("landmark").value;

  let data = {
    Name: name,
    Mobile: mno,
    Email: email,
    Place: place,
    Flat: flat,
    Street: street,
    Neighbour: neighour,
    Pin: pin,
    City: city,
    State: state,
    Landmark: landmark,
  };
  
  let value = document.getElementById("check");
  if(value.checked)
  {
    let data1 = [];
    data1.push(data);
    localStorage.setItem("Defaultaddress", JSON.stringify(data1));
  }
  else
  {
    let data1 = JSON.parse(localStorage.getItem("address")) || [];
    data1.push(data);
    localStorage.setItem("address", JSON.stringify(data1));
  }
  alert("YOUR ADDRESS HAS BEEN SAVED");

  window.location.href = "./checkout.html";

  document.getElementById("name1").value = null;
  document.getElementById("m_no").value = null;
  document.getElementById("email").value = null;
  document.getElementById("place").value = null;
  document.getElementById("flat").value = null;
  document.getElementById("Street").value = null;
  document.getElementById("Neigh").value = null;
  document.getElementById("Pin").value = null;
  document.getElementById("incity").value = null;
  document.getElementById("state").value = null;
  document.getElementById("landmark").value = null;
}
document.getElementById("back").addEventListener("click" , back);
function back(){
  window.location.href = "./"
}