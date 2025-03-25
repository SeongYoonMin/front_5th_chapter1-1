(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();class i{constructor(t){this.routes=t,this.attachEventHandle(),window.addEventListener("popstate",this.handlePopState.bind(this))}addRoute(t,e){this.routes[t]=e}navigationTo(t){history.pushState(null,"",t),this.handleRoute(t)}handlePopState(){this.handleRoute(window.location.pathname)}handleRoute(t){console.log(`Navigation : ${t}`);const e=this.routes[t];if(!e)throw new r(t);t==="/profile"&&!localStorage.getItem("user")&&this.navigationTo("/login"),t==="/login"&&localStorage.getItem("user")&&this.navigationTo("/"),console.log(`Navigation : ${e}`),t==="/login"?document.getElementById("root").innerHTML=e():document.getElementById("root").innerHTML=m(e())}attachEventHandle(){const t=document.getElementById("root");t.addEventListener("submit",e=>{if(e.preventDefault(),e.target.nodeName==="FORM"&&e.target.id==="login-form"){const a=document.getElementById("username").value;localStorage.setItem("user",JSON.stringify({username:a,email:"",bio:""})),this.navigationTo("/")}if(e.target.tagName==="FORM"&&e.target.id==="profile-form"){const a=document.getElementById("username").value,o=document.getElementById("email").value,s=document.getElementById("bio").value;localStorage.setItem("user",JSON.stringify({username:a,email:o,bio:s})),this.navigationTo("/profile")}}),t.addEventListener("click",e=>{e.target.tagName==="A"&&(e.preventDefault(),e.target.id==="logout"&&(localStorage.removeItem("user"),this.navigationTo("/login")),e.target.pathname.startsWith("/")&&this.navigationTo(e.target.pathname))})}}class r extends Error{constructor(t){super(`Not Found: ${t}`),this.path=t,this.name="HTTP ERROR 404",document.getElementById("root").innerHTML=g()}}const d=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    ${c()}
  `,c=()=>{const l=window.location.pathname;return localStorage.getItem("user")?`<nav class="bg-white shadow-md p-2 sticky top-14" id="NavigationTab">
      <ul class="flex justify-around">
        <li><a href="/" class="${l==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        <li><a href="/profile" class="${l==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
        <li><a href="#" class="text-gray-600" id="logout">로그아웃</a></li>
      </ul>
    </nav>`:`<nav class="bg-white shadow-md p-2 sticky top-14" id="NavigationTab">
      <ul class="flex justify-around">
        <li><a href="/" class="${l==="/"?"text-blue-600":"text-gray-600"}">홈</a></li>
        <li><a href="/login" class="text-gray-600">로그인</a></li>
      </ul>
    </nav>`},u=()=>`
<footer class="bg-gray-200 p-4 text-center">
  <p>&copy; 2024 항해플러스. All rights reserved.</p>
</footer>
`,m=l=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${d()}
    ${l}
    ${u()}
    </div>
  </div>
  `,b=()=>`
<main class="p-4">
  <div class="mb-4 bg-white rounded-lg shadow p-4">
    <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
    <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
  </div>

  <div class="space-y-4">

    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">홍길동</p>
          <p class="text-sm text-gray-500">5분 전</p>
        </div>
      </div>
      <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">김철수</p>
          <p class="text-sm text-gray-500">15분 전</p>
        </div>
      </div>
      <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">이영희</p>
          <p class="text-sm text-gray-500">30분 전</p>
        </div>
      </div>
      <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">박민수</p>
          <p class="text-sm text-gray-500">1시간 전</p>
        </div>
      </div>
      <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">정수연</p>
          <p class="text-sm text-gray-500">2시간 전</p>
        </div>
      </div>
      <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  </div>
</main>
`,g=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,p=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" placeholder="사용자 이름" class="w-full p-2 border rounded" id="username">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded" id="password">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,f=()=>{const{username:l,email:t,bio:e}=JSON.parse(localStorage.getItem("user"));return`
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${l}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${t}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${e}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
`},v={"/":()=>b(),"/profile":()=>f(),"/login":()=>p()},h=new i(v);window.addEventListener("load",()=>{h.handleRoute(window.location.pathname)});
