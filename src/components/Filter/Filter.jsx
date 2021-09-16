import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import action from "../../redux/action";
function Filter({ value, change }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={change}
        placeholder="Find contact..."
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  change: (e) => dispatch(action.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
