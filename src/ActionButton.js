import React, { useEffect, useState } from 'react'
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

const showToast = () => {
  this.setLoading(true)
  return (
    <Toast>
      <ToastHeader>TITLE</ToastHeader>
      <ToastBody>BODY BY JAKE</ToastBody>
    </Toast>
  )
}

const ActionButton = () => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false)
      })
    }
  }, [isLoading])

  return (
    <Button
      variant='primary'
      disabled={isLoading}
      // onClick={!isLoading ? showToast : null}
      onClick={showToast()}
    >
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
  )
}

export default ActionButton
