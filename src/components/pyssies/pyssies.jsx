import "./pyssiesStyle.css"
import json from "../../static.json"

function Pyssies(){
return(
    <div className="pyssiesContainer">
        <h1 className="title">Pyssies</h1>
            <div className="pyssiesContent">
               {json.products.map((item, idx) => {
                    return (
                        <div className="pyssyCard" key={idx}>
                            <p className="cardTitle">{item.Title}</p>
                                <img src={`${item.Patch}`} alt=""  className="cardImage"/>
                            <p className="cardDesc">{item.Desc}</p>
                            <div className="buyPussy">
                                <p className="cardPrice">{item.Price}</p>
                                <button className="btnBuyPussy">Buy this pussy</button>
                            </div>
                            
                        </div>
                    )
               })}
            </div>
    </div>
)
}

export default Pyssies