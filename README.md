- 아래 사이트의 검색영역을 클론하기
    
    [한국임상정보](https://clinicaltrialskorea.com/)
    

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/81d5016d-ca92-494c-a90c-5458ffde01c5/Untitled.png)
    
    - 검색어가 없을 시 “검색어 없음” 표출
        - __value 가 없을 시 api 통신하면 안됨.__
- API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
    - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
    - expire time을 구현할 경우 가산점
    
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
    - README에 전략에 대한 설명 기술
    
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - 사용법 README에 기술