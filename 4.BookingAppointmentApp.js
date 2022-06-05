var form = document.getElementById("formData");
var usersList = document.getElementById("details");
var Name = document.getElementById("name");
var Password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (Name.value === "" || Password.value === "") {
    alert("Please enter name and password");
  }
  axios({
    method: "post",
    url: "https://crudcrud.com/api/499ff1390b524e98b4abc99758fad9da/appointmentApp",
    data: {
      Name: Name.value,
      Password: Password.value,
    },
  })
    .then((res) => displayUsers(res))
    .catch((err) => console.log(err));
  Name.value = "";
  Password.value = "";
  
});

const displayUsers = async () => {
  usersList.innerHTML = "";
  const data = axios.get(
    "https://crudcrud.com/api/499ff1390b524e98b4abc99758fad9da/appointmentApp"
  );
  let data1 = await data;
  data1 = data1.data;
  data1.forEach((r) => {
    let list = document.createElement("li");
    list.innerHTML = `${r.Name} , ${r.Password} <button class='delete-btn' onClick='deleteUser(${r._id})' >X</button>`;
    usersList.appendChild(list);
  });

};

displayUsers();

function deleteUser(id) {
  axios({
    method: "delete",
    url: `https://crudcrud.com/api/e7bd2dc56e0b4f1f83eade001ff159c7/appointmentApp/${id}`,
  })
    .then(displayUsers)
    .catch((err) => console.log(err));
}

