import ins from "axios"

export const getAllClaims = () => {
return [
{policy_number: 901000000, claim_number: "4567890213", claim_amount: 2843, claim_date: "2022-01-31", status_code: 0, claim_type: "PROPERTY"},
{policy_number: 902000000, claim_number: "4567890214", claim_amount: 7922, claim_date: "2021-02-01", status_code: 3, claim_type: "AUTO"},
{policy_number: 903000000, claim_number: "4567890215", claim_amount: 5564, claim_date: "2022-02-01", status_code: 1, claim_type: "AUTO"},
{policy_number: 904000000, claim_number: "4567890216", claim_amount: 6982, claim_date: "2022-02-02", status_code: 0, claim_type: "PET"},
{policy_number: 905000000, claim_number: "4567890217", claim_amount: 530, claim_date: "2020-01-31", status_code: 0, claim_type: "AUTO"},
{policy_number: 906000000, claim_number: "4567890218", claim_amount: 250, claim_date: "2020-02-01", status_code: 2, claim_type: "AUTO"},
{policy_number: 907000000, claim_number: "4567890219", claim_amount: 7000, claim_date: "2022-06-01", status_code: 5, claim_type: "PET"},
{policy_number: 908000000, claim_number: "4567890220", claim_amount: 150, claim_date: "2022-02-02", status_code: 2, claim_type: "AUTO"},
{policy_number: 909000000, claim_number: "4567890221", claim_amount: 10000, claim_date: "2020-01-31",status_code: 3, claim_type: "PROPERTY"},
{policy_number: 910000000, claim_number: "4567890222", claim_amount: 3897, claim_date: "2017-02-01", status_code: 5, claim_type: "PROPERTY"},
{policy_number: 911000000, claim_number: "4567890223", claim_amount: 500, claim_date: "2017-02-01", status_code: 1, claim_type: "AUTO"},
{policy_number: 912000000, claim_number: "4567890224", claim_amount: 4710, claim_date: "2017-02-02", status_code: 0, claim_type: "PET"}
 ]
}
//add transaction: POST /api/claim
//update           PUT api/claim/142645
export const addNewClaim = (claim) =>
{
 return axios({url : "http://localhost:8080/api/claim",
 method:"POST",
 headers: {"Accept" : "application/json", "Content-Type":"application/json"},
 data : claim
 })
}
