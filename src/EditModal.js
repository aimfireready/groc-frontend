import React from 'react'
// import React, { useState } from 'react'
import {
  Row,
  Col,
  Button,
  FormGroup,
  InputGroup,
  Input,
  InputGroupText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import PropTypes from 'prop-types'

const EditModal = (props) => {
  const item = props.item
  const isModalOpen = props.isModalOpen
  const showModal = props.showModal
  const onItemNameChange = props.onItemNameChange
  const onHaveChange = props.onHaveChange
  const onTargetQtyChange = props.onTargetQtyChange
  console.log('Loaded modal with ' + item.name)

  const handleItemNameChange = (e) => {
    onItemNameChange(e.target.value)
    // setItem({
    //   ...item,
    //   [e.target.name]: e.target.value
    // })
  }

  const handleHaveChange = (e) => {
    onHaveChange(e.target.value)
    // setItem({
    //   ...item,
    //   [e.target.name]: e.target.value
    // })
  }

  const handleTargetQtyChange = (e) => {
    onTargetQtyChange(e.target.value)
    // setItem({
    //   ...item,
    //   [e.target.name]: e.target.value
    // })
  }

  return (
    <Modal
      fullscreen='sm'
      isOpen={isModalOpen}
      toggle={showModal}
      // {...modalProps}
    >
      <ModalHeader toggle={showModal}>{item.name}</ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            <FormGroup>
              <InputGroup>
                <InputGroupText>Name</InputGroupText>
                <Input
                  type='string'
                  defaultValue={item.name}
                  onChange={(e) => handleItemNameChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <InputGroup>
                <br />
                <InputGroupText>Have</InputGroupText>
                <Input
                  type='number'
                  defaultValue={item.have_qty}
                  onChange={(e) => handleHaveChange}
                />
                <br />
              </InputGroup>
              <InputGroup>
                <InputGroupText>Target</InputGroupText>
                <Input
                  type='number'
                  defaultValue={item.target_qty}
                  onChange={(e) => handleTargetQtyChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col></Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color='danger'
          size='sm'
        >
          Delete
        </Button>{' '}
        <Button
          color='primary'
          onClick={showModal}
        >
          Save
        </Button>{' '}
        {/* <Button
          color='secondary'
          onClick={showModal}
        >
          Cancel
        </Button> */}
      </ModalFooter>
    </Modal>
  )
}

EditModal.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  onItemNameChange: PropTypes.func.isRequired,
  onHaveChange: PropTypes.func.isRequired,
  onTargetQtyChange: PropTypes.func.isRequired
}

export default EditModal
