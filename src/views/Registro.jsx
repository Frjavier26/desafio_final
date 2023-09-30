import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Context } from '../Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Stack from 'react-bootstrap/Stack';

function VerticalExample() {
  return (
    <Stack gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default VerticalExample;