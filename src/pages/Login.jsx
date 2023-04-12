import { Row, Col,Container,Card, Form, Button} from "react-bootstrap"
import '../index.css'

function Login  () {
  return (
    <div className="login-sec">
        <Container>
            <Row className="pt-5 d-flex justify-content-center align-items-center">
                <Col sm={8} md={8} lg={8} className="">
                    <Form className>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Password" /> 
                    </Form.Group>
                    <Button variant="primary" type="submit"> Login </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
  }

  export default Login