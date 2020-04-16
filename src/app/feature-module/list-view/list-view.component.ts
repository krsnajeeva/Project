import { Component } from '@angular/core';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class HelpDeskListViewComponent {
    sampleData = [
        { t_no: '1', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'New' ,updated_date:'04/16/2020'},
        { t_no: '2', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'In progress',updated_date:'04/16/2020' },
        { t_no: '3', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Reopen' ,updated_date:'04/16/2020'},
        { t_no: '4', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Duplicated' ,updated_date:'04/16/2020'},
        { t_no: '5', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration',status: 'Fixed',updated_date:'04/16/2020' },
        { t_no: '6', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'New' ,updated_date:'04/16/2020'},
        { t_no: '7', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'In progress' ,updated_date:'04/16/2020'},
        { t_no: '8', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Reopen' ,updated_date:'04/16/2020'},
        { t_no: '9', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Duplicated' ,updated_date:'04/16/2020'},
        { t_no: '10', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Fixed',updated_date:'04/16/2020' },
        { t_no: '11', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'New' ,updated_date:'04/16/2020'},
        { t_no: '12', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'In progress',updated_date:'04/16/2020' },
        { t_no: '13', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Reopen' ,updated_date:'04/16/2020'},
        { t_no: '14', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Duplicated' ,updated_date:'04/16/2020'},
        { t_no: '15', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Fixed' ,updated_date:'04/16/2020'},
    ];
}