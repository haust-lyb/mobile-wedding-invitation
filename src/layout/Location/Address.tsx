import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle>{title}</PointTitle>
            <Caption onClick={() => handleCopy(desc)}>{desc}</Caption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

const handleCopy = (address: string) => {
  if (!navigator.clipboard?.writeText) {
    alert('抱歉，您的浏览器不支持复制功能，请手动复制。');
    return;
  }
  navigator.clipboard.writeText(address).then(
    () => {
      alert('地址已复制.😉😉');
    },
    () => {
      alert('复制地址失败.🥲🥲');
    },
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
