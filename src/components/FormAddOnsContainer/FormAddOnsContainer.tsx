import styled from "styled-components"
import AddOn from "./FormAddOn"

const addOns = [
  {title: 'Online service', description:'Access to multiplayer games', price:'+1$/mo'},
  {title: 'Larger storage', description:'Extra 1TB of cloud save', price:'+2$/mo'},
  {title: 'Customizable profile', description:'Custom theme on your profile', price:'+2$/mo'},
]

const AddOnsSection = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default function AddOnsContainer() {
  return (
    <AddOnsSection>
      {addOns.map(addOn => (
        <AddOn title={addOn.title} description={addOn.description} price={addOn.price} />
      ))}
    </AddOnsSection>
  )
}
