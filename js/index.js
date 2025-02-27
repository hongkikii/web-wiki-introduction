console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim(); // 입력된 댓글 내용

  if (commentText === "") {
    alert("댓글을 입력해주세요.");
    return;
  }

  // 새로운 댓글 항목 생성
  const newComment = document.createElement('li');
  newComment.innerHTML = `
    <div class="comment-item">
      <div class="comment-author">
        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
        <span>방문자</span>
      </div>
      <div class="comment-content">
        ${commentText}
      </div>
    </div>
  `;

  // 댓글 목록에 추가
  const commentList = document.getElementById('comment-list');
  commentList.appendChild(newComment);

  // 댓글 입력창 비우기
  commentInput.value = "";

  // "댓글이 등록되었습니다" 메시지 알림
  alert("댓글이 등록되었습니다.");
}