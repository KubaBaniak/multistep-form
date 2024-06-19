import styled from "styled-components";

const SummaryTotalContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const SummaryTotalText = styled.p`
  color: hsl(231, 11%, 63%);
`;

const SummaryTotalPrice = styled.p`
  color: hsl(243, 100%, 62%);
  font-weight: bold;
  font-size: 20px;
`;

export default function SummaryTotal({ totalPrice }: { totalPrice: number }) {
  return (
    <SummaryTotalContainer>
      <SummaryTotalText>Total (per month)</SummaryTotalText>
      <SummaryTotalPrice>{`+${totalPrice}/mo`}</SummaryTotalPrice>
    </SummaryTotalContainer>
  );
}
