import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg";
import "./Feed.css";

function Feed() {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Curso consumindo api</h2>
              <img src={More} alt="more icon"></img>
            </header>
            <div className="line"></div>
            <p>Nesse curso eu ensino vcs a consumirem uma api</p>

            <div className="btns">
              <div className="btn-edit">
                <Link to={"/edit"}>
                  <button>Edit</button>
                </Link>
              </div>
              <div className="btn-readmore">
                <Link to={"/lermais"}>
                  <button>Ler Mais</button>
                </Link>
              </div>
              <div className="btn-delete">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
