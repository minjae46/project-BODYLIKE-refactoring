import React from 'react';
import './ProductInfo.scss';
import { useRef } from 'react';

const ProductInfo = ({ ProductInfoImg }) => {
  const homeRef = useRef();
  const onHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="productInfo">
      <ul className="productInfoTap">
        <li className="InfoTap">상품 정보</li>
        <li className="reviewTap" onClick={onHomeClick}>
          리뷰
        </li>
      </ul>
      <div>
        <div className="productInfoImg">
          <img alt="productInfoImg" src={ProductInfoImg} />
        </div>
      </div>
      <div className="productInfoText">
        <div>
          <h3>상품결제정보</h3>
          <h4>
            고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
            있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등
            정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할
            수 있습니다.
          </h4>
          <h4>
            무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
            가까운 은행에서 직접 입금하시면 됩니다.
          </h4>
          <h4>
            주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
            7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
          </h4>
        </div>
        <div>
          <h3>배송정보</h3>
          <li>배송 방법 : 택배</li>
          <li>배송 지역 : 전국지역</li>
          <li>배송 비용 : 3,000원</li>
          <li>배송 기간 : 1일 ~ 3일</li>
          <li>
            배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야
            하는 경우가 있습니다. 고객님께서 주문하신 상품은 입금 확인후 배송해
            드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수
            있습니다.
          </li>
          <h3> - 군부대로 주문시 참고 사항</h3>
          <li>사전에 한진택배의 출입 가능 여부를 확인 바랍니다.</li>
          <li>
            한진택배의 출입이 불가할 경우, 물건을 맡길 수 있는 위병소 위치로
            주소지 기재바랍니다.
          </li>
          <li>
            *주의사항 : 사서함 주소를 넣으면 한진택배 영업소에서 배송 자체가
            되지 않으니, 이 점 주문 시 참고 부탁 드립니다.
          </li>
          <h3>- 주문 전 필독사항</h3>
          <li>상품 포장 시간</li>
          <li>
            주문해주신 상품은 평일 오후2시 물류센터에서 상품포장 및 발송작업이
            시작됩니다.
          </li>
          <li>
            *주의사항 : 사서함 주소를 넣으면 한진택배 영업소에서 배송 자체가
            되지 않으니, 이 점 주문 시 참고 부탁 드립니다.
          </li>
          <h3>- 주문 전 필독사항</h3>
          <li>상품 포장 시간</li>
          <li>
            주문해주신 상품은 평일 오후2시 물류센터에서 상품포장 및 발송작업이
            시작됩니다.
          </li>
          <li>
            '배송준비중' 상태일 경우, 제품포장 및 발송작업이 완료되었기 때문에
            주문취소가 불가합니다.(단, '상품준비중'상태일 경우 취소가능)
          </li>
          <li>당일 출고 기준</li>
          <li>
            평일 오후 1시 30분까지 결제완료 된 건에 한하여 당일출고 됩니다.
          </li>
          <li>
            수령까지는 출고일 다음날로부터 1일-3일 가량 소요됩니다.(토요일,
            일요일, 공휴일 제외)
          </li>
          <li>주문 전 필독사항</li>
          <li>
            주문해주신 상품은 평일 오후2시 물류센터에서 상품포장 및 발송작업이
            시작됩니다.
          </li>
          <li>
            '배송준비중' 상태일 경우, 제품포장 및 발송작업이 완료되었기 때문에
            주문취소가 불가합니다.(단, '상품준비중'상태일 경우 취소가능)
          </li>
        </div>
        <div>
          <h3>교환 및 반품 정보</h3>
          <h2>교환 및 반품이 가능한 경우</h2>
          <li>
            - 상품을 공급 받으신 날로부터 7일이내 단, 가전제품의 경우 포장을
            개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이
            불가능합니다.
          </li>
          <li>
            - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 다르게
            이행된 경우에는 공급받은 날로부터 3월이내, 그사실을 알게 된 날로부터
            30일이내
          </li>
          <h2>교환 및 반품이 불가능한 경우</h2>
          <li>
            - 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단,
            상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
          </li>
          <li>
            - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우 (예 :
            가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터,
            디지털 카메라 등의 불량화소에 따른 반품/교환은 제조사 기준에
            따릅니다.)
          </li>
          <li>
            - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한
            경우 단, 화장품등의 경우 시용제품을 제공한 경우에 한 합니다.
          </li>
          <li>
            - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히
            감소한 경우
          </li>
          <li>
            - 복제가 가능한 상품등의 포장을 훼손한 경우 (자세한 내용은
            고객만족센터 1:1 상담을 이용해 주시기 바랍니다.)
          </li>
        </div>
      </div>
      <div ref={homeRef} />
    </div>
  );
};

export default ProductInfo;
