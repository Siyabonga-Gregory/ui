import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Button } from 'reactstrap';
import CardsV2Css from './CardsV2Css.css';


export default function CardsV2() {
    return (<>
        <div className='cardDiv'>
            <div className='CardTitle'>
                Are you sure you want to stop the application process?
            </div>
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"

                        width="100%"
                    />

                    <CardImgOverlay>
                        <CardText className='CardText'>
                            Text here
                        </CardText>
                        <CardText className='CardText'>
                            Text here
                        </CardText>
                    </CardImgOverlay>

                    <div className='buttonsDiv'>
                        <div><Button className='continueButton'>Continue with application online<i className='sign'></i></Button></div>
                        <div><Button className='callMeBackButton'>Call me back<i className='sign'></i></Button></div>
                    </div>
                </Card>
            </div>
        </div>
    </>)
}
