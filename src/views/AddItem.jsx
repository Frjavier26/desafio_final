import Container from 'react-bootstrap/Container';
import Dashboard from '../components/Dashboard';

export default function AddItem() {
  return (
    <>
      <Dashboard />
      <Container className="pb-4">
        <h2 className="text-center txt-violet py-4 mb-4 bg-light d-flex align-items-center justify-content-center">
          Crear publicación
        </h2>
      </Container>
    </>
  );
}
