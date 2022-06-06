var form = document.getElementById("formData");
var usersList = document.getElementById("details");
var Name = document.getElementById("name");
var Password = document.getElementById("password");

urlLink = "dacc372062954b8ab21dd617ae669013";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (Name.value === "" || Password.value === "") {
    alert("Please enter name and password");
  } else {

    axios({
      method: "post",
      url: `https://crudcrud.com/api/${urlLink}/appointmentApp`,
      data: {
        Name: Name.value,
        Password: Password.value,
      },
    })
      .then(() => displayUsers)
      .catch((err) => console.log(err));
    Name.value = "";
    Password.value = "";
    displayUsers();
  }
});

const displayUsers = async () => {
  usersList.innerHTML = "";
  const data = axios.get(`https://crudcrud.com/api/${urlLink}/appointmentApp`);
  let data1 = await data;
  data1 = data1.data;
  console.log(data1);
  data1.forEach((r) => {
    let list = document.createElement("li");
    console.log(r._id);
    list.innerHTML = `${r.Name} , ${r.Password} <button class="delete-btn" onClick="deleteUser('${r._id}')">Delete</button> <button class="edit-btn" onClick="editUser('${r._id}','${r.Name}','${r.Password}')">Edit</button>`;
    usersList.appendChild(list);
    console.log(list);
  });
};
displayUsers();

const deleteUser = (id) => {
  console.log("delete");
  axios({
    method: "delete",
    url: `https://crudcrud.com/api/${urlLink}/appointmentApp/${id}`,
  })
    .then(displayUsers)
    .catch((err) => console.log(err));
};

function editUser(id, name, password) {
  console.log("edit");
  Name.value = name;
  Password.value = password;

  axios({
    method: "delete",
    url: `https://crudcrud.com/api/${urlLink}/appointmentApp/${id}`,
  })
    .then(displayUsers)
    .catch((err) => console.log(err));
}
