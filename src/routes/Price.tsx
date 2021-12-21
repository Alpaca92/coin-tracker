import styled from "styled-components";

const Container = styled.section`
  article:nth-child(2n) {
    background-color: #070a0a;
  }
`;

const DetailContainer = styled.article`
  background-color: #171b20;
  padding: 25px 20px;
  margin-top: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;

const DetailTitle = styled.h3`
  text-transform: uppercase;
`;

const Detail = styled.p`
  font-weight: 700;
`;

function Price({ tickersData }: any) {
  return (
    <Container>
      <DetailContainer>
        <DetailTitle>ath_price</DetailTitle>
        <Detail>{tickersData?.ath_price}</Detail>
      </DetailContainer>
      <DetailContainer>
        <DetailTitle>percent_change_1h</DetailTitle>
        <Detail>{tickersData?.percent_change_1h}</Detail>
      </DetailContainer>
      <DetailContainer>
        <DetailTitle>percent_change_24h</DetailTitle>
        <Detail>{tickersData?.percent_change_24h}</Detail>
      </DetailContainer>
      <DetailContainer>
        <DetailTitle>percent_change_30d</DetailTitle>
        <Detail>{tickersData?.percent_change_30d}</Detail>
      </DetailContainer>
    </Container>
  );
}
export default Price;
