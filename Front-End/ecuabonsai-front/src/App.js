import logo from "./logo.svg";
import "./App.css";
import {Login} from "./Components/Login.js/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import {Update} from "./Components/UpdateForm/UpdateForm"
function App() {
  return (
    <div className="App">
      <header className="headerLogin">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </header>
      <body>
        <Navbar/>
        <Update/>
      </body>
    </div>
  );
}

export default App;
