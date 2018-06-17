import { Component, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HttpRequestService } from '../shared-service/http-request.service';
import { ApiConfigService } from '../shared-service/api-config.service';
import { parseString } from 'xml2js';
import { StationModel } from './station-model';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var ts: any;

@Component({
  selector: 'filter',
   templateUrl: './filter.component.html',
   styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    constructor(@Inject(HttpRequestService) private httpService: HttpRequestService,
                @Inject(ApiConfigService) private apiConfig: ApiConfigService,
                @Inject(Renderer2) private renderer: Renderer2,
                @Inject(FormBuilder)private fb: FormBuilder) { }

    @ViewChild("pLoader") pageLoader: ElementRef;

    public items: StationModel[] = [];
    public filterItems: StationModel[] = [];
    public paggingItems: StationModel[] = [];
    public itemPerPage: number = 20;
    public currentPage: number = 1;
    public totalPage: number[] = [];
    public currentCount: number = 0;

    public filterLocation;

    public filterForm: FormGroup;

    ngOnInit() {
        this.filterForm = this.fb.group({
            stationName: ''
        });
    }

    ngAfterViewInit() {
        ts('.ts.dropdown:not(.basic)').dropdown();
        this.getStationStatusFromApi(this);
    }

    public getStationStatusFromApi(ref: any) {
        ref.showDimmer();
        ref.httpService.httpGetXml(this.apiConfig.cbikeStationStatus).subscribe(
            result => {
                parseString(result.text(), (error, result) => {
                    ref.convert(ref, result.BIKEStationData.BIKEStation[0].Station);
                    ref.filterAndPagging(ref);
                })
            },
            error => {
                console.log(error);
            },
            () => {
                ref.hideDimmer();
            }
        );
    }

    private showDimmer() {
        this.renderer.addClass(this.pageLoader.nativeElement, "active");
    }

    private hideDimmer() { 
        this.renderer.removeClass(this.pageLoader.nativeElement, "active");
    }

    private convert(ref: any, datas: any) {
        for(var data of datas) {
            var item = new StationModel();
            item.convert(data);
            ref.items = ref.items.concat(item);
        }
    }
    public filterAndPagging(ref: any) {
        // Filter
        ref.filterItems = ref.items;

        let filterStationName = this.filterForm.controls.stationName;
        if (filterStationName != null && filterStationName.value != "") {
            ref.filterItems = ref.filterItems.filter(x => x.stationName.indexOf(filterStationName.value) != -1);
        }

        // create pagging item
        let totalPageCount = 
            (ref.filterItems.length - (ref.filterItems.length % ref.itemPerPage)) / ref.itemPerPage;

        if ((ref.filterItems.length % ref.itemPerPage) > 0) {
            totalPageCount += 1;
        }


        ref.totalPage = [];

        for (let i = 1 ; i <= totalPageCount ; i++) {
            ref.totalPage = ref.totalPage.concat(i);
        }

        // Pagging
        var begin = ref.itemPerPage * (ref.currentPage - 1);
        var end = ref.itemPerPage * (ref.currentPage);
        if (end > ref.filterItems.length) {
            end = ref.filterItems.length;
        }

        ref.paggingItems = ref.filterItems.slice(begin, end);
        ref.currentCount = ref.filterItems.length;
    }

    public changePage(ref: any, page: number) {
        ref.currentPage = page;
        ref.filterAndPagging(ref);
        console.log(ref.currentPage);
    }
}