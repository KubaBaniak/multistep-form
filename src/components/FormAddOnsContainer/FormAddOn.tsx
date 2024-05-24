import styled from "styled-components"

interface AddOnProps {
  title: string,
  description: string,
  price: string
}

const AddOnContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  border: solid 1px;
  padding: 20px;
  border-radius: 10px;
`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`

`
const AddOnMetaData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const AddOnTitle = styled.span`
  font-weight: 700;
`
const AddOnDescription = styled.span`
  font-weight: 400;
`

const AddOnPrice = styled.div`
  margin-left: auto;
`

export default function AddOn({title, description, price}: AddOnProps) {
  return (
    <AddOnContainer>
      <Checkbox/>
      <AddOnMetaData>
        <AddOnTitle>
          {title}
        </AddOnTitle>
        <AddOnDescription>
          {description}
        </AddOnDescription>
      </AddOnMetaData>
      <AddOnPrice>{price}</AddOnPrice>
    </AddOnContainer>
  )
}
