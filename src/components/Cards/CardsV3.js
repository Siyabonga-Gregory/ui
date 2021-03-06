import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

export default function CardsV3() {
    return (
        <div>
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/270"
                        width="100%"
                    />
                    <div className='cardBody'>
                        <CardImgOverlay>
                            <CardTitle tag="h5">
                                <strong> <h2>Your Title Here</h2></strong>
                            </CardTitle>
                            <CardText>
                                Your Context Here
                            </CardText>
                            <CardText>
                                <small className="text-muted">
                                    Your Context Here
                                </small>
                            </CardText>
                        </CardImgOverlay>
                    </div>
                </Card>
            </div>
        </div>
    )
}
