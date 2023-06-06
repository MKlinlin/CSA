const itemList = document.getElementById("item-list");
const inputItem = document.getElementById("input-item");
const addBtn = document.getElementById("add-btn");

// 定义删除函数
const deleteItem = (e) => {
if (e.target.classList.contains("delete-btn")) {
itemList.removeChild(e.target.parentNode);
}
};

addBtn.addEventListener("click", (e) => {
e.preventDefault();
if (inputItem.value !== "") {
const item = document.createElement("li");
item.className = "item";
item.innerHTML = `      
<span>${inputItem.value}</span>       
<button class="delete-btn">X</button>    `;
itemList.appendChild(item);
inputItem.value = "";
}
});

// 动态绑定监听器
itemList.addEventListener("click", deleteItem);