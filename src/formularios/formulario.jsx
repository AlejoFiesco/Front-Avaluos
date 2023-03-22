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


          <Row>
            <Col md={9}>
              <Row>
                <div className="campo large">
                  Dirigido a
                  <Field />
                </div>
              </Row>
              <Row>
                <Col>
                  <div className="campo">
                    Tipo identificación
                    <Field />
                  </div>
                </Col>
                <Col>
                  <div className="campo">
                    Documento
                    <Field />
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="campo large">
                  Proceso
                  <Field />
                </div>
              </Row>
            </Col>
          </Row>


          <Row className='no-margin'>
            <Col md={6}>
              <div className="campo large">
                Solicitante
                <Field />
              </div>
            </Col>
            <Col md={3}>
              <div className="campo">
                Tipo de identificación
                <Field />
              </div>
            </Col>
            <Col md={3}>
              <div className="campo">
                Documento
                <Field />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <div className="campo large">
                Solicitante
                <Field />
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
              <div className="campo">
                Telefono
                <Field />
              </div>
            </Col>
          </Row>

        </Container>
      </Formik>
    </div>
  )
}

export default Formulario;