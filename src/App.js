import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
function App() {
  {
    /*https://yourimsurl/api/sectionname/apiname */
  }

  const [firstName, setFirstName] = useState("teste");
  const [lastName, setLastName] = useState("teste");
  const [street, setStreet] = useState("teste");
  const [zipcode, setZipcode] = useState("11451360");
  const [city, setCity] = useState("Guarujá");
  const [state, setState] = useState("SP");
  const [country, setCountry] = useState("Brazil");
  const [phone, setPhone] = useState("123123123");
  const [mobile, setMobile] = useState("+31233344455");
  const [email, setEmail] = useState("edgar@istv@gmail.com.br");
  const [productid, setProductid] = useState(1);
  const [subscriptionlengthinmonsths, setSubscriptionlengthinmonths] = useState(3);
  const [subscriptionlengthindays, setSubscriptionlengthindays] = useState(10);
  const [renewalinterval, setRenewalinterval] = useState(10);
  const [cmsService, setCmsService] = useState("SandBox");
  const [crmService, setcrmService] = useState("ISTV");
  const [apiAut, setApiAut] = useState("32d96810-6e43-431f-8e16-bbc5695cb812");

  const [success, setSuccess] = useState("");

  const registerLead = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "https://istv.imsserver1.tv/api/AddCustomer/addCustomer?firstname=test&lastname=test&street=test&zipcode=test&city=test&state=test&country=India&phone=9876544321&mobile=%2B188855558888&email=testing%40gte.ctes&productid=6&subscriptionlengthinmonths=2&subscriptionlengthindays=0&renewalinterval=2&cmsService=SandBox&crmService=ISTV&authToken=32d96810-6e43-431f-8e16-bbc5695cb812",
        {}
      )
      .then((response) => {
        setSuccess("true");
        console.log(response);
      });
  };

  return (
    <div className="App">
      <form onSubmit={registerLead}>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
