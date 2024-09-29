import * as fabric from 'fabric'
import { useState, useRef,useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ZoomInOutFunctionality  from './fabric_manager/ZoomInOut'
import {addSquare, addCircle} from './fabric_manager/Shapes';

import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DeleteForever from '@mui/icons-material/DeleteForever';



const CanvasComponent = () => {
  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState(null)

    ZoomInOutFunctionality(canvas)



  
   
      
  useEffect(() => {
      //we check if teh canvasRef have the access to the dom element of canvas
      if(canvasRef.current){
        const initCanvas = new fabric.Canvas(canvasRef.current,{
          width:500,
          height:500,
          dragDrop: true,
        })
        //changing the color of canvas
        initCanvas.backgroundColor='#fff';
        //Applying everything that we have done to the canvas.
        initCanvas.renderAll();

        setCanvas(initCanvas);
          
        //the return will insure that when the component is unmounted is free the resources.
        return () =>{
          initCanvas.dispose();
        }
      }
    

  }, []);


  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}  backgroundColor={'lightgray'} gap={2}  >
    
      <Box sx={{backgroundColor: 'white'}}>
     <canvas  ref={canvasRef} style={{height:'1000', width:'1000',border:'1px dotted gray'}} ></canvas>
      </Box>
     <Box display={'flex'} gap={2} >
     <Button 
      draggable={true}
      onDragEnd={() => {
          addCircle(canvas);
      }} 
      onClick={()=>{addCircle(canvas)}}

      variant="outlined">
      <CircleOutlinedIcon/></Button>
     <Button 
     draggable={true}
     onDragEnd={() => {
      addSquare(canvas);
      }}  
     onClick={()=>{addSquare(canvas)}}
     variant="outlined">
      <SquareOutlinedIcon/></Button>
      <Button 
    
     onClick={()=>{canvas.clear()}}
     variant="outlined">
      <DeleteForever/></Button>
      
     </Box>

    </Box>
  );
};

export default CanvasComponent;