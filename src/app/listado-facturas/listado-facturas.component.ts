import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  // fact=[
  //   {_id:"1",CIF:"S8033567B", Importe:25, Concepto: "co1"},
  //   {_id:"2",CIF:"W2849713I", Importe:15, Concepto: "co2"},
  //   {_id:"3",CIF:"C15578313", Importe:89, Concepto: "co3"},
  //   {_id:"4",CIF:"G61587390", Importe:65, Concepto: "co4"}
  // ]
  fact: any;
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    let url = "http://localhost:8080/facturas";
    this.http.get(url).subscribe(response => {
      this.fact = response;
      console.log(this.fact)
    }, error => {
      console.log(error);
    })
  }

  delete(id) {
    // console.log(id);
    let continueDelete = confirm('¿Desea continuar con la eliminación de esta factura?')
    console.log(continueDelete)
    if(continueDelete){
      let url = "http://localhost:8080/facturas/"+id
      console.log(url);
      
      this.http.delete(url).subscribe(response =>{
        alert(`Se ha borrado la factura nº ${id} exitosamente`)
      }, error=>{ 
        console.error(error);
      })
    }
  }

}
