import MainPage from "../../../Components/Common/MainPage";

export default function DatabseBackup() {
    return(
        <MainPage title={"Database Backup"}>
            <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4>Add New Backup Log</h4>
                                    <p class="card-title-desc" style={{textAlign: "right"}}>
                                        <button class="btn btn-primary text-right">
                                            Create Backup
                                        </button>
                                        <button class="btn btn-primary text-right">
                                            Delete Old Backup
                                        </button>
                                    </p>

                                    <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Database File</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>backup_23-06-2023_12_12_25.sql.gz</td>

                                                <td>

                                                    <a class="download"><i class="fas fa-cloud-download-alt"></i></a>
                                                    <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
        </MainPage>
    )
};
