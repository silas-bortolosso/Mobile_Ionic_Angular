import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pais : any =""
  universidade: any =""
  resultado : any =[]



  constructor(private http:HttpClient) {

  }
  pesquisar(){
    
    let URL = `http://universities.hipolabs.com/search?name=${this.universidade}&country=${this.pais}`
    this.http.get(URL).subscribe((response)=> {
      this.resultado = response
      console.log(URL)
    })

  }

}

 


  


