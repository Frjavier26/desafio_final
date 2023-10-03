import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import CardComp from '../components/CardComp';

const Home = () => {
  return (
    <>
      <div className="nav-spc">
        <Container className="hd-img">
          <Col></Col>
          <Col className="align-center" md="auto">
            <div className="d-flex flex-column justify-content-center hd-txt">
              <h1 className="pt-5">Bienvenido a tu zona gamer</h1>
              <strong>
                <p>Encuentra todo lo que necesitas para equiparte y</p>
                <p>¡Diviértete comprando!</p>
              </strong>
              <hr></hr>
            </div>
          </Col>
          <Col lg="2"></Col>
        </Container>
      </div>
      <Container className="py-4">
        <CardComp />
      </Container>
    </>
  );
};

export default Home;
