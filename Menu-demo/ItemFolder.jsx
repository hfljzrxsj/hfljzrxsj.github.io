import Item from "./Item.jsx";
import ItemButton from "./ItemButton.jsx";
export default function ItemFolder(props) {
  const [Updown, setUpdown] = React.useState(true);
  function childItemSelect(params) {
    props.childItem(params)
    props.childItemFolder(props.id)
  }
  return (<div className="item-folder component" id={props.id}>
    <div className="title">{props.id}</div>
    <div id={props.id + "title"}>
      上下：{Updown ? "展开" : "收起"}
      <br></br>
      左右：{props.LeftRight ? "收起" : "展开"}
    </div>
    <Item id={props.id + "1"} IsShow={Updown} ItemSelect={props.ItemSelect} LeftRight={props.LeftRight} childItemSelect={childItemSelect}></Item>
    <Item id={props.id + "2"} IsShow={Updown} ItemSelect={props.ItemSelect} LeftRight={props.LeftRight} childItemSelect={childItemSelect}></Item>
    <Item id={props.id + "3"} IsShow={Updown} ItemSelect={props.ItemSelect} LeftRight={props.LeftRight} childItemSelect={childItemSelect}></Item>
    <ItemButton ItemButtonClick={() => setUpdown(!Updown)}></ItemButton>
  </div>);
}