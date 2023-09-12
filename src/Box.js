import React, { useState } from "react";

function Box({width, height, color}) {
    return <div style={{ backgroundColor: color, width: width + 'px', height: height + 'px'} }> BOX
    </div>
} 

export default Box