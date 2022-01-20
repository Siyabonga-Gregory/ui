import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, Button } from 'reactstrap';
import  './CardsV2Css.css';


export default function CardsV2() {
    return (<>
        <div className='cardDiv'>
            <div className='CardTitle'>
               Your Title Here e.g Hello Ghost Coders
            </div>
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                         src='Your image here'
                        width="100%"
                    />

                    <CardImgOverlay>
                        <CardText>
                            Text here
                        </CardText>
                        <CardText >
                            Text here
                        </CardText>
                    </CardImgOverlay>

                    <div>
                        <div><Button>Your Button Text Here<i className='sign'></i></Button></div>
                    </div>
                </Card>
            </div>
        </div>
    </>)
}
