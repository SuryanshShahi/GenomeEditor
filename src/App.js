import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Data } from "./Data";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  useEffect(() => {
    document.getElementById("all").click();
    document.title = "GENOMEditor";
  }, []);
  const setValue = (data, data1) => {
    setMode(data);
    setText(data1);
  };
  return (
    <div className="App">
      <nav>
        <div
          className="align-items-center d-flex px-lg-5 px-md-5 px-2"
          style={{ height: "80px", backgroundColor: "rgb(19 23 64 / 91%)" }}
        >
          <div className="text-white">
            <div>
              <div style={{ fontSize: "2rem", fontFamily: "cursive" }}>
                GENOMEditor{" "}
              </div>
            </div>
            <div>
              <div className="text-white" style={{ fontSize: "0.9rem" }}>
                Designing TALEN/CRISPR constructs
              </div>
            </div>
          </div>
          <div className="" style={{ marginLeft: "auto" }}>
            <img
              src="http://talenandcrispr.pythonanywhere.com/static/fulllogogbu.png"
              className="img-fluid pl-4"
              alt="logo"
              style={{ height: "60px" }}
            />
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ fontSize: "17px", fontWeight: 500 }}
            href="http://talenandcrispr.pythonanywhere.com/"
          >
            Back to website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-lg-0 mt-3">
              <li className="nav-item dropdown position-relative">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu position-absolute"
                  style={{ left: "-64px" }}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      id="all"
                      onClick={() => setValue(Data[0].All, "All Tools")}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setValue(Data[0]["For Plants"], "For Plants")
                      }
                    >
                      For Plants
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setValue(Data[0]["For Animals"], "For Animals")
                      }
                    >
                      For Animals
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setValue(
                          Data[0]["Microbes and Flies"],
                          "Microbes and Flies"
                        )
                      }
                    >
                      Microbes and Flies
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setValue(Data[0]["Post Anlaysis"], "Post Anlaysis")
                      }
                    >
                      Post Anlaysis
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-4 mb-5">
        <div>
          <div
            className="text-center mb-4"
            style={{
              fontWeight: "500",
              fontSize: "30px",
              fontFamily: "sans-serif",
            }}
          >
            {text}
          </div>
          <div className="ml-lg-5 ml-md-5 ml-sm-5 ml-2">
            Total <span style={{ fontWeight: "500" }}>{mode?.length}</span>{" "}
            results
          </div>

          <div
            className="overflow-auto mx-auto table1"
            style={{
              height: "95vh",
              width: "calc(100% - 100px)",
              boxShadow: "1px 1px 2px 0px #c0c0c0bd",
            }}
          >
            <table className="bg-white">
              <tr className="text-white position-sticky" style={{ top: 0 }}>
                <th>Tools</th>
                <th>Availability</th>
                <th>Purpose</th>
                <th>Platform</th>
                <th>Off‑targets</th>
                <th>Score Oligos</th>
                <th>Search by</th>
                <th>Enzyme</th>
                <th>PAM</th>
                <th>Organisms</th>
                <th>Reference</th>
                <th>__EMPTY</th>
              </tr>
              {mode.map((e) => {
                console.log(e);
                return (
                  <tr>
                    <td>
                      <b className="text-decoration-underline">{e.Tools}</b>
                    </td>
                    <td>{e.Availability}</td>
                    <td>{e.Purpose}</td>
                    <td>{e.Platform}</td>
                    <td>ee</td>
                    <td>{e.Score}</td>
                    <td>{e.Search}</td>
                    <td>{e.Enzyme}</td>
                    <td>{e.PAM}</td>
                    <td>{e.Organisms}</td>
                    <td>{e.Reference}</td>
                    <td>{e.__EMPTY}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
