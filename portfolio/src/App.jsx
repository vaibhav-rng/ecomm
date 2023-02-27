import { useRef, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import image1 from './images/vaibhav1.jpg'
import image2 from './images/vaibhav2.png'
import { proj } from "./projects"


function App() {

  const aboutMe = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const contactMe = useRef(null)

  const [contact, setContact] = useState("Let's get in touch.")

  const scrollTo = (elemRef) => {

    console.log((elemRef))
    window.scrollTo({
      top: elemRef.current.offsetTop,
      behavior: 'smooth'
    })
  }


  return (
    <>

      <NavBar scrollTo={scrollTo} aboutMe={aboutMe} skills={skills} projects={projects} contactMe={contactMe} />
      <div className='fpage'>
        <div className='container1'>
          <div style={{ fontSize: "30px" }} className='s1'>  Namaste,I’m <span style={{ color: "#9778EE" }}>vaibhav</span>   </div>
          <div className='s1' style={{ color: "#556080" }}  > i’m a full stack developer based in bangalore, india.</div>
        </div>
        <div className='container1'>
          <img style={{ borderRadius: "1000px" }} width="350" height="350" src={image1} alt="" />
        </div>
      </div>

      <div ref={aboutMe} style={{ marginBottom: "10%" }} className='spage'>
        <div className='s2'>
          <h1 style={{ textAlign: "center", color: "#9778EE" }} >About ME</h1>
        </div>
        <div style={{ height: "450px" }} className='container2'>
          <img src={image2} className='img1' />
        </div>
        <div className='container2' style={{ backgroundColor: "#9778EE" }}>
          <div style={{ fontSize:"larger",padding: "1%",paddingTop:"2%",paddingBottom:"2%" }} className='s3'>

            {/* <div style={{textAlign:"center"}}>About Me</div> */}
            {/* <br/> */}
            I am a full-stack web developer with a passion for building
            beautiful and functional websites.In addition to my work as a full-stack web developer,
            I have a keen interest in blockchain development and the
            decentralized web.
            I believe that Blockchain and Web 3.0 has the
            potential to transform the way we think about and use the internet,
            and I am excited to be at the forefront of this shift.
            I am always eager to explore new ways to
            harness the power of decentralized systems.
            <br />
            <br />

            In my free time, I am a dedicated musician and reader.Music has always been an important part of my life,
            and playing the guitar is a way for me to relax and express myself
            creatively.
            My love for philosophy and the written word drives my passion for
            reading, and I am constantly seeking new books on philosophy,
            psychology, and other subjects that challenge my thinking and
            broaden my perspective.
            <br />
            <br />
            Whether I'm playing the guitar, reading a thought-provoking book,
            or pushing the boundaries of my web development skills,
            I am always looking for new ways to grow and learn.
          </div>
        </div>
      </div>


      <div ref={skills} className='skillConatainer'>
        <div className='s2' style={{ textAlign: "center", textDecoration: "underline", fontSize: "32px", color: "#556080" }}>
          My Skills
        </div>
        <div className='nestedSkills'>

          <div className='skillheading' >
            <div style={{ marginBottom: "4%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 231 185" fill="none">
                <g clip-path="url(#clip0_9_29)">
                  <path d="M70.6887 131.841L0 100.967V83.8666L70.6887 53.167V73.2524L21.4316 92.2023L70.6887 111.867V131.841Z" fill="#9778EE" />
                  <path d="M82.7625 142.646L129.641 42.354H144.451L97.4635 142.646H82.7625Z" fill="#9778EE" />
                  <path d="M160.311 131.841V111.867L209.559 92.3614L160.311 73.0062V53.1589L231 83.8983V100.895L160.311 131.841Z" fill="#9778EE" />
                </g>
                <defs>
                  <clipPath id="clip0_9_29">
                    <rect width="231" height="185" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            Front-End

          </div>
          <div className='skillcontent'>
            <div className='mg'>
              Html
            </div>
            <div className='mg'>
              Css
            </div>
            <div className='mg'>
              Javascript
            </div>
            <div className='mg'>
              React
            </div>
            <div className='mg'>
              Bootstrap
            </div>

          </div>

        </div>

        <div className='nestedSkills'  >
          <div className='skillheading' >
            <div style={{ marginBottom: "4%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 178 160" fill="none">
                <g clip-path="url(#clip0_9_50)">
                  <path d="M164.098 51.5254H10.8852C4.87539 51.5254 0 47.143 0 41.741V9.78441C0 4.38237 4.87539 0 10.8852 0H164.095C170.108 0 174.983 4.38237 174.983 9.78441V41.7383C174.983 47.143 170.108 51.5254 164.098 51.5254Z" fill="#556080" />
                  <path d="M164.098 103.051H10.8852C4.87539 103.051 0 98.6684 0 93.2664V61.3098C0 55.9078 4.87539 51.5254 10.8852 51.5254H164.095C170.108 51.5254 174.983 55.9078 174.983 61.3098V93.2637C174.983 98.6684 170.108 103.051 164.098 103.051Z" fill="#38454F" />
                  <path d="M164.098 154.576H10.8852C4.87539 154.576 0 150.194 0 144.792V112.835C0 107.433 4.87539 103.051 10.8852 103.051H164.095C170.108 103.051 174.983 107.433 174.983 112.835V144.789C174.983 150.194 170.108 154.576 164.098 154.576Z" fill="#556080" />
                  <path d="M28.661 35.2543C34.4928 35.2543 39.2203 31.0048 39.2203 25.7628C39.2203 20.5207 34.4928 16.2712 28.661 16.2712C22.8293 16.2712 18.1017 20.5207 18.1017 25.7628C18.1017 31.0048 22.8293 35.2543 28.661 35.2543Z" fill="#8697CB" />
                  <path d="M147.831 24.4069C149.497 24.4069 150.847 23.1927 150.847 21.695C150.847 20.1973 149.497 18.9832 147.831 18.9832C146.164 18.9832 144.814 20.1973 144.814 21.695C144.814 23.1927 146.164 24.4069 147.831 24.4069Z" fill="#8697CB" />
                  <path d="M135.763 24.4069C137.429 24.4069 138.78 23.1927 138.78 21.695C138.78 20.1973 137.429 18.9832 135.763 18.9832C134.097 18.9832 132.746 20.1973 132.746 21.695C132.746 23.1927 134.097 24.4069 135.763 24.4069Z" fill="#8697CB" />
                  <path d="M153.864 32.5424C155.531 32.5424 156.881 31.3282 156.881 29.8305C156.881 28.3328 155.531 27.1187 153.864 27.1187C152.198 27.1187 150.847 28.3328 150.847 29.8305C150.847 31.3282 152.198 32.5424 153.864 32.5424Z" fill="#8697CB" />
                  <path d="M141.797 32.5424C143.463 32.5424 144.814 31.3282 144.814 29.8305C144.814 28.3328 143.463 27.1187 141.797 27.1187C140.13 27.1187 138.78 28.3328 138.78 29.8305C138.78 31.3282 140.13 32.5424 141.797 32.5424Z" fill="#8697CB" />
                  <path d="M123.695 24.4069C125.361 24.4069 126.712 23.1927 126.712 21.695C126.712 20.1973 125.361 18.9832 123.695 18.9832C122.029 18.9832 120.678 20.1973 120.678 21.695C120.678 23.1927 122.029 24.4069 123.695 24.4069Z" fill="#8697CB" />
                  <path d="M129.729 32.5424C131.395 32.5424 132.746 31.3282 132.746 29.8305C132.746 28.3328 131.395 27.1187 129.729 27.1187C128.063 27.1187 126.712 28.3328 126.712 29.8305C126.712 31.3282 128.063 32.5424 129.729 32.5424Z" fill="#8697CB" />
                  <path d="M111.627 24.4069C113.293 24.4069 114.644 23.1927 114.644 21.695C114.644 20.1973 113.293 18.9832 111.627 18.9832C109.961 18.9832 108.61 20.1973 108.61 21.695C108.61 23.1927 109.961 24.4069 111.627 24.4069Z" fill="#8697CB" />
                  <path d="M117.661 32.5424C119.327 32.5424 120.678 31.3282 120.678 29.8305C120.678 28.3328 119.327 27.1187 117.661 27.1187C115.995 27.1187 114.644 28.3328 114.644 29.8305C114.644 31.3282 115.995 32.5424 117.661 32.5424Z" fill="#8697CB" />
                  <path d="M99.5593 24.4069C101.226 24.4069 102.576 23.1927 102.576 21.695C102.576 20.1973 101.226 18.9832 99.5593 18.9832C97.8931 18.9832 96.5424 20.1973 96.5424 21.695C96.5424 23.1927 97.8931 24.4069 99.5593 24.4069Z" fill="#8697CB" />
                  <path d="M105.593 32.5424C107.259 32.5424 108.61 31.3282 108.61 29.8305C108.61 28.3328 107.259 27.1187 105.593 27.1187C103.927 27.1187 102.576 28.3328 102.576 29.8305C102.576 31.3282 103.927 32.5424 105.593 32.5424Z" fill="#8697CB" />
                  <path d="M28.661 86.7797C34.4928 86.7797 39.2203 82.5302 39.2203 77.2882C39.2203 72.0461 34.4928 67.7966 28.661 67.7966C22.8293 67.7966 18.1017 72.0461 18.1017 77.2882C18.1017 82.5302 22.8293 86.7797 28.661 86.7797Z" fill="#8697CB" />
                  <path d="M147.831 75.9323C149.497 75.9323 150.847 74.7181 150.847 73.2204C150.847 71.7227 149.497 70.5085 147.831 70.5085C146.164 70.5085 144.814 71.7227 144.814 73.2204C144.814 74.7181 146.164 75.9323 147.831 75.9323Z" fill="#8697CB" />
                  <path d="M135.763 75.9323C137.429 75.9323 138.78 74.7181 138.78 73.2204C138.78 71.7227 137.429 70.5085 135.763 70.5085C134.097 70.5085 132.746 71.7227 132.746 73.2204C132.746 74.7181 134.097 75.9323 135.763 75.9323Z" fill="#8697CB" />
                  <path d="M153.864 84.0678C155.531 84.0678 156.881 82.8536 156.881 81.3559C156.881 79.8582 155.531 78.644 153.864 78.644C152.198 78.644 150.847 79.8582 150.847 81.3559C150.847 82.8536 152.198 84.0678 153.864 84.0678Z" fill="#8697CB" />
                  <path d="M141.797 84.0678C143.463 84.0678 144.814 82.8536 144.814 81.3559C144.814 79.8582 143.463 78.644 141.797 78.644C140.13 78.644 138.78 79.8582 138.78 81.3559C138.78 82.8536 140.13 84.0678 141.797 84.0678Z" fill="#8697CB" />
                  <path d="M123.695 75.9323C125.361 75.9323 126.712 74.7181 126.712 73.2204C126.712 71.7227 125.361 70.5085 123.695 70.5085C122.029 70.5085 120.678 71.7227 120.678 73.2204C120.678 74.7181 122.029 75.9323 123.695 75.9323Z" fill="#8697CB" />
                  <path d="M129.729 84.0678C131.395 84.0678 132.746 82.8536 132.746 81.3559C132.746 79.8582 131.395 78.644 129.729 78.644C128.063 78.644 126.712 79.8582 126.712 81.3559C126.712 82.8536 128.063 84.0678 129.729 84.0678Z" fill="#8697CB" />
                  <path d="M111.627 75.9323C113.293 75.9323 114.644 74.7181 114.644 73.2204C114.644 71.7227 113.293 70.5085 111.627 70.5085C109.961 70.5085 108.61 71.7227 108.61 73.2204C108.61 74.7181 109.961 75.9323 111.627 75.9323Z" fill="#8697CB" />
                  <path d="M117.661 84.0678C119.327 84.0678 120.678 82.8536 120.678 81.3559C120.678 79.8582 119.327 78.644 117.661 78.644C115.995 78.644 114.644 79.8582 114.644 81.3559C114.644 82.8536 115.995 84.0678 117.661 84.0678Z" fill="#8697CB" />
                  <path d="M99.5593 75.9323C101.226 75.9323 102.576 74.7181 102.576 73.2204C102.576 71.7227 101.226 70.5085 99.5593 70.5085C97.8931 70.5085 96.5424 71.7227 96.5424 73.2204C96.5424 74.7181 97.8931 75.9323 99.5593 75.9323Z" fill="#8697CB" />
                  <path d="M105.593 84.0678C107.259 84.0678 108.61 82.8536 108.61 81.3559C108.61 79.8582 107.259 78.644 105.593 78.644C103.927 78.644 102.576 79.8582 102.576 81.3559C102.576 82.8536 103.927 84.0678 105.593 84.0678Z" fill="#8697CB" />
                  <path d="M28.661 138.305C34.4928 138.305 39.2203 134.056 39.2203 128.814C39.2203 123.572 34.4928 119.322 28.661 119.322C22.8293 119.322 18.1017 123.572 18.1017 128.814C18.1017 134.056 22.8293 138.305 28.661 138.305Z" fill="#8697CB" />
                  <path d="M147.831 127.458C149.497 127.458 150.847 126.244 150.847 124.746C150.847 123.248 149.497 122.034 147.831 122.034C146.164 122.034 144.814 123.248 144.814 124.746C144.814 126.244 146.164 127.458 147.831 127.458Z" fill="#8697CB" />
                  <path d="M135.763 127.458C137.429 127.458 138.78 126.244 138.78 124.746C138.78 123.248 137.429 122.034 135.763 122.034C134.097 122.034 132.746 123.248 132.746 124.746C132.746 126.244 134.097 127.458 135.763 127.458Z" fill="#8697CB" />
                  <path d="M153.864 135.593C155.531 135.593 156.881 134.379 156.881 132.881C156.881 131.384 155.531 130.169 153.864 130.169C152.198 130.169 150.847 131.384 150.847 132.881C150.847 134.379 152.198 135.593 153.864 135.593Z" fill="#8697CB" />
                  <path d="M141.797 135.593C143.463 135.593 144.814 134.379 144.814 132.881C144.814 131.384 143.463 130.169 141.797 130.169C140.13 130.169 138.78 131.384 138.78 132.881C138.78 134.379 140.13 135.593 141.797 135.593Z" fill="#8697CB" />
                  <path d="M123.695 127.458C125.361 127.458 126.712 126.244 126.712 124.746C126.712 123.248 125.361 122.034 123.695 122.034C122.029 122.034 120.678 123.248 120.678 124.746C120.678 126.244 122.029 127.458 123.695 127.458Z" fill="#8697CB" />
                  <path d="M129.729 135.593C131.395 135.593 132.746 134.379 132.746 132.881C132.746 131.384 131.395 130.169 129.729 130.169C128.063 130.169 126.712 131.384 126.712 132.881C126.712 134.379 128.063 135.593 129.729 135.593Z" fill="#8697CB" />
                  <path d="M111.627 127.458C113.293 127.458 114.644 126.244 114.644 124.746C114.644 123.248 113.293 122.034 111.627 122.034C109.961 122.034 108.61 123.248 108.61 124.746C108.61 126.244 109.961 127.458 111.627 127.458Z" fill="#8697CB" />
                  <path d="M117.661 135.593C119.327 135.593 120.678 134.379 120.678 132.881C120.678 131.384 119.327 130.169 117.661 130.169C115.995 130.169 114.644 131.384 114.644 132.881C114.644 134.379 115.995 135.593 117.661 135.593Z" fill="#8697CB" />
                  <path d="M99.5593 127.458C101.226 127.458 102.576 126.244 102.576 124.746C102.576 123.248 101.226 122.034 99.5593 122.034C97.8931 122.034 96.5424 123.248 96.5424 124.746C96.5424 126.244 97.8931 127.458 99.5593 127.458Z" fill="#8697CB" />
                  <path d="M105.593 135.593C107.259 135.593 108.61 134.379 108.61 132.881C108.61 131.384 107.259 130.169 105.593 130.169C103.927 130.169 102.576 131.384 102.576 132.881C102.576 134.379 103.927 135.593 105.593 135.593Z" fill="#8697CB" />
                  <path d="M178 116.61H117.661V160H178V116.61Z" fill="#B1D3EF" />
                  <path d="M156.881 135.593C156.881 131.1 152.83 127.458 147.831 127.458C142.831 127.458 138.78 131.1 138.78 135.593C138.78 139.165 141.356 142.167 144.919 143.26C144.886 143.417 144.814 143.563 144.814 143.729V149.152C144.814 150.649 146.165 151.864 147.831 151.864C149.496 151.864 150.847 150.649 150.847 149.152V143.729C150.847 143.563 150.775 143.417 150.742 143.26C154.305 142.167 156.881 139.165 156.881 135.593Z" fill="#556080" />
                  <path d="M132.746 111.186C132.746 103.71 139.513 97.6271 147.831 97.6271C156.148 97.6271 162.915 103.71 162.915 111.186V116.61H168.949V111.186C168.949 100.719 159.476 92.2034 147.831 92.2034C136.185 92.2034 126.712 100.719 126.712 111.186V116.61H132.746V111.186Z" fill="#BDC3C7" />
                </g>
                <defs>
                  <clipPath id="clip0_9_50">
                    <rect width="178" height="160" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            Back-end
          </div>
          <div className='skillcontent'>
            <div className='mg'>
              Nodejs
            </div>
            <div className='mg'>
              Express
            </div>
            <div className='mg'>
              MongoDb
            </div>
            <div className='mg'>
              Mongoose
            </div>
          </div>
        </div>
        <div className='nestedSkills' >
          <div className='skillheading' >
            <div style={{ marginBottom: "4%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="100" viewBox="0 0 199 168" fill="none">
                <g clip-path="url(#clip0_10_98)">
                  <path d="M99.5 168C154.452 168 199 130.392 199 84C199 37.6081 154.452 0 99.5 0C44.5477 0 0 37.6081 0 84C0 130.392 44.5477 168 99.5 168Z" fill="#9778EE" />
                  <path d="M102.597 21V67.5675L149.219 85.155L102.597 21Z" fill="white" fill-opacity="0.602" />
                  <path d="M102.597 21L55.9688 85.155L102.597 67.5675V21Z" fill="white" />
                  <path d="M102.597 115.332V146.974L149.25 92.4839L102.597 115.332Z" fill="white" fill-opacity="0.602" />
                  <path d="M102.597 146.974V115.327L55.9688 92.4839L102.597 146.974Z" fill="white" />
                  <path d="M102.597 108.008L149.219 85.1549L102.597 67.5779V108.008Z" fill="white" fill-opacity="0.2" />
                  <path d="M55.9688 85.1549L102.597 108.008V67.5779L55.9688 85.1549Z" fill="white" fill-opacity="0.602" />
                </g>
                <defs>
                  <clipPath id="clip0_10_98">
                    <rect width="199" height="168" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            Other
          </div>
          <div className='skillcontent'>
            <div className='mg'>
              Solidity
            </div>
            <div className='mg'>
              Etherium
            </div>
            <div className='mg'>
              Web3js
            </div>
            <div className='mg'>
              VsCode
            </div>
            <div className='mg'>
              Unity
            </div>
            <div className='mg'>
              figma
            </div>
          </div>
        </div>
      </div>

      <div ref={projects} className='pcontainer'>
        <h1 className='s2' style={{ textAlign: "center", color: "#ffffff" }}>Projects</h1>

        {proj.map((items) => <Projects items={items} />)}

      </div>

      <div className='s2' style={{ color: "#556080", textAlign: "center", marginBottom: "5%" }}><h1>Contact Me</h1></div>

      <div className='contact'>
        <div onClick={() => { setContact("vaibhavkaushik1214@gmail.com") }} className='contactconatainer'>
          <div style={{ fontFamily: "monospace", fontSize: "x-large", marginTop: "4%" }}>
            <svg height={20} viewBox="0 -100 1325 1025" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.3 606.2c-27.9 0-55.6-9-78.7-26.9L36.4 245.7c-18-15.2-20.2-42.2-5-60.1 15.2-18 42.2-20.2 60.1-5L484.3 513c14.4 11.1 36.5 11.1 52.4-1.2l396.2-331.4c18.1-15.1 45-12.8 60.1 5.4 15.1 18.1 12.7 45-5.4 60.1L590.1 578.3c-24.1 18.7-52.6 27.9-80.8 27.9z" fill="#758CA3"></path><path d="M894.8 938.6H129.4c-71.3 0-129.4-58-129.4-129.4v-552c0-71.3 58-129.4 129.4-129.4h765.4c71.3 0 129.4 58 129.4 129.4v552.1c0 71.3-58.1 129.3-129.4 129.3zM129.4 213.2c-24.3 0-44 19.8-44 44v552.1c0 24.3 19.8 44 44 44h765.4c24.3 0 44-19.8 44-44V257.2c0-24.3-19.8-44-44-44H129.4z" fill="#758CA3"></path></g></svg>
            Email
          </div>
          <div style={{ fontFamily: "monospace", fontSize: "large", marginTop: "4%" }}>
            {contact}
          </div>
        </div>
        <div onClick={() => { window.location = 'https://github.com/vaibhav-rng?tab=repositories' }} ref={contactMe} className='contactconatainer'>
          <div style={{ fontFamily: "monospace", fontSize: "x-large", marginTop: "4%" }}>
            <svg height={21} viewBox="0 -2 30 24" id="meteor-icon-kit__regular-github" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z" fill="#758CA3"></path></g></svg>
            GitHub

          </div>

          <div style={{ fontFamily: "monospace", fontSize: "large", marginTop: "4%" }}>
            Check out my repos.
          </div>
        </div>
      </div>
      <footer>
      Thank you for taking the time to learn about my journey and I look forward to the opportunities that the future holds :)
      </footer>
    </>
  );
}

export default App;
