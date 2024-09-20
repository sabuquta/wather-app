"use client"; // Mark this as a client component for useState and useReducer

import LoginPage from './login/page';
import {Card} from 'antd';
export default function Home() {

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{marginBottom:"20px"}}>Weather App</h1>
      <Card>      
        <LoginPage/>
        </Card>
    </div>
  );
}