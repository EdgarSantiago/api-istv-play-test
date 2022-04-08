import './App.css';
import React, { useState } from 'react'
import axios from 'axios'

function App() {
    {/*https://yourimsurl/api/sectionname/apiname */}

  const [firstName, setFirstName] = useState("Edgar")
  const [lastName, setLastName] = useState("Santiago")
  const [street, setStreet] = useState("Adoniran")
  const [zipcode, setZipcode] = useState("11451360")
  const [city, setCity] = useState("Guarujá")
  const [state, setState] = useState("SP")
  const [country, setCountry] = useState("Brazil")
  const [phone, setPhone] = useState("33236905")
  const [mobile, setMobile] = useState("+31233344455")
  const [email, setEmail] = useState("edgar@istv@gmail.com.br")
  const [productid, setProductid] = useState(1)
  const [subscriptionlengthinmonsths, setSubscriptionlengthinmonths] = useState(3)
  const [subscriptionlengthindays, setSubscriptionlengthindays] = useState(10)
  const [renewalinterval, setRenewalinterval] = useState(10)
  const [cmsService, setCmsService] = useState("SandBox")
  const [crmService, setcrmService] = useState("ISTV")
  const [apiAut, setApiAut] = useState("32d96810-6e43-431f-8e16-bbc5695cb812")

  
  const [success, setSuccess] = useState("")

  const registerLead = async event =>  {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
    await axios
    .post("https://istv.imsserver1.tv/api/AddCustomer/addCustomer", {
      firstName:  firstName,
      lastName: lastName,
      street: street,
      zipcode: zipcode,
      city: city,
      state: state,
      country: country,
      phone: phone,
      mobile: mobile,
      email: email,
      productid: productid,
      subscriptionlengthindays: subscriptionlengthindays,
      subscriptionlengthinmonsths: subscriptionlengthinmonsths,
      renewalinterval: renewalinterval,
      cmsService: cmsService,
      crmService: crmService,
      authToken: apiAut
    })
    .then((response) => {
      setSuccess("true");
      console.log(response)
    });

  }

  return (
    <div className="App">
      <form onSubmit={registerLead}>
        <button type="submit">Testar</button>
      </form>
    </div>
  );
}

export default App;
