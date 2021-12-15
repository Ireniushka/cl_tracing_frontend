import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; @Injectable({
providedIn: 'root'
})
export class RestService {

  // Observa que la apiUrl hace referencia a un servidor real, ya que en localhost
  // nos dará un problema con los CORS apiUrl = 'https://allsites.es/api/public/api'; token: any;

  constructor(private http: HttpClient) { }

  getProducts(tok: any) {
  return new Promise(resolve => { this.http.get(this.apiUrl + '/products', {
  headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
  })
  .subscribe(data => { resolve(data);
  }, err => { console.log(err);
  });
  });
  }
  login() {
    return new Promise(resolve => { this.http.post(this.apiUrl + '/login',
    {
      email: 'raul@raul.com', password: '123456'
    })
    .subscribe(data => { this.token = data; resolve(data);
      }, err => { console.log(err);
      });
      });
    }
}
  
