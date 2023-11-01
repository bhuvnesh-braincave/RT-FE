export default function Table() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <h4>Employees Timesheet</h4>
                                            <small>For the month of June 2023</small>
                                        </div>
                                        <div class="col-md-6" style={{textAlign: "right"}}>
                                            <button class="btn btn-info">CSV</button>
                                            <button class="btn btn-info">Excel</button>
                                            <button class="btn btn-info">PDF</button>
                                            <button class="btn btn-info">CSV</button>
                                        </div>
                                    </div>
                                    <div class="attendance-table" style={{overflow:"scroll"}}>
                                        <table id="datatable" class="table attendance-table table-bordered nowrap" style={{width: "1800px"}}>
                                            <thead>
                                                <tr>
                                                    <th>Employee</th>
                                                    <th>01 Thu</th>
                                                    <th>02 Fri</th>
                                                    <th>03 Sat</th>
                                                    <th>04 Sun</th>
                                                    <th>05 Mon</th>
                                                    <th>06 Tue</th>
                                                    <th>07 Wed</th>
                                                    <th>08 Thu</th>
                                                    <th>09 Fri</th>
                                                    <th>10 Sat</th>
                                                    <th>11 Sun</th>
                                                    <th>12 Mon</th>
                                                    <th>13 Tue</th>
                                                    <th>14 Wed</th>
                                                    <th>15 Thu</th>
                                                    <th>16 Fri</th>
                                                    <th>17 Sat</th>
                                                    <th>18 Sun</th>
                                                    <th>19 Mon</th>
                                                    <th>20 Tue</th>
                                                    <th>21 Wed</th>
                                                    <th>22 Thu</th>
                                                    <th>23 Fri</th>
                                                    <th>24 Sat</th>
                                                    <th>25 Sun</th>
                                                    <th>26 Mon</th>
                                                    <th>27 Tue</th>
                                                    <th>28 Wed</th>
                                                    <th>29 Thu</th>
                                                    <th>30 Fri</th>
                                                    <th>Worked Days</th>
                                                </tr>
                                            </thead>
    
                                            <tbody>
                                                <tr>
                                                   <td>Amanpreeti Kaur</td>
                                                   <td>A</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>A</td>
                                                   <td>A</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>A</td>
                                                   <td>A</td>
                                                   <td>A</td>
                                                   <td>A</td>
                                                   <td>P</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>H</td>
                                                   <td>A</td>
                                                   <td>22</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
