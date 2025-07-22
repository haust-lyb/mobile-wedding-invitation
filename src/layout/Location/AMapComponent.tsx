import { useEffect, useRef } from 'react';
import AMapLoader from "@amap/amap-jsapi-loader";
import styled from '@emotion/styled';
import jsondata from 'data.json';
import Address from '@/layout/Location/Address.tsx';

const AMapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    AMapLoader.load({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      key: jsondata.mapInfo.key,             // 申请的高德Key
      version: '2.0',                // 高德地图 JS API 版本
      plugins: ['AMap.Scale', 'AMap.ToolBar'],  // 需要使用的插件列表
    })
      .then((AMap) => {
        if (!mapContainer.current) return;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        const mapInstance = new AMap.Map(mapContainer.current, {
          center: [jsondata.mapInfo.lat, jsondata.mapInfo.lon],  // 上海经纬度
          zoom: 13,
        });

        // 添加比例尺插件
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        mapInstance.addControl(new AMap.Scale());
        // 添加工具条插件
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        mapInstance.addControl(new AMap.ToolBar());

      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  const destination = {
    lat: jsondata.mapInfo.lat,
    lon: jsondata.mapInfo.lon
  };
  // 点击导航按钮，调用高德导航
  const handleNavigate = () => {
    // 调用高德地图导航URL Scheme，优先打开App，没装则打开网页版
    // const webUrl = `amapuri://route/plan/?dlat=${destination.lat}&dlon=${destination.lon}&dname=${encodeURIComponent("河南省安阳市内黄县梁庄镇南李庄村")}&dev=0&t=0`;
    // const webUrl = `https://uri.amap.com/navigation?to=${destination.lat},${destination.lon}&mode=car&callnative=1`;
    const webUrl = `https://uri.amap.com/navigation?to=${destination.lat},${destination.lon},${encodeURIComponent("河南省安阳市内黄县梁庄镇南李庄村")}&mode=car&policy=0&src=mypage&coordinate=gaode&callnative=1`;

    console.log(webUrl);
    // 先尝试打开App（Scheme），如果失败，可以考虑fallback打开webUrl
    // 这里只用location.href，调用App或跳网页版会由系统处理
    // window.location.href = urlScheme;
    window.location.href = webUrl;

    // 如果你想做更复杂的检测是否打开App失败，需用更多逻辑，这里简单写
  };

  return (
    <ContentsWrap>
      <Address></Address>
      <div
        ref={mapContainer}
        style={{ width: '100%', height: '25vh'}}
      ></div>
      <NavButton onClick={handleNavigate}>一键导航</NavButton>
    </ContentsWrap>
  );
};

const NavButton = styled.button`
  margin-top: 16px;
  padding: 10px 20px;
  background-color: #108ee9;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #0b7ed0;
  }
`;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default AMapComponent;
