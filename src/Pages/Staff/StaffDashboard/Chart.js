import AreaChart from "./Chart/AreaChart";

export default function Chart() {
    return(
        <div class="card">
                                <div class="card-body">
                                    <div class="d-flex flex-wrap align-items-start">
                                        <h5 class="card-title me-2">Visitors</h5>
                                        <div class="ms-auto">
                                            <div class="toolbar d-flex flex-wrap gap-2 text-end">
                                                <button type="button" class="btn btn-light btn-sm">
                                                    ALL
                                                </button>
                                                <button type="button" class="btn btn-light btn-sm">
                                                    1M
                                                </button>
                                                <button type="button" class="btn btn-light btn-sm">
                                                    6M
                                                </button>
                                                <button type="button" class="btn btn-light btn-sm active">
                                                    1Y
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="row text-center">
                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <p class="text-muted mb-1">Today</p>
                                                <h5>1024</h5>
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <p class="text-muted mb-1">This Month</p>
                                                <h5>12356 <span class="text-success font-size-13">0.2 % <i class="mdi mdi-arrow-up ms-1"></i></span></h5>
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="mt-4">
                                                <p class="text-muted mb-1">This Year</p>
                                                <h5>102354 <span class="text-success font-size-13">0.1 % <i class="mdi mdi-arrow-up ms-1"></i></span></h5>
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="mb-4"/>

                                    <AreaChart/>
                                </div>
                            </div>
    )
};
