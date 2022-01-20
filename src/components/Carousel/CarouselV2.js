import React from 'react'
import { Carousel, CarouselIndicators, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap';

export default function CarouselV2() {
    return (<>
        <div>
            <div>
                <style>
                    {`.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background: black;
                }`}
                </style>
                <Carousel
                    activeIndex={0}
                    next={function noRefCheck() { }}
                    previous={function noRefCheck() { }}
                >
                    <CarouselIndicators
                        activeIndex={0}
                        items={[
                            {
                                altText: 'Slide 1',
                                caption: 'Slide 1',
                                id: 1
                            },
                            {
                                altText: 'Slide 2',
                                caption: 'Slide 2',
                                id: 2
                            },
                            {
                                altText: 'Slide 3',
                                caption: 'Slide 3',
                                id: 3
                            }
                        ]}
                        onClickHandler={function noRefCheck() { }}
                    />
                    <CarouselItem
                        className="custom-tag"
                        onExited={function noRefCheck() { }}
                        onExiting={function noRefCheck() { }}
                    >
                        <CarouselCaption
                            captionHeader="Slide 1"
                            captionText="Slide 1"
                            className="text-danger"
                        />
                    </CarouselItem>
                    <CarouselItem
                        className="custom-tag"
                        onExited={function noRefCheck() { }}
                        onExiting={function noRefCheck() { }}
                    >
                        <CarouselCaption
                            captionHeader="Slide 2"
                            captionText="Slide 2"
                            className="text-danger"
                        />
                    </CarouselItem>
                    <CarouselItem
                        className="custom-tag"
                        onExited={function noRefCheck() { }}
                        onExiting={function noRefCheck() { }}
                    >
                        <CarouselCaption
                            captionHeader="Slide 3"
                            captionText="Slide 3"
                            className="text-danger"
                        />
                    </CarouselItem>
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={function noRefCheck() { }}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={function noRefCheck() { }}
                    />
                </Carousel>
            </div>
        </div>
    </>)
}
