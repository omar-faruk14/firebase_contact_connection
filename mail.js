const firebaseConfig = {
  apiKey: "AIzaSyDacpXTWrgAE5dI3rwohUag_QReejmK2ck",
  authDomain: "online-shop-87671.firebaseapp.com",
  databaseURL: "https://online-shop-87671-default-rtdb.firebaseio.com",
  projectId: "online-shop-87671",
  storageBucket: "online-shop-87671.appspot.com",
  messagingSenderId: "1028826049692",
  appId: "1:1028826049692:web:1ad79772b3e7c10ab45159",
  measurementId: "G-RR0MHBJ2XP"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
