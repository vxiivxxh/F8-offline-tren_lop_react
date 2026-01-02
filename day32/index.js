// const root = document.querySelector("#root");
// const container = ReactDOM.createRoot(root);
// const h1 = React.createElement("h1", null, "F8-Học React");
// container.Render(h1);

//React
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     "data-id": "1",
//     style: {
//       color: "red",
//       background: "yellow",
//     },
//     onClick: (e) => {
//       console.log("OK ");
//     },
//   },
//   "F8- hocj reat"
// );

// const h2 = React.createElement("h2", null, "Học React không khó");
// const element = React.createElement(React.Fragment, null, h1, h2);

//JSX=JavaScript XML
// const title = "";
// const firstClass = "first-title";
// const isLogin = true;
// const items = (
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
// );
// const element = (
//   <>
//     <h1 className={`title ${firstClass}`}>{title || "Hello F8"}</h1>
//     <h2>Học React không khó </h2>
//     {items}
//     {/* {isLogin ? (
//       <>
//         <h3>Đã đăng nhập</h3>
//         <button>Đăng xuất</button>
//       </>
//     ) : (
//       <h3>Chưa đăng nhập</h3>
//     )}
//     {isLogin && <h2>Danh sách bài hát</h2>} */}
//   </>
// );

//JSX --> Compiler --> React Element --> React DOM --> HTML
// <></>: Thẻ không tên
//eact.Fragment:
//JSX: chống xss
// 1 biến có thể chứa nhiều JSX

// const items = [
//   <h3 key={1}>Học React không khó</h3>,
//   <h3 key={2}>Học React không khó</h3>,
//   <h3 key={3}>Học React không khó</h3>,
// ];
const tasks = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
  { id: 4, title: "Task 4" },
];
const handleClick = (e) => {
  console.log("Clicked");
};

const handleRemove = (id) => {
  console.log(id);
};
const element = (
  <div id="container">
    <h1>Học React không khó</h1>
    <h2>Xin chào</h2>
    <button onClick={handleClick}>Click me</button>
    {tasks.map((task) => (
      <div key={task.id}>
        <h3>{task.title}</h3>
        <button
          onClick={() => {
            handleRemove(id);
          }}
        >
          Xoá
        </button>
      </div>
    ))}
  </div>
);
console.log(element);

//ReactDOM
const root = document.querySelector("#root");

const container = ReactDOM.createRoot(root);

container.render(element);
