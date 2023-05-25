//展开是true，收起是false
//显示是true，隐藏是false
// import Menu from "./Menu.jsx";
// import ItemMenuButton from "./ItemMenuButton.jsx";
function ItemButton(props) {
  return (
    <button onClick={props.ItemButtonClick}>上下展开/收起</button>
  )
}
function ItemMenuButton(props) {
  return (
    <button onClick={props.ItemMenuButtonClick}>左右展开/收起</button>
  )
}
function Menu() {
  const [ItemFolderSelect, setItemFolderSelect] = React.useState("a");
  const [ItemSelect, setItemSelect] = React.useState("a1");
  const [LeftRight, setLeftRight] = React.useState(true);
  function childItemSelect(params) {
    setItemSelect(params);
  }
  function childItemFolderSelect(params) {
    setItemFolderSelect(params);
  }
  return (
    <div id="root" style={{ width: LeftRight ? "20%" : "80%" }}>
      <ItemMenuButton ItemMenuButtonClick={() => setLeftRight(!LeftRight)}></ItemMenuButton>
      <div><span style={{ color: "red" }}>{ItemFolderSelect}</span>要滚动到最上面咯</div>
      <div id="title">
        左右：{LeftRight ? "收起" : "展开"}
      </div>
      <ItemFolder id="a" ItemSelect={ItemSelect} LeftRight={LeftRight} childItem={childItemSelect} childItemFolder={childItemFolderSelect}>
      </ItemFolder>
      <ItemFolder id="b" ItemSelect={ItemSelect} LeftRight={LeftRight} childItem={childItemSelect} childItemFolder={childItemFolderSelect}>
      </ItemFolder>
      <ItemFolder id="c" ItemSelect={ItemSelect} LeftRight={LeftRight} childItem={childItemSelect} childItemFolder={childItemFolderSelect}>
      </ItemFolder>
    </div>
  );
}

function ItemFolder(props) {
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

function Item(props) {
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
ReactDOM.render(
  <Menu />,
  document.body
);

