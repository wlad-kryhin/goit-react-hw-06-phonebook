import "./index.css";
import PhoneList from "./components/PhoneList/PhoneList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

function App() {
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
