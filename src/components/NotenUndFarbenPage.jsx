import React from 'react';
import APIIntegrationScreenshot from './APIIntegrationScreenshot.png'; // Replace with your API integration screenshot
import TutorialScreenshot from './TutorialScreenshot.png'; // Replace with your tutorial screenshot
import MiniGamesScreenshot from './MiniGamesScreenshot.png'; // Replace with your mini-games screenshot

const NotenUndFarbenPage = () => {
  return (
    <div>
      <h1>Noten und Farben Project</h1>

      <h2>API Integration</h2>
      <img src={APIIntegrationScreenshot} alt="API Integration Screenshot" />

      <h2>Tutorial</h2>
      <img src={TutorialScreenshot} alt="Tutorial Screenshot" />

      <h2>Mini Games</h2>
      <img src={MiniGamesScreenshot} alt="Mini Games Screenshot" />
    </div>
  );
};

export default NotenUndFarbenPage;
