import { Row, Col,Container,Card, Form, Button} from "react-bootstrap"

function Login  () {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Form className>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />git 
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