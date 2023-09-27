let keySearch = "Nizhny Novgorod";
let perPage = 12;

//c-pyLMHmHbLDMvbGqKLj-z4rfkORfC5gkRvCvFPNzW4
//SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo

async function getData(keySearch, perPage) {
  const url = `https://api.unsplash.com/search/photos?query=${keySearch}&client_id=c-pyLMHmHbLDMvbGqKLj-z4rfkORfC5gkRvCvFPNzW4&per_page=${perPage}`;
  const res = await fetch(url);
  console.log("dssdsdsd", url.status);
  const data = await res.json();
  //console.log('keySearch: ', keySearch);
  // console.log('res: ', res);
  //console.log(res.status);
  //console.log('data: ', data);
  //console.log('urls: ', data.results[0].urls.regular);
  //console.log('dlina: ', data.results.length)
  document.querySelector(".image-container").innerHTML = "";
  showData(data);
}

getData(keySearch, perPage);

function showData(data) {
  const imageDiv = document.querySelector(".image-container");

  for (let i = 0; i < data.results.length; i++) {
    let img = document.createElement("img");
    img.classList.add("gallery-img");
    img.src = `${data.results[i].urls.regular}`;
    img.alt = `${data.results[i].alt_description}`;
    imageDiv.append(img);
    //console.log(i, data.results[i].alt_description);
  }
}

const formElement = document.getElementById("search");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const request = formData.get("text");
  // console.log(request);
  let keySearch = request;
  getData(keySearch, perPage);
});

//document.getElementById("text").focus();

document.getElementById("clearButton").onclick = function (e) {
  e.preventDefault();
  document.getElementById("text").value = "";
};
