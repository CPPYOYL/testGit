import { Injectable ,Inject}    from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { SessionService }      from '../session/session.service';

import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AjaxService{

    private headers = new HttpHeaders().set("Cache-Control","no-store")
                                       .set("Authorization",'Bearer ' + sessionStorage.getItem('9493.access_token'));
    private Url = environment.apiUrl;
	constructor(
        private http: HttpClient,
        private router: Router,
        private session: SessionService,
    ) {  }
	getJson(data) {
        let obj = {};
        data.forEach((e) => { obj[e.name] = this.getMethodFn(e); });
        return obj;
    }

    getMethodFn(e){
        var _self = this;
        let ojb = {
            'get'       : e => this.doGet(e),
            'post'      : e => this.doPost(e),
            'delete'    : e => this.doDelete(e),
            // 'filesaver' : e => this.doFileSaver(e),
        }
        this.session.setTimeFn(new Date());
        return ojb[e.methed](e);
    }
    
    doPost(data){
        return (param) => {
            return this.http.post(this.Url + data.url,param,{headers: this.headers})
            .toPromise().then( (response:any) => {
                this.checkAccessFn(response.status); 
                return response;
            })
            .catch(this.handleError);
        }
    }
    doDelete(data){
        return (param) => {
            var search = new HttpParams();
            if(param){for(let k in param){search = search.set(k,param[k]);}}
            return this.http.delete(this.Url + data.url,{params : search ,headers: this.headers })
            .toPromise().then( (response:any) => {
                this.checkAccessFn(response.status); 
                return response;
            })
            .catch(this.handleError);
        }
    }
    doGet(data){ 
        return (param) => {
            var search = new HttpParams();
            if(param){for(let k in param){search = search.set(k,param[k]);}}
            return this.http.get(this.Url + data.url,{params : search ,headers: this.headers })
            .toPromise().then( (response:any) => {
                this.checkAccessFn(response.status); 
                return response;
            })
            .catch(this.handleError);
        }
        
    }
    
    checkAccessFn(status){
        switch (status) {
          case 401: 
            this.router.navigate(['/main/noaccess']);
            break;
          case 403: 
            this.router.navigate(['/main/Sponsor']);
            break;
        }
    }

    // doFileSaver(data){ 
    //     let _self = this;
        
    //     return function(param){
    //         var search = new URLSearchParams();
    //         if(param){for(let k in param){search.set(k,param[k]);}}

    //         let options = new RequestOptions({
    //             responseType: ResponseContentType.Blob,
    //             search: search,
    //             headers: _self.headers,
    //         });

    //         return _self.http.get(_self.Url + data.url,options)
    //         .toPromise().then(
    //             (response:any) => response['_body'],
    //             error => error.json()
    //         ).catch(_self.handleError);
    //     }   
    // }

	private handleError(error: any){
	    console.error('error : An error occurred');
	    return Promise.reject(error.json());
	}


}
