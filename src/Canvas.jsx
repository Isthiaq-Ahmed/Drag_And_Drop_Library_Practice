import * as fabric from 'fabric'
import { useState, useRef,useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ZoomInOutFunctionality  from './fabric_manager/ZoomInOut'
import {addSquare, addCircle} from './fabric_manager/Shapes';
import {handleImageDrop} from './fabric_manager/DragAndDrop'
import {removeObjects} from './fabric_manager/RemovingObjects'

import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DeleteForever from '@mui/icons-material/DeleteForever';




const CanvasComponent = () => {
  const canvasRef = useRef(null)
  const canvasContainerRef = useRef(null)
  const ImageRef = useRef(null)
  const ImageRef2 = useRef(null)
  const [canvas, setCanvas] = useState(null)

    ZoomInOutFunctionality(canvas)
    

      
  useEffect(() => {

      const canvas = new fabric.Canvas(canvasRef.current,{
        width:500,
        height:400,
      });
      setCanvas(canvas)

      handleImageDrop(canvasContainerRef, canvas, ImageRef, .3)
      handleImageDrop(canvasContainerRef, canvas, ImageRef2, .1)

      console.log(JSON.stringify(canvas));

      

      // Cleanup on unmount
      return () => { 
          canvas.dispose(); // Dispose the canvas
      };
    

  }, []);


  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}  backgroundColor={'lightgray'} gap={2}  >
    
      <Box sx={{backgroundColor: 'white'}} ref={canvasContainerRef}>
     <canvas  ref={canvasRef} style={{border:'1px dotted gray'}} ></canvas>
      </Box>
     <Box display={'flex'} gap={2} >
     <Button 
      onClick={()=>{addCircle(canvas)}}

      variant="outlined">
      <CircleOutlinedIcon/></Button>
     <Button 
     onClick={()=>{addSquare(canvas)}}
     variant="outlined">
      <SquareOutlinedIcon/></Button>
      <Button 
    
     onClick={()=>{canvas.clear()}}
     variant="outlined">
      <DeleteForever/></Button>

      <Button 
    
     onClick={()=>{removeObjects(canvas)}}
     variant="outlined"> close</Button>
      <img
      ref={ImageRef}
       draggable="true"
       src="/src/assets/img.jpg"
       alt="Image"
       style={{height:50, width:50}}
       className='Image'
    />
    <img
      ref={ImageRef2}
       draggable="true"
       src="/src/assets/logo.svg"
       alt="Image"
       style={{height:50, width:50}}
       className='Image'
    />
      
     </Box>

    </Box>
  );
};

export default CanvasComponent;



   // if(canvas){
    //   canvas.on('dragleave',()=>{
    //     console.log('draging')
    //   })
  
    // }
    // const handleDrag= () =>{
    //   canvas.on('dragleave',(e)=>{
    //     console.log('drag leave')
    //     console.log(e.e.offsetX)
    //     addCircle(canvas, e)
    //   })
      

    // }
    // if(canvas){
    //   canvas.on('dragover',(e)=>{
    //     console.log(e)
    //   })
    // }
    // if(canvas){
    //   console.log('code is runing')
    //   fabric.FabricImage('/src/assets/img.jpg', function(oImg) {
    //     // scale image down, and flip it, before adding it onto canvas
    //     oImg.scale(0.5).set('flipX', true);
    //     console.log(oImg)
    //     canvas.add(oImg);
    //   });

    // }