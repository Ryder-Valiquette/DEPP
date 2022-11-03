import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Button, Alert, Breadcrumb, BreadcrumbItem, Card, CardImg } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Img src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" />
          <Card.Body>
            <Card.Title style={{color: "#000"}}>
              Card Example
            </Card.Title>
            <Card.Text style={{color: "#000"}}>
              Cards example
            </Card.Text>
            <Button variant="primary">Button</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <BreadcrumbItem>Test1</BreadcrumbItem>
          <BreadcrumbItem>Test2</BreadcrumbItem>
          <BreadcrumbItem>Test3</BreadcrumbItem>
        </Breadcrumb>
        <Alert variant="success">get a load of this cat</Alert>
        <Button>Test</Button> 
      </header>
    </div>
  );
}

export default App;
