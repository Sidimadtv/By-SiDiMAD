var longUrl = document.getElementById("longUrl");
const cut = document.getElementById("cut");
const btn = document.getElementById("btn");
const apiKey = "ff6e019332372e9320ab30c0461ac9f92276eff7";

function shortThat() {
  const info = { long_url: longUrl.value };
  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      document.getElementById("shortUrl").value = json.link;
    });
}

btn.addEventListener("click", shortThat);
document.querySelector("#longUrl").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    shortThat();
  }
});

function copyThat() {
  var copyUrl = document.getElementById("shortUrl");
  copyUrl.select();
  copyUrl.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Short Url copied");
}

cut.addEventListener("click", copyThat);
