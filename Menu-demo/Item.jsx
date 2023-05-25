export default function Item(props) {
  function handleChange() {
    props.childItemSelect(props.id)
  }
  return (
    <div
      onClick={handleChange}
      className="item component"
      style={{ backgroundColor: props.ItemSelect == props.id ? "lightblue" : "white", display: (props.IsShow || props.ItemSelect == props.id) ? "block" : "none" }}
      id={props.id}
    >
      <div id={props.id + "title"}>
        {(props.IsShow || props.ItemSelect == props.id) ? "显示" : "隐藏"}
        <br></br>
        左右：{props.LeftRight ? "收起" : "展开"}
      </div>
      <div>{props.id}</div>
    </div>
  );
}