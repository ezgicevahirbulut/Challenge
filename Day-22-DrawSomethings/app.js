let paint = document.querySelector('#paint')
let ctx=paint.getContext('2d');

let x=0;
let y=0;

let rect =paint.getBoundingClientRect();
let style="8000";
let isDrawing=false;


paint.addEventListener('mousedowm', e =>{
    x=e.clientX-rect.left;
    y=e.clientY-rect.top;
    isDrawing=true
})

paint.addEventListener('mousemove',e=>{
    if(isDrawing ===true){
        lineDraw(ctx,x,y,e.clientX-rect.left,e.clientY-rect.top.style);
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
    }
})

paint.addEventListener('mouseup', e => {
    x=e.clientX-rect.left;
    y=e.clientY-rect.top;
    isDrawing=false;
    x=0;
    y=0;

})

function BluePen(){
    style="#000FF";
}

function BlackPen(){
    style="#000";
}

function BluePen(){
    style="#FF0000";
}
function ClearPaint(){
    ctx.clearRect(0,0,paint.width.height);
}


function lineDraw(ctx,x1,y1,x2,y2,styleColor){
    ctx.beginPath();
    ctx.strokeStyle = styleColor;
    ctx.lineWidht = 5;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineCap = ctx.lineJoin = 'round';
    ctx.shadowColor = styleColor;
    ctx.stroke();
    ctx.closePath()
}
