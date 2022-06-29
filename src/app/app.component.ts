import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public title = 'Alticci-Angular';
    public aobaForm: FormGroup;
    public alticci: number[];

    constructor(private fb: FormBuilder, private appService: AppService) {

        this.criarForm();
    }

    ngOnInit() {

        this.loadAlticci(5);
    }

    criarForm() {

        this.aobaForm = this.fb.group({ n: 0 });
    }

    loadAlticci(n: number) {

        this.appService.getAlticci(n).subscribe(

            (alticci: number[]) => {

                this.alticci = alticci;
            },
            (error: any) => {

                console.error(error);
            }
        );
    }

    numSubmit() {

        this.loadAlticci(this.aobaForm.value.n);
    }
}
