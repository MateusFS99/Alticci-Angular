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
    public form: FormGroup;
    public alticci: number[];

    constructor(private fb: FormBuilder, private appService: AppService) {

        this.criarForm();
    }

    ngOnInit() {

        this.loadAlticci(0);
    }

    criarForm() {

        this.form = this.fb.group({ n: 0 });
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

        this.loadAlticci(this.form.value.n);
    }
}
