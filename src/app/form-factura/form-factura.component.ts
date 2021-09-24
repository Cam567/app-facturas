import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  factura:any  = {
    _id: "",
    cif: "",
    importe: "",
    concepto: ""
  }
  facturaId: number
  txtBoton: String

  constructor(
    private path: ActivatedRoute,
    private route: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.path.params.subscribe(data => {
      this.facturaId = data.facturaId;

      this.txtBoton = (this.facturaId != undefined) ? "Actualizar" : "Guardar"
      // console.log(this.facturaId);

      if (this.facturaId != undefined) {
        console.log("Editar factura");
        let url = "http://localhost:8080/facturas/" + this.facturaId
        // console.log(url)
        this.http.get(url).subscribe(response => {
          this.factura = response
        }, error => {
          console.error(error);
        })
      }
    });
  }

  onSubmit(f: NgForm) {
    if (this.facturaId != undefined) {
      // editar factura
      let jsonData = {
        _id: this.facturaId,
        cif: f.value.cif,
        importe: f.value.importe,
        concepto: f.value.concepto
      }
      console.log("editar oferta")

      let url = "http://localhost:8080/facturas/"+this.facturaId
      this.http.put(url, jsonData).subscribe(response => {
        console.log("Ok")
      }, error => {
        console.error(error);
      });
    }
    else {
      let jsonData = {
        cif: f.value.cif,
        importe: f.value.importe,
        concepto: f.value.concepto
      }
      // crear factura
      console.log("crear oferta")
      let url = "http://localhost:8080/facturas"
      this.http.post(url, jsonData, {responseType: 'json'}).subscribe(response => {
        console.log("Ok")
      }, error => {
        console.error(error);
      });
      console.log(jsonData);
    }
    this.route.navigateByUrl("/facturas")

  }

  navigateBack() {
    this.route.navigateByUrl("/facturas")
  }
}
