import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  console.log(inputText);
};
/*
document //html要素全てを取得する
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
  */
