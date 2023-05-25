//展开是true，收起是false
//显示是true，隐藏是false
import ItemFolder from "./ItemFolder.jsx";
import ItemMenuButton from "./ItemMenuButton.jsx";
export default function Menu() {
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