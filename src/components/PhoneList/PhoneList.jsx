// import PropTypes from "prop-types";
import s from "./PhoneList.module.css";
import action from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/selectors";
export default function PhoneList() {
  const dispatch = useDispatch();
  const list = useSelector(getList);
  const onDelete = (id) => dispatch(action.deleteItem(id));
  return (
    <ul className={s.list}>
      {list.map(({ id, name, tel }) => {
        return (
          <li key={id}>
            <p className={s.text}>{name}</p>
            <p className={s.number}>{tel}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
// PhoneList.propTypes = {
//   list: PropTypes.array,
//   onDelete: PropTypes.func,
// };

// const mapStateToProps = (state) => {
//   const { filter, items } = state.contacts;
//   // const { tel, name } = list;
//   // if (
//   //   items.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
//   // ) {
//   //   alert(`${name} is already in contacts.`);
//   // }
//   // if (items.find((contact) => contact.tel === tel)) {
//   //   alert(`${tel} is already in contacts.`);
//   // }
//   const visibleItems = getVisibleContacts(items, filter);

//   return {
//     list: visibleItems,
//   };
// };
// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (id) => dispatch(action.deleteItem(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
