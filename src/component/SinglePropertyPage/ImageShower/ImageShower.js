import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';

import './ImageShower.css';
import { info } from './ImageShowerInfo';



export default function ImageShower() {

    const [currentImage, setcurImage] = useState({
        image: 'land3.jpg',
        id:1
    });

    // const [switchOn, isSwitchOn] = useState(false);

   
    // const activeOpacity = (bool) => {
    //     isSwitchOn(bool);


    // }

    const showImage = (imgName, id) => {

        setcurImage({ image: imgName, id: id });
        // console.log();

    }

    return (



        <div >


            <>
                <div className="relative ">
                    {currentImage && (<img className="large-img" id="currentImg" src={require(`../../../image/card/land/${currentImage.image}`)} alt="large" />)}
                </div>

                <div className="img-template-bg" >


                    <Row className="img-template-row" >



                        {info.map((infoImage) => {
                            return (

                                <Col
                                    className="relative col-padding slide-hover"  key={infoImage.id}>




                                    <img className={infoImage.id === currentImage.id ? "active-template template":"template"}
                                        src={infoImage.img}
                                        alt="1"
                                        onClick={() => { showImage(infoImage.imgname, infoImage.id); }}
                                    />


                                    {/* <img className= "template" 
                  src={info[i].img} 
                  alt="1"
                    onClick={ () => {showImage (info[i].imgname) } } 
                    /> */}


                                </Col>

                            )
                        })}

                        {/* <Col className="slide-hover" style={{ position: 'relative' ,padding: '0'}}><img style={{ width: '95%', height: '100%' }} src={require('../../../image/bg2.png')} alt="2"  onClick={ () => showImage('bg2.png')} /></Col>
            <Col className="slide-hover" style={{ position: 'relative' ,padding: '0'}}><img style={{ width: '95%' , height: '100%'}} src={require('../../../image/bg.png')} alt="3"  onClick={ () => showImage('bg.png')} /></Col>
            */}


                    </Row>



                </div>
            </>



        </div>
    )
}
