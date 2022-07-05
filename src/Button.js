import React from "react";



function Button(){
    return(
        <div>
        <div className="buttonBox">
            <div class = "button grey">C</div>
            <div class = "button grey"><img src ="inuse/icon_percentage.png"/></div>
            <div class = "button grey"><img src ="inuse/icon_divide.png"/></div>
            <div class = "button pink"><img src ="inuse/icon_mulitple.png"/></div>
        </div>
        <div className="buttonBox">
            <div class = "button">7</div>
            <div class = "button">8</div>
            <div class = "button">9</div>
            <div class = "button pink"><img src ="inuse/icon_minus.png"/></div>
        </div>
        <div className="buttonBox">
            <div class = "button">4</div>
            <div class = "button">5</div>
            <div class = "button">6</div>
            <div class = "button pink"><img src ="inuse/icon_add.png"/></div>
        </div>
        <div className="buttonBoxBottom">
            <div>
                <div className="buttonBox">
                    <div class = "button">1</div>
                    <div class = "button">2</div>
                    <div class = "button">3</div>
                </div>
                <div className="buttonBox">
                    <div class = "button grey"><img src ="inuse/icon_cancle.png"/></div>
                    <div class = "button">0</div>
                    <div class = "button">.</div>
                </div>
            </div>
            <div class = "button bigButton hotpink"><img src ="inuse/icon_equal.png"/></div>
        </div>

        </div>
    )
}export default Button;