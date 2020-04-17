import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class HelpDeskListViewComponent {
    // cols: any[];

    display = false;

    showDialog() {
        this.display = true;
    }
    
    sampleData = [
        { t_no: '112', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'New' ,updated_date:'04/16/2020'},
        { t_no: '121', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'In progress',updated_date:'04/16/2020' },
        { t_no: 'e3323', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Reopen' ,updated_date:'04/16/2020'},
        { t_no: '4121ss', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration', status: 'Duplicated' ,updated_date:'04/16/2020'},
        { t_no: 'dsasda1', createdData: '04/15/2020', staff_name: 'sample', staff_mail: 'sample@gmail.com',program: 'Reintgration',status: 'Fixed',updated_date:'04/16/2020' },
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

    cols = [
        { field: 't_no', header: 'Tickets Number' },
        { field: 'create_date', header: 'Ticket Creation Date' },
        { field: 's_name', header: 'Staff Name' },
        { field: 's_email', header: 'Staff Email' },
        { field: 'prohram', header: 'Program' },
        { field: 'status', header: 'Status' },
        { field: 'update_date', header: 'Updated Date' }
    ];

    onYearChange(event, sampleData) {
       
        sampleData.filter(event.value, 'status', 'status');
    }
}

