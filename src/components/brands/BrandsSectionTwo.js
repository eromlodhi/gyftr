import React from 'react';

export default class BrandsSectionTwo extends React.Component{

    render(){
        return(
            <section className="row impIns pb-3 pb-md-4">
                <div className="container">
                    <div className="bg-white border">
                        <div className="row m-0 bg-white ImportantInstructions align-items-center">
                            <div className="col-md-6 col-12 py-3 py-md-4 bg-light">
                                <h3 className="fs-16 text-uppercase">Important Instructions</h3>
                                <ul className="fs-14 m-0 ImportantInstructionsList">
                                <li>Multiple Gift Vouchers <span>CAN</span> be used in one bill.</li>
                                <li>Gift Vouchers <span>CAN</span> be used during Sale.</li>
                                <li>Gift Vouchers <span>ACCEPTED</span> at all Listed Outlets.</li>
                                <li className="dont">Gift Vouchers <span>CANNOT</span> be used Online.</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-5 px-md-4 px-lg-5 col-12 py-3">
                                <div className="pb-3">
                                    <div className="d-flex w-100 storeFinder align-items-center">
                                        <div className="form-group w-100 m-0">
                                        <input type="text" className="form-control" name="" placeholder="Store Locator"/>
                                        </div>
                                        <button type="button" className="btn rounded-0 border-bottom fs-14 py-1 sls" data-toggle="modal" data-target="#StoreLocator"><i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-outline-secondary text-uppercase rounded-0 btn-block" data-toggle="modal" data-target="#tc">Terms &amp; Conditions</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         
        );
    }
}