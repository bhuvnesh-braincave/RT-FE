export default function TimesheetSummery() {
  return (
    <div class="row">
      <div class="col-xl-12">
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                      <i class="bx bx-copy-alt"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Total Leaves</h5>
                </div>
                <div class="text-muted mt-4 text-center">
                  <h4> 21</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                      <i class="bx bx-archive-in"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Total Holiday</h5>
                </div>
                <div class="text-muted mt-4 text-center">
                  <h4>10 </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                      <i class="bx bx-purchase-tag-alt"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Total Overtime Request</h5>
                </div>
                <div class="text-muted mt-4 text-center">
                  <h4>0</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                      <i class="bx bx-archive-in"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Total Office Shifts</h5>
                </div>
                <div class="text-muted mt-4 text-center">
                  <h4>49</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
    </div>
  );
}
