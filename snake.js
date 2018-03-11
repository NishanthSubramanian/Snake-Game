
window.onload= function load()
{
    canvas = document.getElementById('ns');
    c= canvas.getContext('2d');
    document.addEventListener('keydown',keyPush);
    setInterval(game,1000/10);
}
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail=5;
function game()
{
    px+=xv;
    py+=yv;
    if(px<0){
        px=tc-1;
    }
    if(px>tc-1){
        px=0;
    }
    if(py<0){
        py=tc-1;
    }
    if(py>tc-1){
        py=0;
    }
    c.fillStyle="black";
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle="lime";
    for(var i=0;i<trail.length;i++)
        {
    c.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
            if(trail[i].x==px && trail[i].y==py){
                 tail=5;
            }
        }
    trail.push({x:px,y:py});
    while(trail.length>tail)
    {
        trail.shift();
    }
    if(ax==px && ay==py)
    {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
        while(ax==px&&ay==py)
        {
            ax=Math.floor(Math.random()*tc);
            ay=Math.floor(Math.random()*tc);
        }
    }
    c.fillStyle="red";
    c.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt)
{
    switch(evt.keyCode)
    {
        case 37:
           if(xv!=1)
           {xv=-1;yv=0;
        break;}
            break;
            case 38:
            if(yv!=1)
           {xv=0;yv=-1;
        break;}
            break;
        case 39:
            if(xv!=-1)
            {xv=1;yv=0;
        break;}
            break;
        case 40:
            if(yv!=-1)
            {xv=0;yv=1;
        break;}
            
            
}
}
