import './App.css'
import { useState } from "react";
import Card from './components/Card'
function App() {
  const[version] = useState([
    {id:1, member:'FREE',subsription:'$0/month', features:[{
     UserType:"Single User",
     Storage: "50GB Storage",
     Public_Project: "Unlimited Public Projects",
     Community: "Community Access",
     Private_Project: "Unlimited Private Projects",
     Support: "Dedicated Private Support",
     Domain: "Free Subdomain",
     Report: "Monthly Status Reports"
    }]},
    {id:2, member:'PLUS', subsription:'$9/month', features:[{
      UserType:"5 Users",
      Storage: "50GB Storage",
      Public_Project: "Unlimited Public Projects",
      Community: "Community Access",
      Private_Project: "Unlimited Private Projects",
      Support: "Dedicated Private Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports"
     }]},
    {id:3, member:'PRO', subsription:'$49/month',features:[{
      UserType:"Unlimited Users",
      Storage: "50GB Storage",
      Public_Project: "Unlimited Public Projects",
      Community: "Community Access",
      Private_Project: "Unlimited Private Projects",
      Support: "Dedicated Private Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports"
     }]}
])
  return (
    <>
    <div className='card-arrange'>
        <Card version={version} />
     </div>
    </>
  )
}

export default App
