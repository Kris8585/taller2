import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-element-admin',
  templateUrl: './element-admin.component.html',
  styleUrls: ['./element-admin.component.css']
})
export class ElementAdminComponent implements OnInit {

  formGroup: FormGroup;
  elementoNombre = '';

  elementoSuscription: Subscription;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private route: ActivatedRoute) {
    this.elementoNombre = this.route.snapshot.params['elementName'];
    this.iniciarElemento();
    if (this.elementoNombre) {
      this.cargarElemento(this.elementoNombre);
     }
  }

  cargarElemento = (nombre: string) => {
    this.elementoSuscription = this.dataService.getElementosByName(nombre).subscribe((elementos) => {

      if (elementos[0]) {
       
        this.formGroup.patchValue({
          descripcion: elementos[0].descripcion,
          nombre: elementos[0].nombre,
          formulas: elementos[0].formulas,
          imagenes: elementos[0].imagenes,
          referencia: elementos[0].referencia,
        });

      }
    });

  }

  agregarImagen = () => {
    (<FormArray>this.formGroup.controls['imagenes']).push(
      new FormControl('', Validators.required)
    );
  }

  iniciarElemento = () => {
    this.formGroup = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      formulas: this.formBuilder.array([this.formBuilder.group({
        titulo: ['', [Validators.required]],
        formula: ['', [Validators.required]]
      })]),
      imagenes: this.formBuilder.array(
        [Validators.required]
      ),
      nombre: ['', [Validators.required]],
      referencia: this.formBuilder.group({
        titulo: ['', [Validators.required]],
        link: ['', [Validators.required]]
      })
    });
  }

  verificarYBorrar = ($event, index) => {
    if ($event.key === "Backspace" && $event.srcElement.value =='') {
      (<FormArray>this.formGroup.controls['imagenes']).removeAt(index);
    } 
  }

  ngOnInit() {
  }

  guardarNuevo = () => {

  }
  actualizar = () => {
    //   if (this.formGroup.valid) {
    //     let noticiaIndex = -1;
    //     const listaNoticias = this.dataStorageService.getObjectValue("noticias");
    //     listaNoticias.forEach((noticia, index) => {
    //       if (noticia.id == this.formGroup.value.id) {
    //         noticiaIndex = index;
    //       }
    //     });

    //     if (noticiaIndex >= 0) {
    //       listaNoticias[noticiaIndex] = this.formGroup.value;
    //     } else {
    //       listaNoticias.push(this.formGroup.value);
    //     }
    //     this.formGroup.patchValue({ "ultimaModificacion": new Date() });

    //     // this.dataStorageService.setObjectValue("noticias", listaNoticias);

    //     alert("Información guardada");
    //   } else {
    //     alert("Debe completar la información correctamente");
    //   }
  }
}
