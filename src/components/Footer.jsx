import React from 'react';

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 " expand="lg" bg="secondary">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5>GameZone</h5>
          <p>La mejor pagina de accesorios del mundo mundial.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="td-none text-dark">
                Quiénes somos
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="td-none text-dark">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://google.com/" className="td-none text-dark">
        {' '}
        Gamezone.com
      </a>
    </div>
  </footer>
);

export default Footer;
