import './formularios.css';
import { Formik, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Formulario = () => {
  return (
    <div className="formulario">
      <Formik>
        <Container fluid="xl">
          <Row>
            <Col md={3}>
              <div className="campo">
                Código
                <Field />
              </div>
            </Col>
            <Col md={3}>
              <div className="campo">
                Propósito
                <Field />
              </div>
            </Col>
            <Col md={3}>
              <div className="campo">
                Tipo Avalúo
                <Field />
              </div>
            </Col>
            <Col md={3}>
              <Row>
                <div className="campo">
                  Fecha Visita
                  <Field />
                </div>
              </Row>
              <Row>
                <div className="campo">
                  Fecha Avalúo
                  <Field />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Formik>
    </div>
  )
}

export default Formulario;