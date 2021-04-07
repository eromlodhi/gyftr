import React from 'react';
import more from '../../assets/images/more.png';

export default class BrandsSectionFirst extends React.Component{

    render(){
        return(
            <section className="row brandPage pb-3 pb-md-4">
                <div className="col-12 px-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="bg-white px-3 border">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb bg-transparent px-0 m-0 fs-14 fw-600 justify-content-end pb-md-0">
                                        <li className="breadcrumb-item text-uppercase"><a href="index.html">HOME</a>
                                        </li>
                                        <li className="breadcrumb-item text-uppercase"><a href="index.html">Grocery &amp; Home Needs</a>
                                        </li>
                                        <li className="breadcrumb-item text-uppercase active" aria-current="page">More</li>
                                        </ol>
                                    </nav>
                                <div>

                                <div className="pb-3">
                                    <img src={more}/>
                                </div>
                                <h2 className="h6">Buy/Redeem MORE Gift Vouchers &amp; Gift Card</h2>
                                <p className="fs-14 m-0">Owned by More Retail Limited, More stores are hypermarkets for every home need. Customers find groceries, home essentials, cosmetics, fashion essentials, etc under one roof. Choose More Gift Cards and Gift Vouchers for cashless shopping.</p>
                            </div>

                            <div className="productPageCoupon p-3 my-3">
                                <div className="row">
                                    <div className="col-12">
                                        <label className="fs-14 fw-700">Your Promo Code</label>
                                        <div className="row align-items-end pb-1 promoFild">
                                            <div className="col-7 col-md-9 pr-0">
                                                <input type="text" className="form-control text-success" name="" value="SBNPZ"/> 
                                                <a href="#" className="editPromo" title="Edit Promocode"><i className="far fa-edit"></i></a>
                                            </div>
                                            <div className="col-5 col-md-3 pl-0">
                                                <button className="btn btn-outline-success btn-block fs-14 rounded-0">APPLIED</button>
                                            </div>
                                        </div>
                                        <p className="fs-14 m-0 pb-1"><i className="fas fa-check-circle text-success"></i> Promo applied successfully.</p>
                                        <p className="fs-14 m-0 pb-1"><i className="fas fa-times-circle text-danger"></i> Invalid Promo Code.</p>
                                        <p className="fs-14 m-0 pb-1">You got a discount of ₹ 515</p>
                                    </div>
                                </div>
                            </div>

                            <div className="productPageCoupon OrangeBox px-3 py-1 my-3 GreenBox">
                                <div className="row align-items-center">
                                    <div className="col-auto border-right">
                                        <div className="custom-control custom-radio">
                                        <input type="radio" id="SBNPZ" name="customRadio" className="custom-control-input" checked=""/>
                                        <label className="custom-control-label fs-16 fw-600" for="SBNPZ">SBNPZ</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p className="m-0 fs-14">Save ₹ 500 (₹250 instant OFF + ₹250 cashback in PayZapp wallet on applying the code on PayZapp payment page).
                                        <br/> <a href="#" className="text-danger">Terms &amp; Conditions</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="productPageCoupon OrangeBox px-3 py-1 my-3">
                                <div className="row align-items-center">
                                    <div className="col-auto border-right">
                                        <div className="custom-control custom-radio">
                                        <input type="radio" id="SBAMZ" name="customRadio" className="custom-control-input"/>
                                        <label className="custom-control-label fs-16 fw-600" for="SBAMZ">SBAMZ</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p className="m-0 fs-14">Save ₹ 500 (₹250 instant OFF + ₹250 cashback in PayZapp wallet on applying the code on PayZapp payment page).
                                        <br/> <a href="#" className="text-danger">Terms &amp; Conditions</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h5 className="text-uppercase text-muted pb-2">Select Voucher Value (₹)</h5>
                                <table className="table cart-table brand-2 m-0 fs-14">
                                <thead>
                                    <tr className="thead">
                                    <th className="description">Value(₹)</th>
                                    <th className="pa hideOnMobile">Offer</th>
                                    <th className="quantity">Qty</th>
                                    <th className="price">Total(₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="description"><span>100</span>
                                    </td>
                                    <td className="pa hideOnMobile">
                                        <div>
                                        <p>Free Promocode</p>
                                        </div>
                                    </td>
                                    <td className="qty-td">
                                        <div className="define-quantity">
                                        <input type="text" name="quantity" value="1" className="qty"/> <span className="inc button">+</span><span className="dec button">-</span>
                                        </div>
                                        <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                    </td>
                                    <td className="description">
                                        <div><span>90</span>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="description"><span>250</span>
                                    </td>
                                    <td className="pa hideOnMobile">
                                        <div>
                                        <p>Free ₹100 Bata Gift Voucher</p>
                                        </div>
                                    </td>
                                    <td className="qty-td">
                                        <div className="define-quantity">
                                        <input type="text" name="quantity" value="1" className="qty"/> <span className="inc button">+</span><span className="dec button">-</span>
                                        </div>
                                        <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                    </td>
                                    <td className="description">
                                        <div><span>225</span>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td colspan="3" className="pa hideOnDesktop border-0 mobile-offer">
                                        <div>
                                        <p><span className="text-secondary">Offes:</span> Free ₹100 Bata Gift Voucher</p>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="description"><span>500</span>
                                    </td>
                                    <td className="pa hideOnMobile">
                                        <div>
                                        <p>10% Off</p>
                                        </div>
                                    </td>
                                    <td className="qty-td">
                                        <div className="define-quantity">
                                        <input type="text" name="quantity" value="1" className="qty"/> <span className="inc button">+</span><span className="dec button">-</span>
                                        </div>
                                        <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                    </td>
                                    <td className="description">
                                        <div><span>450</span>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="description"><span>1000</span>
                                    </td>
                                    <td className="pa hideOnMobile">
                                        <div>
                                        <p>10% Off</p>
                                        </div>
                                    </td>
                                    <td className="qty-td">
                                        <div className="define-quantity">
                                        <input type="text" name="quantity" value="1" className="qty"/> <span className="inc button">+</span><span className="dec button">-</span>
                                        </div>
                                        <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                    </td>
                                    <td className="description">
                                        <div><span>900</span>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="description"><span>2000</span>
                                    </td>
                                    <td className="pa hideOnMobile">
                                        <div>
                                        <p>10% Off</p>
                                        </div>
                                    </td>
                                    <td className="qty-td">
                                        <div className="define-quantity">
                                        <input type="text" name="quantity" value="1" className="qty"/> <span className="inc button">+</span><span className="dec button">-</span>
                                        </div>
                                        <button type="button" className="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                    </td>
                                    <td className="description">
                                        <div><span>1800</span>
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 topSticky"> <a href="#" data-toggle="modal" data-target="#MobileSummaryPopup" className="MobileSummaryBtn"><span>Summary</span><span>₹ 800</span></a>
                        <div className="DesktopSummary">
                        <div className="SummaryRight shadow-none">
                            <div className="productPageBox px-3">
                            <div className="d-flex py-3 justify-content-between align-items-center">
                                <h3 className="fs-16 fw-700 m-0">SUMMARY</h3>
                            </div>
                            <div className="repaeatBox">
                                <div className="row py-2 border-bottom border-top">
                                <div className="col-12 text-uppercase fw-700 pt-1 text-muted">
                                    <div className="d-flex justify-content-between align-items-center"> <span>VERO MODA</span>
                                    <a href="#" className="text-muted fs-12"><i className="fas fa-trash-alt m-0"></i></a>
                                    </div>
                                </div>
                                <div className="col-8 py-1 fs-14">₹ 1000 <span className="text-success">(X 2)</span>
                                </div>
                                <div className="col-4 py-1 fs-14 text-right">₹ 2000</div>
                                </div>
                                <div className="row py-2 border-bottom border-dot">
                                <div className="col-8 fs-14">Cash Savigs (10%)</div>
                                <div className="col-4 fs-14 text-right">₹ 200</div>
                                </div>
                                <div className="row py-3 border-bottom border-dot">
                                <div className="col-8 fs-14 fw-700">Sub Total</div>
                                <div className="col-4 fs-14 text-right fw-700">₹ 1800</div>
                                </div>
                            </div>
                            <div className="repaeatBox">
                                <div className="row py-2 border-bottom border-top">
                                <div className="col-12 text-uppercase fw-700 pt-1 text-muted">
                                    <div className="d-flex justify-content-between align-items-center"> <span>BATA</span>
                                    <a href="#" className="text-muted fs-12"><i className="fas fa-trash-alt m-0"></i></a>
                                    </div>
                                </div>
                                <div className="col-8 py-1 fs-14">₹ 1000 <span className="text-success">(X 2)</span>
                                </div>
                                <div className="col-4 py-1 fs-14 text-right">₹ 2000</div>
                                </div>
                                <div className="row py-2 border-bottom border-dot">
                                <div className="col-8 fs-14">Cash Savigs (10%)</div>
                                <div className="col-4 fs-14 text-right">₹ 200</div>
                                </div>
                                <div className="row py-3 border-bottom border-dot">
                                <div className="col-8 fs-14 fw-700">Sub Total</div>
                                <div className="col-4 fs-14 text-right fw-700">₹ 1800</div>
                                </div>
                            </div>
                            <div className="row m-0 py-2 bg-dark text-white rounded my-3">
                                <div className="col-7 fs-18 fw-500">Net Payable</div>
                                <div className="col-5 fs-18 fw-500 text-right text-nowrap">₹ 3600</div>
                            </div>
                            </div>
                            <div className="productPageBox px-3 mt-3 mt-md-4">
                            <div className="pt-3">
                                <div className="custom-control custom-checkbox fs-14 py-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" checked=""/>
                                <label className="custom-control-label" for="customCheck1">I agree to the <a href="#" data-toggle="modal" data-target="#tc" className="text-danger">Terms and Conditions</a>
                                </label>
                                </div>
                            </div>
                            <div className="py-2">
                                <button type="button" className="btn btn-danger btn-block mb-2 fs-14" data-toggle="modal" data-target="#tcConfirmation">BUY NOW</button>
                                <button type="button" className="btn btn-outline-danger btn-block mb-2 fs-14" data-toggle="modal" data-target="#tcConfirmation">ADD TO CART</button>
                            </div>
                            <div className="pb-3 fs-12">We accept Credit Card, Debit Card, Netbanking, EMIs, Wallets</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}