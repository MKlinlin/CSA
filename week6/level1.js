const itemList = document.getElementById("item-list");
const inputItem = document.getElementById("input-item");
const addBtn = document.getElementById("add-btn");

// 定义删除函数
const deleteItem = (e) => {
  itemList.removeChild(e.target.parentNode);//获取删除按钮的父节点：li元素，再实现删除
};

addBtn.addEventListener("click", () => {
  if (inputItem.value !== "") {
    const item = document.createElement("li");
    item.className = "item";
    item.innerHTML = `
      <span>${inputItem.value}</span>
      <button class="delete-btn">删除</button>
    `;
    itemList.appendChild(item);
    inputItem.value = "";

    // 动态绑定监听器
    const deleteBtns = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", deleteItem);
    }
  }
});
