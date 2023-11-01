import { Card } from "react-bootstrap";

export default function Expenses() {
    return(
        <div class="col-lg-4">
        <div class="text-muted">
            <div class="mb-4">
                <p>This month</p>
                <h4>$2453.35</h4>
                <div>
                    <span class="badge badge-soft-success font-size-12 me-1">
                        + 0.2%
                    </span>
                    From previous period
                </div>
            </div>

            <div>
                <a href="javascript: void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View
                    Details
                    <i class="mdi mdi-chevron-right ms-1"></i></a>
            </div>

            <div class="mt-4">
                <p class="mb-2">Last month</p>
                <h5>$2281.04</h5>
            </div>
        </div>
    </div>

    )
};
