import "./style.css";

interface ICheckboxText {
  text: string;
}

const Checkbox = (props: ICheckboxText) => (
  <div className="rule-checkbox">
    <input type="checkbox" className="custom-checkbox" id={props.text} />
    <label htmlFor={props.text} className="checkbox-text">
      {props.text}
    </label>
  </div>
);

export default Checkbox;
