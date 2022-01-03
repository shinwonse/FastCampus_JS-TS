const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
// 동기적으로 가져오겠다는 뜻
ajax.open("GET", NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  li.innerHTML = newsFeed[i].title;

  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);
