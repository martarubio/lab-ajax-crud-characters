const charactersAPI = new APIHandler("https://minions-api.herokuapp.com");

window.addEventListener("load", () => {
  charactersAPI
    .getAllCharacters()
    .then((res) => {
      const charactersUL = apiHandler.querySelector("#charactersList");
      console.log(res);

      let charactersInfo = "";
      res.data.reverse().forEach((character) => {
        charactersInfo += (
          <div class="character-info">
            <div class="name">
              <br>Character Name</br> ${character.name}
            </div>
            <div class="occupation">
              <br>Character Occupation</br> ${character.occupation}{" "}
            </div>
            <div class="cartoon">
              <br>Is a Cartoon?</br> ${character.cartoon}{" "}
            </div>
            <div class="weapon">
              <br>Character Weapon</br> ${character.weapon}{" "}
            </div>
            <div class="id">
              <br>Character Id</br> ${character.id}{" "}
            </div>
          </div>
        );
      });

      charactersUL.innerHTML = charactersInfo;
    })
    .catch((err) => console.log(err))

    .addEventListener("click", function (event) {});

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
