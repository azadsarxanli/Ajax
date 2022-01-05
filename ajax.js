window.onload = function () {
  const tbody = document.querySelector(".name tbody");
  //   console.log(tbody);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      const allData = JSON.parse(this.responseText);
      //   console.log(respText[0].title);
      allData.map(function (data) {
        tbody.innerHTML += `
          <tr>
          <td>${data.id}</td>
          <td>${data.title}</td>
          </tr>

          `;
      });
    }
  };

  xhr.send();
};
