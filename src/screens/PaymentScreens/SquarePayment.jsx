import  {useState} from 'react'
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import { useSquarePaymentMutation } from '../../services/PaymentServices';
import { v4 as uuidv4 } from 'uuid';

function SquarePayment() {
  const [squarePay]=useSquarePaymentMutation()
  const idempotencyKey = uuidv4();


  const [userDetails, setUserDetails] = useState({
    givenName: '',
    familyName: '',
    address: '',
    city: '',
    countryCode: '',
    Amount:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  console.log(
    'user deatails is here ---->' , userDetails
  )
  const resetUserDetails = () => {
    setUserDetails({
      givenName: '',
      familyName: '',
      address: '',
      apartment: '',
      city: '',
      countryCode: '',
    });
  };


  return (


    <div>
    <h2 className="text-2xl font-bold text-center mb-4">Enter Your Details</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Given Name</label>
        <input 
          type="text" 
          name="givenName" 
          value={userDetails.givenName} 
          onChange={handleInputChange} 
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="John"
        />
      </div>
      <div>
        <label className="block text-gray-700">Family Name</label>
        <input 
          type="text" 
          name="familyName" 
          value={userDetails.familyName} 
          onChange={handleInputChange} 
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="Doe"
        />
      </div>
      <div>
        <label className="block text-gray-700">Address</label>
        <input 
          type="text" 
          name="address" 
          value={userDetails.address} 
          onChange={handleInputChange} 
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="123 Main Street"
        />
      </div>
      <div>
          <label className="block text-gray-700">Apartment</label>
          <input 
            type="text" 
            name="apartment" 
            value={userDetails.apartment} 
            onChange={handleInputChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            placeholder="Apartment 2"
          />
        </div>
        
      <div>
        <label className="block text-gray-700">City</label>
        <input 
          type="text" 
          name="city" 
          value={userDetails.city} 
          onChange={handleInputChange} 
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="London"
        />
      </div>
      <div>
        <label className="block text-gray-700">Country Code</label>
        <input 
          type="text" 
          name="countryCode" 
          value={userDetails.countryCode} 
          onChange={handleInputChange} 
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="GB"
        />
      </div>
      <div>
          <label className="block text-gray-700">Amount</label>
          <input 
            type="text" 
            name="Amount" 
            value={userDetails.Amount} 
            onChange={handleInputChange} 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            placeholder="Add Amount"
          />
        </div>
    </form>

    <div className='mt-4'>
    <PaymentForm

applicationId="sandbox-sq0idb-0g0t89nb8yumqmVD15sLSg"
 locationId="LA6TWN9EWQ215"
cardTokenizeResponseReceived={async(token, buyer) => {
  console.log("Tokenize event triggered");
console.log("Token:", token);
console.log("Buyer:", buyer?.token);
const reponse = await squarePay({sourceId:token?.token , amount:userDetails.Amount , idempotencyKey: idempotencyKey, customerId:buyer?.token.replace('verf:', '')})
if(!reponse.error){
console.log('response' , reponse)
resetUserDetails();
}else{
console.log('error is here' , error)
}
}}
createVerificationDetails={() => ({
  amount: userDetails.Amount,
  billingContact: {
    addressLines: [userDetails.address, userDetails.apartment],
    familyName: userDetails.familyName,
    givenName: userDetails.givenName,
    countryCode: userDetails.countryCode,
    city: userDetails.city,
  },
  currencyCode: 'USD',
  intent: 'CHARGE',
})}


>
<CreditCard />
</PaymentForm>

    </div>
  </div>
  )
}

export default SquarePayment