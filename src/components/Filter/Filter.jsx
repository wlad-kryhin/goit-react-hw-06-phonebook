// import PropTypes from "prop-types";
import s from "./Filter.module.css";
import action from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { getFilterValue } from "../../redux/selectors";
export default function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(action.changeFilter(e.target.value))}
        placeholder="Find contact..."
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });
// const mapDispatchToProps = (dispatch) => ({
//   change: (e) => dispatch(action.changeFilter(e.target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
