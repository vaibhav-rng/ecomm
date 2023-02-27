import React from 'react'
import "./Projects.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const Projects = (props) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { git, photo, title, sub, desc, tech, isVideo, isSource, isDemo,yt} = props.items
  const [link, setLink] = React.useState("");

  

  return (
    <div className='projcontainer'>
      <div>
        <Modal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
        >
          <Box className="video-responsive" >
            <iframe
              src={link}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <button onClick={() => { setOpen(false); }}>
              Close
            </button>
          </Box>
        </Modal>
      </div>

      
      <img className='imgcontainer' src={photo} alt="" />
      {title}
      <div style={{ color: "grey" }}>{sub}</div>
      <br />
      <div style={{ fontFamily: "monospace", color: "grey" }}>{desc}</div>
      <div style={{ marginBottom: "2%", marginTop: "4%" }}>Technologies </div>

      <div>
        {tech.map((item) => <button className='techbtn'>{item}</button>)}

      </div>



      <div style={{ marginTop: "10%" }}>

        {isVideo ?
          <button onClick={()=>{setLink(yt);handleOpen()}} style={{ backgroundColor: "rgb(196, 81, 81)" }} className='btn'>
            Video
          </button> : null}

        {isSource ?
          <button  onClick={() => {window.location = git}} style={{ fontFamily: "monospace", fontSize: "large", marginTop: "4%" }} style={{ backgroundColor: "rgb(83, 81, 196)" }} className='btn'>
            Source Code
          </button> : null}

        {isDemo ?
          <button className='btn'>
            Live Demo
          </button> : null}

      </div>

    </div>
  )
}

export default Projects