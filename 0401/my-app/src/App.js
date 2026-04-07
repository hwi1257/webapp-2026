import React from 'react';
import './App.css';

function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '30px', color: 'white', textAlign: 'center' }}>
      <h1>이종휘의 리액트 포트폴리오</h1>
      <p>5주차 과제: 컴포넌트와 Props 연습</p>
    </header>
  );
}

function Profile(props) {
  return (
    <section style={{ padding: '20px', borderBottom: '2px solid #eee', textAlign: 'center' }}>
      <h2>👤 자기소개</h2>
      <p>안녕하세요! 제 이름은 <strong>{props.name}</strong>입니다.</p>
      <p>현재 <strong>{props.major}</strong>를 전공하고 있습니다.</p>
    </section>
  );
}

function About() {
  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h2>📝 학습 목표</h2>
      <p>매주 GitHub에 학습 내용을 기록하며 성장하는 개발자가 되겠습니다.</p>
      <p>이번 과제를 통해 리액트의 컴포넌트 구조를 완벽히 이해했습니다!</p>
    </section>
  );
}

function SkillCard(props) {
  return (
    <div style={{ 
      background: '#f9f9f9', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '10px',
      border: '1px solid #ddd',
      width: '200px'
    }}>
      <h4>⚡ {props.skill}</h4>
      <p>상태: {props.status}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <p>Copyright 2026. Jonghwi all rights reserved.</p>
      <p>Contact: hwi1257@github.com</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* 종휘님 성함으로 Props 전달 ✅ */}
      <Profile name="이종휘" major="소프트웨어학과 & 프로그래밍" />
      
      <About />
      
      <h2 style={{ textAlign: 'center', marginTop: '30px' }}>🛠 나의 보유 기술</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <SkillCard skill="React.js" status="학습 중" />
        <SkillCard skill="GitHub" status="매주 관리 중" />
        <SkillCard skill="JavaScript" status="기초 공부 완료" />
      </div>

      <Footer />
    </div>
  );
}

export default App;