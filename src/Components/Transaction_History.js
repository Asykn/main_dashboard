import "../Style/Transaction_History.css"

const Transaction_History = () => {
    return (
        <>
        <div className="column-tran">
            <div className="container-tran">
                <div>
                    <div className="title-tran">
                        All Transaction History 
                        {/* <img src={require('../images/rectangle.png')} /> */}
                        <button className="search" type="button">Show: Last 30 days <img src={require('../images/rectangle.png')} /></button>
                        <input className="dropdown" type="text" placeholder="Search" name="search"></input>
                    </div>
                    <div className="trans-head">
                        <div className="desc_title">DESCRIPTION</div>
                        <div className="date_title">DATE</div>
                        <div className="amount_title">AMOUNT</div>
                    </div>
                    <div className="trans-data">
                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require("../images/du.png")} />
                                    DuitNow QR Bizbox Cafe Sdn Bhd 745194971 Payment
                                </div>
                            </li>
                            <li className="date">23 Jan 2020</li>
                            <li>
                                <div className="amount">
                                <p className="negative">-RM 10,000,000.00</p> 
                                </div>
                            </li>
                            <li>...</li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require("../images/du.png")} />
                                    SME First Account
                                </div>
                            </li>
                            <li className="date">23 Apr 2020</li>
                            <li>
                                <div className="amount">
                                <p className="negative">-RM 10,000,000.40</p> 
                                </div>
                            </li>
                            <li>...</li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    Timothy and Brother Fresh Fruit Sdn Bhd
                                </div>  
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="negative">-RM 99,900.00</p> 
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    Genting Commodities Trading Sdn Bhd
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="negative">-RM 20,000.00</p> 
                                </div>
                            </li>
                            <li>...</li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    DuitNow QR Bizbox Sdn Bhd DuitNow QR Bizbox
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="positive">RM 5,000,000.00</p> 
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    Timothy and Brother Fresh Fruit Sdn Bhd
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="positive">RM 570,000.00</p> 
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    Timothy and Brother Fresh Fruit Sdn Bhd
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="positive">RM 10,000,000.00</p> 
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    SME First Account
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="positive">RM 6,003.40</p> 
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    Timothy and Brother Fresh Fruit Sdn Bhd
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="positive">RM 10,000,000.00</p> 
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className="desc">
                                    <img src={require('../images/du.png')} />
                                    SME First Account
                                </div>
                            </li>
                            <li className="date">23 Jan 2021</li>
                            <li>
                                <div className="amount">
                                    <p className="positive">RM 6,003.40</p> 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Transaction_History;