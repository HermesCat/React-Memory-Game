import React from "react";
import Cards from "../CardHolder/Cards";
import "./pages.css";


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11">
          <h1>Memory Game</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="accordion" id="accordionOne">
            <div className="card" id="accordionCard">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Rules
        </button>
                </h2>
              </div>
            </div>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
            <div class="card-body">
              <p>
                This game is designed to test your memory. Everytime you click a new card, the game will award you 1 point and remember you selection.
                  If you select the same card multiple times, you will be deducted 1 point. Once you've selected all cards once, the game will end.
      </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Cards>
          
        </Cards>
      </div>


    </div>
  );
}

export default Home;
