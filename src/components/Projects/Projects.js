import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import tindog from "../../Assets/Projects/tindog.png";
import aquarun from "../../Assets/Projects/aquarun.png";
import drumkit from "../../Assets/Projects/drumkit.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import dicegame from "../../Assets/Projects/dicegame.png";
import countdowntimer from "../../Assets/Projects/countdowntimer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="A Spotify clone that features 10 different songs, has the features to play, pause, seek, forward and rewind the song, anytime, anywhere."
              ghLink="https://github.com/kanishkk19/SpotifyClone"
              demoLink="https://kanishkk19.github.io/SpotifyClone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="TinDog"
              description="Start up landing page for a fictional application named TinDog. TinDog allows the user to find other dogs & their owners nearby in the swipe left/right style made famous by Tinder."
              ghLink="https://github.com/kanishkk19/TinDog"
              demoLink="https://kanishkk19.github.io/TinDog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aquarun}
              isBlog={false}
              title="Aqua Run"
              description="An underwater themed game where one is supposed to collect fishes to get points and dodge the obstacles to lose points within a limited amount of time, accompanied by sound effects and themed music."
              ghLink="https://github.com/kanishkk19/Aqua-Run"
              demoLink="https://nitish2101.itch.io/aqua-run"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Drum Kit"
              description="An interactive Drum Kit Project which uses javaScript Event Listener and allows you to play the sounds of all the components of a Drum either by a click or  particular keyboard key press. 🎵"
              ghLink="https://github.com/kanishkk19/DrumKit"
              demoLink="https://kanishkk19.github.io/DrumKit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A TicTacToe mini project that allows 2 users to play the game, reset the board and declares a winner when someone wins, accompanied by a gaming background music."
              ghLink="https://github.com/kanishkk19/TicTacToe"
              demoLink="https://kanishkk19.github.io/TicTacToe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicegame}
              isBlog={false}
              title="Dice"
              description="Created an interactive dice game website that prompts user to enter 2 name inputs, randomly assigns them a dice value each, displays their number and dice images, compares and declares results."
              ghLink="https://github.com/kanishkk19/DiceGame"
              demoLink="https://kanishkk19.github.io/DiceGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countdowntimer}
              isBlog={false}
              title="Countdown Timer"
              description="Interactive website that prompts the user to enter a date and proceeds to show the countdown in terms of days, hours, minutes and seconds till that particular date."
              ghLink="https://github.com/kanishkk19/CountdownTimer"
              demoLink="https://kanishkk19.github.io/CountdownTimer/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
