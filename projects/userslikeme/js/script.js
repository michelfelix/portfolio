var currentUser

function getInfoUser() {
  fetch("https://randomuser.me/api/")
    .then((resp) => resp.json())
    .then(function (data) {
      let user = data.results;
      currentUser = user;
      var backgroundImage = document.getElementById("photoBackground");
      return user.map((user) => {
        var userFirstName = user.name.first;
        var userLastName = user.name.last;
        var userLocationCity = user.location.city;
        var userLocationCountry = user.location.country;
        var userPhotoPicture = user.picture.large;
        var userBornAt = user.location.country;
        var userAge = user.dob.age;
        var userEmail = user.email;
        var userCellPhone = user.cell;

        document.getElementById("userName").innerHTML = [
          userFirstName,
          userLastName,
        ].join(" ");

        document.getElementById("country").innerHTML = [
          userLocationCity,
          userLocationCountry,
        ].join(", ");

        document.getElementById(
          "photoPicture"
        ).innerHTML = `<img class="user-photo" src="${userPhotoPicture}">`;

        backgroundImage.style.backgroundImage = `URL(${userPhotoPicture})`;

        document.getElementById("bornAt").innerHTML = `born at: ${userBornAt}`;

        document.getElementById("age").innerHTML = `Age: ${userAge} years old`;

        document.getElementById("email").innerHTML = `email: ${userEmail}`;

        document.getElementById("phone").innerHTML = `Phone1: ${userCellPhone}`;
      });
    });
}

function store(key, data) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify([data]));
  }
  else {
    localStorage.setItem(key, JSON.stringify([ ...JSON.parse(localStorage.getItem(key)), data ]))
  }
}

function followUser() {
  store("users", currentUser)
}