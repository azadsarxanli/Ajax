const tbody = document.querySelector(".name tbody");

window.onload = function () {
  const xhr = new XMLHttpRequest();
  //   console.log(this);
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.onload = function () {
    if (this.status === 200) {
      // !  console.log(this.responseText);
      const responseTextJson = JSON.parse(this.response);
      console.log(responseTextJson[0].address.geo);

      //todo   console.log(responseTextJson[0].title);
      responseTextJson.map((element) => {
        //?endpoint
        tbody.innerHTML += `
              <tr id=${element.id}>
              <td>${element.id}</td>
              <td>${element.name}</td>
              <td>${element.username}</td>
              <td>${element.email}</td>
              <td>${element.phone}</td>
              <td>${element.address.street}</td>
              <td>${element.address.suite}</td>
              <td>${element.address.city}</td>
              <td>${element.address.zipcode}</td>
              <td>
              <a
              href="https://www.latlong.net/c/?lat=${element.address.geo.lat}&long=${element.address.geo.lng}"
              target="_blank"
              >
              ${element.address.geo.lat}/${element.address.geo.lng}
              </a>
              </td>
              <td><button class="buttons" id=${element.id}>Del</button></td>
            </tr>
              `;
      });
      const buttons = document.querySelectorAll(".buttons");
      buttons.forEach(function (el, i) {
        el.addEventListener("click", () => {
          if (el.parentNode.parentNode.id === el.id) {
            console.log("oy leeeyy");
            el.parentNode.parentNode.remove();
          }
        });
      });
    }
  };

  xhr.send();

  /**
   * The magic is here!
   * ==================
   */
  // console.log(
  //   "%c" + "Nə eləməyə çalışırsan, ala?!",
  //   '\
  // font-size: 2em; \
  // background:  url("http://i1344.photobucket.com/albums/p642/pacman8myghosts/48straighthoursofvidya_zps7fd7c587.gif") no-repeat center center; \
  // background-size: 110% 110%; \
  // font-weight: bold; \
  // color: white; \
  // text-shadow: 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black; \
  // padding: 1% 4% 20%; \
  // border: .1em solid rgba(0,0,0,.4); \
  // border-radius: 1em; \
  // margin-left: 10%; \
  // '
  // );
  // console.log(
  //   "%c" + "bax sayta nəsə hücum eləsən, məndən incimə də sən",
  //   "\
  // font-size: 2em; \
  // background-size: 110% 110%; \
  // text-align: center; \
  // font-weight: bold; \
  // color: white; \
  // text-shadow: 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black; \
  // padding: 1% 4% 20%; \
  // margin-left: 10%; \
  // margin-top: 10%; \
  // "
  // );
  // console.log(
  //   "%c" + "dur!!!",
  //   "\
  // font-size: 2em; \
  // background-size: 110% 110%; \
  // text-align: center; \
  // font-weight: bold; \
  // color: red; \
  // padding: 1% 4% 20%; \
  // margin-left: 10%; \
  // margin-top: 10%; \
  // "
  // );
};
