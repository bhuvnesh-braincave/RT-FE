
export default function MainPage({title,children}) {
  let year = new Date().getFullYear();
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
        

        
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">{title}</h4>
              </div>
            </div>
          </div>
          {children}
          
          <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                                
                           {year} © Braincave HRMS.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by
                                <a href="https://braincavesoft.com/" target="_blank">Braincave Software Private
                                    Limited</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
      </div>
    </div>
  );
}
