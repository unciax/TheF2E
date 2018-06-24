import { Component } from '@angular/core';
    
@Component({
    selector: 'chart',
    templateUrl: './chart.component.html'
})
export class ChartComponent {

    public lineChartData:Array<any> = [
        {data: [35833, 36710, 37304, 45028, 48502, 41235, 35066, 36065], label: 'TOTAL REVENUE'},
        {data: [23157, 14577, 13332, 15771, 35184, 33090, 11313, 10398], label: 'TOTAL COST'},
        {data: [12676, 22133, 23972, 29257, 13318, 8145, 23753, 25667], label: 'NET INCOME'}
    ];

    public lineChartLabels:Array<any> = ['1 MAY', '2 MAY', '3 MAY', '4 MAY', '5 MAY', '6 MAY', '7 MAY', '8 MAY'];

    public lineChartOptions:any = {
        responsive: true,
        lineTension: 0
    };

    public lineChartColors:Array<any> = [
        { // TOTAL REVENUE
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(139, 185, 110, 1)',
            pointBackgroundColor: 'rgba(139, 185, 110, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(139, 185, 110, 0.8)'
        },
        { // TOTAL COST
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(206, 95, 88, 1)',
            pointBackgroundColor: 'rgba(206, 95, 88, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(206, 95, 88, 0.8)'
        },
        { // NET INCOME
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 173, 234, 1)',
            pointBackgroundColor: 'rgba(0, 173, 234, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 173, 234, 0.8)'
        }
    ];

    public lineChartLegend:boolean = false;

    public lineChartType:string = 'line';

}