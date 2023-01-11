import './App.css';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import ClaimsTable from './components/ClaimsTable';
import ClaimDetail from './components/ClaimDetail';

import { useState } from 'react';
import AddClaim from './components/AddClaim';
function App() {
const [SelectedClaim, setSelectedClaim] = useState(null);
const [SearchClaim, setSearchClaim] = useState(null);
//setSelectedClaim(SelectedClaim);
return (
<div>
<Menu />
    <AddClaim />
    <Search SearchClaim = {SearchClaim}/>
    <ClaimsTable setSelectedClaim={setSelectedClaim}/>
    {SelectedClaim != null && <ClaimDetail claim={SelectedClaim} />}
    </div>
    );
}
export default App;