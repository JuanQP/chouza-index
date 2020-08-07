import React from 'react';
import './App.css';
import * as $ from "jquery";
import moment from "moment";
import {Chart} from "chart.js";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Badge, Card, CardTitle, CardText, Toast, ToastHeader, ToastBody } from "reactstrap";
import { threadId } from 'worker_threads';

/**
 * El Twit es del 2 de Mayo, por eso agarramos todas las cotizaciones desde entonces.
 */
const chouzaIndexInicio = moment("01-05-2020", "DD-MM-YYYY").startOf('day');

const tasasPlazoFijo = [
  26.6, // Correspondiente al 02-05-2020
  30.02, // Correspondiente al 02-06-2020
  30.02, // Correspondiente al 02-07-2020
  33.06, // Correspondiente al 02-08-2020
  33.06, // Correspondiente al 02-09-2020
  33.06, // Correspondiente al 02-10-2020
  33.06, // Correspondiente al 02-11-2020
  33.06, // Correspondiente al 02-12-2020
]

interface IAppState extends React.ClassAttributes<App> {
  modalAbout: boolean;
  modalDatos: boolean;
  registros: any[];
};

class App extends React.Component<any, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      modalAbout: false,
      modalDatos: false,
      registros: [],
    }
    this.toggleAboutModal = this.toggleAboutModal.bind(this);
    this.toggleDatosModal = this.toggleDatosModal.bind(this);
  }

  toggleAboutModal() {
    this.setState({
      modalAbout: !this.state.modalAbout,
    });
  }

  toggleDatosModal() {
    this.setState({
      modalDatos: !this.state.modalDatos,
    })
  }

  tasaCorrespondiente(dias: number) {
    const tasaCorrespondiente = Math.floor(dias/30);
    return ((tasasPlazoFijo[tasaCorrespondiente] / 365) / 100);
  }

  componentDidMount() {
    $.get("https://mercados.ambito.com//dolarrava/mep/grafico/anual", (data: []) => {
      const registros = data.slice(1)
      .map((registro) => {
        return {
          fecha: moment(registro[0], "DD-MM-YYYY"),
          cierre: Number(registro[1]),
          ahorro: Number(registro[1]),
          indice: Number(100),
        };
      })
      .filter((registro) => registro.fecha.isAfter(chouzaIndexInicio));

      registros.forEach((r, i, a) => {
        const tasa = this.tasaCorrespondiente(i);
        if(i === 0) {
          a[i].ahorro = a[i].cierre;
          return;
        }

        a[i].ahorro = a[i-1].ahorro * (1 + tasa);
        a[i].indice = Math.round(100 * (100 * (a[i].ahorro / a[i].cierre))) / 100;
      });

      this.setState({
        registros,
      });

      const chart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: registros.map((r) => r.fecha.format("DD-MM-YYYY")),
          datasets: [{
            backgroundColor: "rgba(255,0,0,0.25)",
            borderColor: "red",
            label: 'Chouza Index',
            data: registros.map((r) => r.indice),
            fill: 'start',
          },
          {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "blue",
            label: 'Ahorro en Pesos',
            data: registros.map((r) => Math.round(100 * r.ahorro) / 100),
            hidden: true,
          },
          {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "green",
            label: 'Precio Dólar MEP',
            data: registros.map((r) => Math.round(100 * r.cierre) / 100),
            hidden: true,
          }]
        }
      });
    });
  }

  public render() {
    const {modalAbout, modalDatos} = this.state;
    const indiceHoy = this.state.registros.length === 0 ? 0 : this.state.registros[this.state.registros.length - 1].indice;
    const frenteDolar = this.state.registros.length === 0 ? 0 : Math.round(100 * (indiceHoy - 100)) / 100;
    return (
      <Container>
        <Row className="text-center">
          <Col>
            <h1>Índice Chouza</h1>
            <p><em>(o simplemente un Plazo fijo vs. Dólar)</em></p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="col-md-6 d-flex justify-content-center">
            <Toast>
              <ToastHeader>
                Índice hoy
              </ToastHeader>
              <ToastBody className={"text-monospace text-primary"}>
                {indiceHoy}
              </ToastBody>
            </Toast>
          </Col>
          <Col className="col-md-6 d-flex justify-content-center">
            <Toast>
              <ToastHeader>
                Ahorro vs dólar
              </ToastHeader>
              <ToastBody className={"text-monospace " + (frenteDolar < 0 ? "text-danger" : "text-success")}>
                {frenteDolar}{"%"}
              </ToastBody>
            </Toast>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-12">
            <canvas id="myChart" width="100" height="60"></canvas>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
           <Button color={"primary"} outline={true} onClick={this.toggleAboutModal}>Sobre la página</Button>
           <Button color={"primary"} outline={true} onClick={this.toggleDatosModal}>Sobre el Índice</Button>
          </Col>
        </Row>
        <Modal size="lg" isOpen={modalAbout} toggle={this.toggleAboutModal}>
          <ModalHeader toggle={this.toggleAboutModal}>¿Qué es esto?</ModalHeader>
          <ModalBody>
          <blockquote className="blockquote text-center">
            <p className="mb-0">Es que partís de un error. ¿Querés ahorrar? ¡Ahorrá en pesos!</p>
            <footer className="blockquote-footer">Un economista en <cite title="Source Title">Twitter</cite></footer>
          </blockquote>
          La humilde idea de esta página es mostrar  qué hubiese pasado si un ciudadano argentino promedio hubiese leído ese twit y hubiese decidido hacer un plazo fijo en pesos a la tasa del momento (dicho twit es del 2 de Mayo de 2020, corresponde la TNA de 26,6%) y compararlo contra la evolución del dólar más libre que exista en el momento (el dólar MEP es en este caso).
          </ModalBody>
        </Modal>
        <Modal size="lg" isOpen={modalDatos} toggle={this.toggleDatosModal}>
          <ModalHeader toggle={this.toggleDatosModal}>¿Qué significa este índice?</ModalHeader>
          <ModalBody>
            <p>El índice lo que hacer es comparar un ahorro en pesos y ver su evolución diaria al haber hecho un plazo fijo, y eso compararlo con el mismo ahorro pero si hubiese comprado dólar MEP.</p>
            <p>Si <Badge color="secondary">Índice Chouza=100</Badge> significa que hubiese sido lo mismo hacer un plazo fijo que haber comprado dólares.</p>
            <p>Si <Badge color="success">Índice Chouza{">"}100</Badge>, significa que el ahorro en pesos creció más que si se hubiese dolarizado</p>
            <p>Si <Badge color="danger">Índice Chouza{"<"}100</Badge>, significa que ese ahorro en plazo fijo fue un error, ya que hubiese sido mejor comprar dólar MEP.</p>
            <p>Los datos del dólar MEP es información pública de <a href="https://www.ambito.com/">Ambito.com</a>, y el ahorro en pesos se calcula diariamente en base al plazo fijo realizado el 2 de Mayo de 2020</p>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default App;
