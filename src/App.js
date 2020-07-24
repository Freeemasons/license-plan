import React from 'react';
import './App.css';
import { Row, Col, Grid } from "react-flexbox-grid";
import Form from "./components/Form";


function App() {



  return (
    <div>

      <Grid fluid>
        <Row>
          <Col lg={8}>
            <Form />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
