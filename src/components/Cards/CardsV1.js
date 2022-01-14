import React from 'react'
import { Modal, Form, ModalBody,FormGroup, ModalFooter, Button,Label,Input } from 'reactstrap';

export default function CardsV1() {
    return (<>
            <div>
            <Form
                inline
                onSubmit={function noRefCheck() { }}
            >
                <FormGroup>
                    <Label for="focusAfterClose">
                        Focus After Close
                    </Label>
                    <Input
                        className="mx-2"
                        id="focusAfterClose"
                        onChange={function noRefCheck() { }}
                        type="select"
                    >
                        <option value="true">
                            Yes
                        </option>
                        <option value="false">
                            No
                        </option>
                    </Input>
                </FormGroup>
                <Button
                    color="danger"
                    onClick={function noRefCheck() { }}
                >
                    Open
                </Button>
            </Form>
            <Modal>
                <ModalBody>
                    Observe the "Open" button. It will be focused after close when "returnFocusAfterClose" is true and will not be focused if "returnFocusAfterClose" is false.
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={function noRefCheck() { }}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    </>)
}
