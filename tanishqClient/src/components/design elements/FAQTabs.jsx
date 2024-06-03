import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "react-bootstrap/Accordion";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const FAQTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",

        height: 500,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className="w-25 me-5"
      >
        <Tab label="Order Delivery and Shopping" {...a11yProps(0)} />
        <Tab label="My Account" {...a11yProps(1)} />
        <Tab label="Payment " {...a11yProps(2)} />
        <Tab label="Returns and Exchanges" {...a11yProps(3)} />
        <Tab label="International Shipping" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0} className="w-100">
        <h3 className="fw-bold">Order Delivery and Shopping</h3>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How can I know the status of my order?
            </Accordion.Header>

            <Accordion.Body>
              All users have the option to track their orders by clicking on
              Track Order. The user has to enter the email address used while
              placing the order and the order number to track the order. <br />{" "}
              <br />
              Registered users can Signin and track their orders from order
              history section in the account page.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What happens if my order is lost in transit?
            </Accordion.Header>
            <Accordion.Body>
              In the unlikely event that an order gets lost during transit, we
              wait for 15 days to track your lost order and if we are still
              unsuccessful, then we process your refund through the payment mode
              that you had opted for at the time of placing the order.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Where do you deliver within India?
            </Accordion.Header>
            <Accordion.Body>
              Currently we deliver to selected cities within India. Please check
              if we deliver to your pincode/city by entering your it in the
              product page/shopping/cartcheckout page. If there is no courier
              service available in your area/city, we apologize for the
              inconvenience caused.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              I live outside India. Can I order for something to be delivered in
              India?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you can order for something to be delivered in India as long
              as you provide a valid shipping address within India. Also, kindly
              note that we deliver only to selected cities within India. To
              check whether we deliver to your desired area/city kindly enter
              your pincode in the product page/shopping cart page/checkout page.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Do I need to pay shipping delivery charges?
            </Accordion.Header>
            <Accordion.Body>
              There are no shipping/ delivery charges within India. For
              information on shipping charges for international orders please
              see the Shipping and Handling Charges section under Shipping
              Policy section
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          
      </TabPanel>
      <TabPanel value={value} className="w-100" index={1}>
        <Accordion>
          <h3 className="fw-bold">My Account</h3>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Do I need to register to be able to shop at www.tanishq.co.in?
            </Accordion.Header>

            <Accordion.Body>
              No, you can shop as a guest on www.tanishq.co.in if you do not
              want to register on this website. However, we strongly recommend
              that you register on www.tanishq.co.in as it makes your checkout
              faster, allows you to track your order, save products that
              interest you to a wishlist (which you may access at a later time)
              and provides a better shopping experience. If you would like to
              register, click here.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I edit my personal details?</Accordion.Header>
            <Accordion.Body>
              You can edit your personal details by accessing the “edit details”
              section in Personal information section.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I have multiple accounts linked to the same email ID?
            </Accordion.Header>
            <Accordion.Body>
              No, you can have only one account linked to a single e-mail
              address.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Are the personal details that I have shared with you secure?
            </Accordion.Header>
            <Accordion.Body>
              We understand that your privacy is important to you and we respect
              that. We ensure you that we will maintain complete confidentiality
              of the details that you have shared with us. You can refer to our
              Privacy Policy tab.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} className="w-100" index={2}>
        <Accordion>
          <h3 className="fw-bold">Payments</h3>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What are the payment options available?
            </Accordion.Header>

            <Accordion.Body>
              Domestic Orders Payments can be made through credit cards, debit
              cards, international cards, net banking or cash on delivery.
              Please note that payments on www.tanishq.co.in will be accepted
              only in INR for domestic orders. In case of international credit
              cards, the transaction amount will be converted to INR before the
              payment is accepted. Currency conversion charges may apply based
              on your credit card policy. International Orders Payments for
              International Orders are accepted through PayPal Payment gateway
              either by your PayPal account or by using International
              credit/debit cards only. For orders being shipped outside India,
              the payment will be accepted only in US Dollars. For international
              orders, currency conversion rates will apply according to the
              prevailing exchange rates on the day of placing the order. For
              shipments being sent outside India, Prices will include all the
              applicable taxes in India and the shipping and handling charges.
              For International Orders you will be required to send us
              government-issued photo Identity proof preferably: a Driving
              License b Passport NOTE : Indian issued cards will not be accepted
              for international orders.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              Which credit cards are accepted for domestic and international
              payments?{" "}
            </Accordion.Header>
            <Accordion.Body>
              We accept Visa | MasterCard | AMEX | Diners | JCB for domestic and
              international payments.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Which domestic debit cards are accepted?
            </Accordion.Header>
            <Accordion.Body>
              RuPay Debit Cards These cards are accepted at all ATMs and most
              PoS machines, and can be used for contactless payments. Visa Debit
              cards These cards are widely accepted, and Visa has partnered with
              many Indian banks. MasterCard debit cards These cards are accepted
              worldwide, and have access to over 900,000 ATMs and more than a
              million retailers. SBI Platinum International Debit card This card
              allows cash withdrawals up to ₹2 lakh per day, and online
              transactions of up to ₹5 lakh. Visa Classic Debit card This card
              is issued to all SB, current, and OD (overdraft) account holders,
              and has a maximum ATM cash withdrawal limit of ₹15,000 per day.
              Visa Platinum Debit card This card is issued by Vijaya Bank, and
              is valid for domestic usage only. ICICI Bank This bank offers a
              variety of cards that are widely accepted both in India and
              abroad.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Accepted Domestic Banks for Payment through Net Banking?
            </Accordion.Header>
            <Accordion.Body>
              Axis Bank / Bank of Baroda / Bank of India / Bank of Maharashtra /
              Canara Bank / Central Bank of India / Dhanlaxmi Bank / Federal
              Bank / HDFC Bank / ICICI Bank /
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} className="w-100" index={3}>
        <h3 className="fw-bold">Returns and Exchanges</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I cancel my order?</Accordion.Header>

            <Accordion.Body>
              Orders once placed can only be cancelled prior to shipment. Refer
              cancellation policy
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              In case I change my mind about the size picked up, can I replace
              the order?
            </Accordion.Header>
            <Accordion.Body>
              Yes, it is possible to return the unused product and order for a
              replacement. Please refer to the Return Policy for details. Please
              note that returns/replacements are not applicable for
              International Orders. Although there are few exceptions. To know
              further about it kindly refer to the International Order section
              of Return Policy
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What do I do if I receive the wrong product?
            </Accordion.Header>
            <Accordion.Body>
              You can call us on 1800-266-0123 and write to
              ecomsupport@titan.co.in to report the incident and cancel the
              order. If you want to return the product, please do not use it. We
              will arrange for the pick-up of the unused wrong item from the
              provided address through our logistic partner and arrange for the
              refund. For more details, refer to the Return Policy section. For
              international orders, please check the International Order section
              under Return Policy.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              The product that I received was damaged and I want to return it.
              What do I do?
            </Accordion.Header>
            <Accordion.Body>
              In the unlikely event that the product delivered is in damaged
              condition, you can return the product unused and in the same
              condition as you received it, in its original packaging, along
              with the invoice for a refund. We will arrange for the order to be
              collected from the provided address through our logistic partner
              and returned to us. Please refer to Return policy for details.
              Call us on 1800-266-0123 or write to ecomsupport@titan.co.inwithin
              7 days of receipt of the product to report the incident. For
              international orders, please check the International Order section
              under Return Policy.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item
            eventKey="
          4"
          >
            <Accordion.Header>What is the return policy?</Accordion.Header>
            <Accordion.Body>
              You can return the product unused and in the same condition as you
              received it, in its original packaging, along with the invoice for
              a refund. We will arrange for the order to be collected from the
              provided address through our logistic partner and returned to us.
              We shall process the refund only after the receipt of the product
              at our location in unused condition and in its original packaging
              along with its original tags and invoice, failing which refund may
              not be possible. Please refer to Return policy for details.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} className="w-100" index={4}>
        <h3 className="fw-bold">International Shipping</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Which are the International Shipping Destinations covered?
            </Accordion.Header>

            <Accordion.Body>
              Australia | Bahrain | Canada | Germany | Italy | Kenya | Kuwait |
              Malaysia | Netherlands | New Zealand | Oman | Portugal | Qatar |
              Romania | Saudi Arabia | Singapore | South Africa | Spain | United
              Arab Emirates | United Kingdom | United States of America
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is the minimum order value for an International Order?
            </Accordion.Header>
            <Accordion.Body>
              For all international orders, your cart value should be minimum of
              $50 and maximum of $10000.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What products are excluded from international delivery?
            </Accordion.Header>
            <Accordion.Body>
              Gift Cards, Gold Coins, Silver Coins, Silver Jewellery and Loose
              Stones
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Which mode of payment option is available for International
              Orders?
            </Accordion.Header>
            <Accordion.Body>
              Payments are accepted through PayPal Payment gateway either by
              your PayPal account or by using International credit/debit cards
              only. Payment will be received only in USD. Please note that cards
              (credit or debit) issued in India will not be accepted for any
              international orders. We would like to inform the following steps
              needs to be followed before reaching the payment gateway using
              your internationally issued credit card / debit card. "Select
              Payment Method International Issued Cards PAY FOR YOUR ORDER"
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item
            eventKey="
          4"
          >
            <Accordion.Header>Who is the shipping partner?</Accordion.Header>
            <Accordion.Body>
              Our international shipping partner is UPS.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </TabPanel>
    </Box>
  );
};

export default FAQTabs;
