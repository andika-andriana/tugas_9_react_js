import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Breadcrumb,
  Tabs,
  Tab,
  Spinner,
  Table,
  ProgressBar,
  Pagination,
  Collapse,
  OverlayTrigger,
  Popover
} from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Informasi Website</Popover.Title>
    <Popover.Content>
      Website ini dibuat untuk memudahkan dalam proses pencarian informasi
      terkini tentang berita olahraga
    </Popover.Content>
  </Popover>
);
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      bukaVersi: false
    };
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Berita</Nav.Link>
            <Nav.Link href="/">Live Scores</Nav.Link>
            <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Liga 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Liga 2</NavDropdown.Item>
              <NavDropdown.Item href="/">Liga 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Piala & Liga</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Transfer Pemain</Nav.Link>
            <Nav.Link href="#pricing">Tim</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Container>
          <Row>
            <Col md={{ offset: 8 }}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col md={{ span: 5 }}>
              <h3>Rumor Transfer Pemain</h3>
            </Col>
            <Col md={{ offset: 6 }}>
              <Spinner animation="border" variant="success" />
              <Spinner animation="grow" variant="success" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Semua Transfer">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MARQUANE FELLAINI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td>
                          <ProgressBar animated now={85} label="85%" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LUIS NANI</td>
                        <td>SPORTING CP</td>
                        <td>ORLANDO CITY</td>
                        <td>
                          <ProgressBar animated now={55} label="55%" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td>
                          <ProgressBar animated now={95} label="95%" />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZENIT ST PETERSBURG</td>
                        <td>
                          <ProgressBar animated now={100} label="100%" />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td>
                          <ProgressBar animated now={50} label="50%" />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHEVO</td>
                        <td>
                          <ProgressBar animated now={100} label="100%" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="#" title="Liga Primer Inggris">
                  Liga Primer Inggris
                </Tab>
                <Tab eventKey="#" title="Serie A">
                  Serie A
                </Tab>
                <Tab eventKey="#" title="Divisi Primera">
                  Divisi Primera
                </Tab>
                <Tab eventKey="#" title="Bundes Liga">
                  Bundes Liga
                </Tab>
                <Tab eventKey="#" title="Liga 1 Indondesia">
                  Liga 1 Indondesia
                </Tab>
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={{ span: 1 }}>
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popover}
              >
                <Button variant="primary">Informasi</Button>
              </OverlayTrigger>
            </Col>
            <Col>
              <Button
                trigger="click"
                variant="primary"
                onClick={() =>
                  this.setState({ bukaVersi: !this.state.bukaVersi })
                }
              >
                Versi Website
              </Button>
              <Collapse in={this.state.bukaVersi}>
                <p>Akses Sport V1.0</p>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
