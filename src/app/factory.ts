import { Injectable }    from '@angular/core';
import { AjaxService }   from "./ajax.service";

@Injectable()
export class Factory{
    constructor(private Ajax:AjaxService) {}
    getService(){
        return this.Ajax.getJson([
                        {
                            name    : "GetCompany",
                            url     : "Company",
                            methed  : "get"
                        },
                    ]);
    }

}
