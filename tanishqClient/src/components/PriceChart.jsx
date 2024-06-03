import React from "react";


const PriceChart = ({data}) => {
  return (
    <div className="py-lg-5 py-sm-2 ">
      <div className="container">
        <div>
          <div className="fw-bold py-lg-4 py-sm-2 d-flex justify-content-between">
            <div>Component</div>
            <div>Gold Rate(18KT)</div>
            <div>Weight (g)</div>
            <div>Discount</div>
            <div>Final Value</div>
          </div>
          <hr/>
          <div className=" py-lg-4 py-sm-2 d-flex justify-content-between">
            <div>{data.product.purity == "18 Karat" ? "18KT Plain Gold" : "22KT Plain Gold"} Plain Gold</div>
            <div>{data.product.purity == "18 Karat" ? "Rs 5159.45/g" : "Rs 6353/g"}</div>
            <div>{data.product.gross_weight
}g</div>
            <div>-</div>
            <div>Rs 8657.56</div>
          </div>
          <div className=" py-lg-4 py-sm-2 d-flex justify-content-between">
            <div>Stone Detail</div>
            <div>-</div>
            <div>1.715 ct/ 0.343 g</div>
            <div>-</div>
            <div>Rs 25995.81</div>
          </div>
          <div className=" py-lg-4 py-sm-2 d-flex justify-content-between">
            <div>Making Charges</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>Rs 8617.00</div>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <div>Sub Total</div>
            <div>-</div>
            <div>
              2.021g
              <br />
              (Gross Weight)
            </div>
            <div>-</div>
            <div>Rs 43270.37</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>GST</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>Rs 1298.11</div>
          </div>
          <div className="fw-bold py-lg-4 py-sm-2 d-flex justify-content-between">
            <div className="float-left font-b">Grand Total</div>
            <div></div>
            <div></div>
            <div></div>
            <div className="float-right font-b">Rs {data.product.price}</div>
          </div>
        </div>
        <div className="d-lg-none d-block">
          <p className="prd-rate"> 18KT Gold Rate/Gram = Rs 5159.45/g</p>
          <div className="fw-bold d-flex justify-content-between">
            <div>Component</div>
            <div className="float-right mob-rgt-cls">Final Value</div>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <div>18KT Plain Gold</div>
            <div className="float-right mob-rgt-cls">Rs 8657.56</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>Stone Detail</div>
            <div className="float-right mob-rgt-cls">Rs 25995.81</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>Making Charges</div>
            <div className="float-right mob-rgt-cls">Rs 8617.00</div>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <div>Sub Total</div>
            <div className="float-right mob-rgt-cls">Rs 43270.37</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>GST</div>
            <div className="float-right mob-rgt-cls">Rs 1298.11</div>
          </div>
          <div className="fw-bold d-flex justify-content-between">
            <div className="float-left font-b">Grand Total</div>
            <div className="float-right mob-rgt-cls font-b">Rs 44568</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
