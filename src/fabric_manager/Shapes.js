import * as fabric from 'fabric'


export const addSquare = (canvas)=>{
        if(canvas){
          const rect = new fabric.Rect({
            top:200,
            left:200,
            height:100,
            width:100,
            fill:'#1d96f7',
      
          })
          rect.set({
            cornerColor: 'red',
            cornerStyle: 'circle',
            transparentCorners: false,
          });
          canvas.add(rect)
        }
    
    }
    
export const addCircle = (canvas)=>{
        if(canvas){
          const circle = new fabric.Circle({
            radius:50,
            top:200,
            left:200,
            fill:'#1d95f7'
          });
          circle.set({
            cornerColor: 'red',
            cornerStyle: 'circle',
            transparentCorners: false,
          });
          canvas.add(circle)
        }
      }
    





