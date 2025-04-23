<div align="center">
    <img width="100%;" src='/docs/images/em_thumbnail.png' alt='로고 이미지'/>
</div>

# 목차

- [✨ 서비스 소개](#-서비스-소개)
- [👨🏻‍💻 함께한 팀원](#-함께한-팀원)
- [✨ 시스템 아키텍처](#-시스템-아키텍처)
- [✨ 기술 스택](#-기술-스택)
- [🔭 주요 기능](#-주요-기능)
- [📚 참고 문서](#-참고-문서)

# ✨ 서비스 소개✨

> _"위치 기반 감정 소통 서비스, 이음"_

🕰️ **진행 기간** : _2025. 02.24 ~ 2025. 04 .11 **(7주)**_

서비스 설명

### ✅ 주요 기능 summary

| 기능                   | 설명                                                             |
| ---------------------- | ---------------------------------------------------------------- |
| 1️⃣ 로그인              | 서비스 이용을 위한 인증 기능                                     |
| 2️⃣ 이음글 작성 및 조회 | 현재 나의 위치를 기반으로 이음글을 작성하고 조회할 수 있는 기능  |
| 3️⃣ AI 감정 분석        | 이음글을 작성 시 작성한 이음글의 감정을 분석하여 추가해주는 기능 |
| 4️⃣ 비속어 필터링       | 이음글을 작성 시 비속어를 필터링하여 작성할 수 있는 기능         |
| 5️⃣ 이음악 추천         | 나의 감정에 어울리는 음악을 추천해주는 기능                      |
| 6️⃣ 감정 리포트         | 나의 한달 감정 리포트를 조회할 수 있는 기능                      |
| 7️⃣ 나만의 감정 캘린더  | 나의 기록을 캘린더를 통해 확인할 수 있는 기능                    |

# 👨🏻‍💻 함께한 팀원 및 역할 분담

|                                       전종우                                        |                                     박창조                                      |                                     박민경                                      |                                   엄예림                                    |                                    김수민                                     |                                     배승호                                      |
| :---------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| [![](https://github.com/jinlaove17.png?width=150px)](https://github.com/jinlaove17) | [![](https://github.com/pcjo1202.png?width=150px)](https://github.com/pcjo1202) | [![](https://github.com/mmmmingb.png?width=150px)](https://github.com/mmmmingb) | [![](https://github.com/yenzip.png?width=150px)](https://github.com/yenzip) | [![](https://github.com/shoomon.png?width=150px)](https://github.com/shoomon) | [![](https://github.com/initmumu.png?width=150px)](https://github.com/initmumu) |
|                                         FE                                          |                                       FE                                        |                                       FE                                        |                                     BE                                      |                                    BE, AI                                     |                                  BE, AI, Infra                                  |

<table style="width: 100%;">
    <tr>
        <th style="width: 20%;">이름</th>
        <th style="width: 80%;">역할</th>
    </tr>
    <tr>
        <td>전종우</td>
        <td>- 이음글 조회 <br> - 지도 클러스터링 <br> - 음악 관련 기능 <br> - 이음악 추천 페이지</td>
    </tr>
    <tr>
        <td>박창조</td>
        <td>- 로그인 페이지 <br> - 이음글 작성 <br> - 감정 리포트 <br> - 이용약관 <br> - Google Analytics</td>
    </tr>
    <tr>
        <td>박민경</td>
        <td>- 나만의 감정 캘린더 <br> 마이페이지 <br> - 온보딩 페이지</td>
    </tr>
    <tr>
        <td>엄예림</td>
        <td>- DB 설계 <br> - 인증/인가 <br> - 음악 API  <br> - 이미지 처리 <br> - 이음글 조회</td>
    </tr>
    <tr>
        <td>김수민</td>
        <td>- DB 설계 <br> - 감정 분석</td>
    </tr>
    <tr>
        <td>배승호</td>
        <td>- AI 감정 분석 <br> - AI 비속어 필터링  <br> - CI/CD 구축</td>
    </tr>
</table>

# ✨ 시스템 아키텍처

<div style="width: 100%; "><img src='/docs/images/em_architecture.png' alt='시스템 아키텍처'/></div>

# ✨ 기술 스택

_**👍🏻 Frontend**_

![vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-339933?style=for-the-badge&logo=pnpm&logoColor=white)
![React](<https://img.shields.io/badge/React(19.0.0)-61DAFB?style=for-the-badge&logo=React&logoColor=white>)
![Mattermost](<https://img.shields.io/badge/typescript(5.7.3)-3178C6?style=for-the-badge&logo=typescript&logoColor=white>)
![reactrouter](<https://img.shields.io/badge/reactrouter(7.1.3)-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white>)
![tailwindcss](<https://img.shields.io/badge/tailwindcss(4.0.0)-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white>)
![zustand](<https://img.shields.io/badge/zustand(5.0.3)-AF001E?style=for-the-badge&logo=zustand&logoColor=white>)
![Tanstack query](<https://img.shields.io/badge/Tanstack_query(5.64.2)-FF4154?style=for-the-badge&logo=reactquery&logoColor=white>)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![googleanalytics](https://img.shields.io/badge/googleanalytics-E37400?style=for-the-badge&logo=googleanalytics&logoColor=white)
![chartjs](https://img.shields.io/badge/chartjs-FF6384?style=for-the-badge&logo=chartjs&logoColor=white)
![lodash](https://img.shields.io/badge/lodash-3492DB?style=for-the-badge&logo=lodash&logoColor=white)

**👍🏻 Backend**

![gradle](https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white)
![springboot](https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![springsecurity](https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![spring_JPA](https://img.shields.io/badge/spring_JPA-6DB33F?style=for-the-badge&logo=spring_JPA&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=Redis&logoColor=white)

**👍🏻 Data/AI**

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=MongoDB&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-7589BE?style=for-the-badge&logo=Qdrant&logoColor=white)

**👍🏻 DevOps**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white)
![nginx](https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![amazonec2](https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)

**👍🏻 CI/CD**

![Jenkins](https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)

**👍🏻 협업 Tool**

![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)
![Mattermost](https://img.shields.io/badge/mattermost-4B5562?style=for-the-badge&logo=mattermost&logoColor=white)
![figma](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![gitlab](https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)

<div align="center">
    <img width="100%;" src='/docs/images/em_introduce.gif' alt='서비스 소개 gif'/>
</div>

# 🔭 주요 기능

<details>
<summary>

## 1️⃣ 로그인

![](https://img.shields.io/badge/FE-박창조-31A8FF) ![](https://img.shields.io/badge/BE-엄예림-7dd581)

</summary>

> _"서비스 이용을 위한 인증 기능"_

- kakao OAuth 2.0 로그인 기능
- 토큰 만료 시 자동 로그인 기능

<div align="left">
    <img width="30%;" src='/docs/images/em_login.gif' alt='로그인'/>
</div>
</details>

<details>
<summary>

## 2️⃣ 이음글 조회

![](https://img.shields.io/badge/FE-전종우-31A8FF) ![](https://img.shields.io/badge/BE-김수민-7dd581) ![](https://img.shields.io/badge/BE-엄예림-7dd581)

</summary>

> _"현재 나의 위치를 기반으로 이음글을 조회할 수 있는 기능"_

- Naver Map API를 통해 현재 위치를 조회하고 이음글을 작성할 수 있는 기능
- 클러스터링 기능을 통해 비슷한 위치의 이음글을 묶어서 조회할 수 있는 기능
- 공감 기능을 통해 좋아요를 누른 이음글을 조회할 수 있는 기능
- 정렬 (최신순, 공감순, 조회순) 기능

<div align="left">
    <img width="30%;" src='/docs/images/em_map.gif' alt='이음글'/>
</div>
</details>

<details>
<summary>

## 3️⃣ 이음글 작성 - 현재 위치 조회 및 이음글 작성

![](https://img.shields.io/badge/FE-박창조-31A8FF) ![](https://img.shields.io/badge/BE-김수민-7dd581)

</summary>

> _"이음글을 작성 시 현재 위치를 조회하여 이음글을 작성할 수 있는 기능"_

- 현재 위치를 기반으로 작성하되, 정확한 위치를 찾지 못할 경우 조정하는 기능
- 현재 GPS 기준 반경 50m 이내에서 조정하여 작성 하도록 제한

<div align="left">
    <img width="30%;" src='/docs/images/em_gps_write.gif' alt='현재 위치 조회'/>
</div>

</details>

<details>
<summary>

## 4️⃣ 이음글 작성 - 음악 삽입

![](https://img.shields.io/badge/FE-전종우-31A8FF) ![](https://img.shields.io/badge/BE-엄예림-7dd581)

</summary>

> _"이음글을 작성 시 음악을 삽입할 수 있는 기능"_

- Spotify API를 통해 음악을 삽입할 수 있는 기능

<div align="left">
    <img width="30%;" src='/docs/images/em_music.gif' alt='음악 삽입'/>
</div>
</details>

<details>
<summary>

## 5️⃣ 이음글 작성 - AI 감정 분석

![](https://img.shields.io/badge/FE-박창조-31A8FF) ![](https://img.shields.io/badge/AI-배승호-7dd581)

</summary>

> _"이음글을 작성 시 작성한 이음글의 감정을 분석하여 추가해주는 기능"_

- AI 모델을 통해 작성한 글의 내용을 분석하여 6가지의 감정으로 분석

<div align="left">
    <img width="30%;" src='/docs/images/em_ai_emotion.gif' alt='AI 감정 분석'/>
</div>
</details>

<details>
<summary>

## 6️⃣ 이음글 작성 - 비속어 필터링

![](https://img.shields.io/badge/FE-박창조-31A8FF) ![](https://img.shields.io/badge/AI-배승호-7dd581)

</summary>

> _"이음글을 작성 시 비속어를 필터링하여 작성할 수 있는 기능"_

- AI 모델을 통해 작성한 글의 내용을 분석하여 비속어 필터링

<div align="left">
    <img width="30%;" src='/docs/images/em_bad_word.gif' alt='비속어 필터링'/>
</div>
</details>

<details>
<summary>

## 7️⃣ 이음악 추천

![](https://img.shields.io/badge/FE-전종우-31A8FF) ![](https://img.shields.io/badge/BE-김수민-7dd581)

</summary>

> _"나의 감정에 어울리는 음악을 추천해주는 기능"_

- 나의 주요 감정과 유사도 높은 음악 추천
- 백터 데이터베이스에서 유사도를 계산하여 추천
- PIP 재생 기능

<div align="left">
    <img width="30%;" src='/docs/images/em_music_recommend.gif' alt='이음악 추천'/>
    <img width="30%;" src='/docs/images/em_music_player.gif' alt='이음악 플레이어'/>
</div>
</details>

<details>
<summary>

## 8️⃣ 감정 리포트

![](https://img.shields.io/badge/FE-박창조-31A8FF) ![](https://img.shields.io/badge/BE-김수민-7dd581)

</summary>

> _"나의 한달 감정 리포트를 조회할 수 있는 기능"_

<div align="left">
    <img width="30%;" src='/docs/images/em_emotion_report.gif' alt='감정 리포트'/>
</div>
</details>

<details>
<summary>

## 9️⃣ 나만의 감정 캘린더

![](https://img.shields.io/badge/FE-박민경-31A8FF) ![](https://img.shields.io/badge/BE-김수민-7dd581)

</summary>

> _"나의 기록을 캘린더를 통해 확인할 수 있는 기능"_

<div align="left">
    <img width="30%;" src='/docs/images/em_calendar.gif' alt='나만의 감정 캘린더'/>
</div>
</details>

<details>
<summary>

## 🔟 기타

</summary>

| Not Found 페이지 ![](https://img.shields.io/badge/FE-전종우-31A8FF) | 이용약관 관리 ![](https://img.shields.io/badge/FE-박창조-31A8FF) ![](https://img.shields.io/badge/BE-엄예림-7dd581) | 온보딩 페이지 ![](https://img.shields.io/badge/FE-박민경-31A8FF)            |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| <img width="70%;" src='/docs/images/em_404.jpg' alt='404'/>         | <img width="100%;" src='/docs/images/em_terms.gif' alt='이용약관'/>                                                 | <img width="100%;" src='/docs/images/em_onboarding.gif' alt='소개 페이지'/> |
| _존재하지 않는 페이지에 접속 시_                                    | _이용약관을 관리하는 기능_                                                                                          | _서비스 첫 화면_                                                            |

</details>

<details>
<summary>

## ✅ AI 활용 기능

</summary>

### 1️⃣ 감정 분석

🔴 기능 설명

- 사용자가 이음글을 작성하면, **"감정 분석 모델"** 이 자동으로 감정을 분류
- 기본 분류 결과는 UI 상에 자동 표시되며, 사용자는 필요 시 직접 감정을 수정(라벨링)할 수 있음
- 사용자의 수정 이력(입력 텍스트 + 모델 감정 + 사용자 선택 감정)은 별도 저장되어 감정 분류 모델의 재학습 데이터로 활용 별도 저장되어 감정 분류 모델의 재학습 데이터로 활용

🔴 도입 목적

- 모델의 초기 분류 결과에 대한 사용자 피드백을 자연스럽게 수집
- 사용자 중심의 정제된 감정 데이터셋 확보
- 지속적인 학습을 통해 개인화 및 문맥 인식 성능 향상

🔴 활용 예시

- 감정 분류 모델 Fine-tuning 시, 사용자 수정 데이터를 고신뢰 라벨로 활용
- 감정 카테고리 추가 시, 실제 사용자 선택 데이터를 기반으로 초기 학습

### 2️⃣ 비속어 필터링

🔴 기능 설명

- 사용자가 이음글을 작성하면, **"비속어 필터링 모델"** 이 자동으로 비속어를 필터링
- 기본 필터링 결과는 UI 상에 자동 표시되며, 사용자는 필요 시 직접 비속어를 수정(라벨링)할 수 있음

🔴 도입 목적

- 사용자 중심의 정제된 비속어 데이터셋 확보
- 지속적인 학습을 통해 비속어 분류 성능 향상

</details>

# 📚 참고 문서

## 📊 ERD

<div align="center">
    <img width="100%;" src='/docs/images/em_erd.png' alt='ERD'/>
</div>

## 🎨 디자인 시스템

<div align="center">
    <img width="100%;" src='/docs/images/em_design.png' alt='디자인 시스템'/>
</div>

## 🎥 서비스 소개 영상

[서비스 소개 영상 ↗️](/docs/videos/em_introduce.MP4)

<div align="center">
    <video src="/docs/videos/em_introduce.MP4" controls width="100%"></video>
</div>

## 🎵 서비스 주제가 (AI 생성)

[서비스 주제가 ↗️](/docs/videos/em_Our_emotions.mp3)

<div align="center">
    <audio src="/docs/videos/em_Our_emotions.mp3" controls width="100%"></audio>
</div>

## 📝 프로젝트 짧은 회고

| 이름   | 내용                                                                                                                                                                                                                                                                                                                                                                                           |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 박창조 | _"서비스를 운영하고 피드백을 받는 것을 처음으로 진행해본 프로젝트였기에 큰 애정을 가지고 개발에 임할 수 있었습니다. 서비스를 운영하는 과정에서 감사한 많은 피드백을 통해 가독성 측면과, 버튼을 누르는 행위 등 사용자 경험을 어떻게 하면 더 개선할 수 있을지 배울 수 있었습니다. 더불어 개발 과정에서 성능 최적화까지 고민하며 기술적인 측면에서도 한걸은 더 성장할 수 있었던 시간이었습니다."_ |
| 박민경 | _"좋은 팀원들과 재미있는 아이디어를 구현해볼 수 있어서 즐거웠습니다! React를 처음 사용하여 프로젝트를 구현하면서, 어려움을 겪기도 했었는데 팀원들의 도움으로 무사히 마칠 수 있었습니다. 예정보다 늦어진 배포로 많은 사용자 피드백을 받지는 못했지만, 그래도 사용자 피드백을 받았기 때문에 앞으로는 이를 반영하여 구현해보고 싶습니다."_                                                        |
| 엄예림 | _"서비스 배포 과정에서 수집된 사용자 피드백 덕분에 개선해야 할 점과 강점을 명확히 인식하며, 앞으로의 발전 방향을 구체적으로 재정립할 수 있는 값진 교훈을 얻었습니다."_                                                                                                                                                                                                                         |
| 김수민 | _"프로젝트를 진행하며 어려운 점도 많았지만 팀원들 덕분에 잘 마무리 할 수 있었던 것 같습니다. 더 해보고 싶은 기능도 있었고 아쉬움이 남는 부분도 있지만, 결과적으로는 예쁜 프로젝트 잘 완성한 것 같아서 뿌듯합니다. 다음 프로젝트에서는 이번 프로젝트의 경험을 바탕으로 더 재밌고 좋은 서비스 만들어보고 싶습니다!"_                                                                             |
| 배승호 | _"빠른 개발 주기와 배포를 위해 초기에 애자일 개발 프레임워크를 도입하였는데, 체계가 없어보였던 애자일이 의외로 상당히 정교한 일정관리가 필요하다는 것을 알 수 있었습니다. 좌충우돌 애자일 개발기였지만, 이번 프로젝트에서 겪은 경험이 다음 프로젝트에서 더 나은 성과를 위한 초석이 될 것 같아 뜻 깊은 시간이었습니다."_                                                                        |
| 전종우 | _"내용"_                                                                                                                                                                                                                                                                                                                                                                                       |
