import { v4 as uuidv4 } from "uuid";
import "./index.css";
// import { useState, useEffect } from "react";
import PhoneList from "./components/PhoneList/PhoneList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem("contacts")) ?? [],
  // );

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const handleContactAdd = ({ name, tel }) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     tel,
  //   };

  //   if (
  //     contacts.find(
  //       (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts.`);
  //   } else if (contacts.find((contact) => contact.tel === tel)) {
  //     alert(`${tel} is already in contacts.`);
  //   } else {
  //     setContacts((prevContacts) => [...prevContacts, contact]);
  //   }
  // };;
  return (
    <div className="container">
      <h1>PhoneBooks</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <PhoneList />
    </div>
  );
}
export default App;
