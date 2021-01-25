# TensorFlow.js 

TensorFlow.js란? 

<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/tensorflowLogo.png">
자바스크립트로 머신 러닝 모델을 개발 및 학습시키고 브라우저나 Node.js에 배포하는 라이브러리다.

<br>
<br>
<br>
<br>

# 첫번째 강의 남의 모델을 사용하여 이미지 분류해보기

이미지를 넣어 그 이미지가 무엇인지를 분별하는 모델을 가져와 사용해 보았다. 
<br>
<br>
<br>
<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/dog.jpg">
<br>
<br>
<br>
강아지사진을 들고와서 테스트 했지만 웹서버가 구비되지않으면 결과가 나오지 않는다, 강의에서는 정확히 사진에 개 종류에 대해 분별해 낸다.
<br>
<br>
<br>
<br>
<br>


# 두번째 강의 레몬에이드개수 구하기 

<br>
온도가 21,22,23,24일때 
필요한 레몬 개수는 42,44,46,48개 정도 필요로한다 이것을 데이터로 기계에게 100번 학습 시켰을때

<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/first100play.PNG">

<br>
결과가 정확하지 않았다. 그래서 10000번 학습을 시키니

<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/10000play.PNG">

결과와 거의 일치한 값이 나오게 된다.

그 다음은 학습한 기계에게 다음주온도를 제공하였다,
15,16,17,18도룰 주었을때 

<br>
<br>

<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/endLearnandPlay.PNG">

으로 결과가 일치하게 된다.

# 3번째 강의 보스톤 집값구하기. (여러개의 종속변수와 하나의 독립변수)

여러가지 종속변수이다보니 원인개수의 값에 1이 아닌 그 행의 개수를 넣어주어야 
모델에 모양이 맞게 된다.

코드를 3000번 실행시키고 난후 
가중치와 변향의 값을 구해 보았다.

<br>
<br>
<br>
<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/housePrice.PNG">

그 외에 종속변수값을 12개를 주고 독립변수에 값을 2가지를 주는 경우도 하였다.

<br>
이 문제를 해결할때도 원인의 개수와 결과의 개수를 바꿔주어야 된다.

똑같이 가중치와 변향의 수를 구해주었다.

<br>
<br>
<br>
<img src="https://github.com/yeonghoon123/Study-tensorflow.js/blob/main/gitimages/housePriceMore.PNG">
