//youtube
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
  //"player라는 아이디값을 가진 요소를 찾게된다"
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8", //반복재생할 영상의 ID 목록
    },
    events: {
      onReady: function (event) {
        //익명의 함수 실행
        event.target.mute(); //음소거
      },
    },
  });
}
