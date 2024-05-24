import styled from "styled-components";
import FormSidebarStep from "../FormSidebarStep/FormSidebarStep";
import bgSidebar from "../../assets/images/bg-sidebar-desktop.svg";

const SidebarContainer = styled.div`
  height: 100%;
  width: 35%;
  max-width: 300px;
  background-image: url(${bgSidebar});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
`;
export default function FormSidebar() {
  return (
    <SidebarContainer>
      <FormSidebarStep stepNumber={1} stepDescription="YOUR INFO" />
      <FormSidebarStep stepNumber={2} stepDescription="SELECT PLAN" />
      <FormSidebarStep stepNumber={3} stepDescription="ADD-ONS" />
      <FormSidebarStep stepNumber={4} stepDescription="SUMMARY" />
    </SidebarContainer>
  );
}
