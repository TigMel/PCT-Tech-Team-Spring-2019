import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <h1>PCT Tech Team Spring 2019 Website</h1>
          <h4>Resources</h4>
          <ul>
              <li><a href={'https://github.com/ChiragAswani/PCT-Tech-Team-Spring-2019'}>Team Resources</a></li>
              <li><a href={'https://drive.google.com/drive/u/0/folders/0AN-dML6F20W8Uk9PVA'}>Google Drive</a></li>
              <li><a href={'https://sneakytime.com/rr/#.XE4res9Kgxc'}>Project Repository</a></li>
          </ul>
          <h4>Team</h4>
          <ul>
              <li>Chirag Aswani</li>
              <li>Jason Cho</li>
              <li>Tyler Donati</li>
              <li>Jin-Young Bang</li>
              <li>Ji Weiqi</li>
              <li>Jennifer Roh</li>
              <li>Randy Richardson</li>
              <li>Justin Ching</li>
          </ul>
          <h4>Trello Board</h4>
          <blockquote className="trello-board-compact">
              <a href="https://trello.com/b/OojRjvjP/pct-tech-team-spring-2019">Trello Board</a>
          </blockquote>
          <h2>The Fun Stuff!</h2>
          <table>
              <tr bgcolor="#0000ff" className="White">
                  <td width="3%" bgcolor="#0066FF">
                      <div align="center"><strong>Meeting Agenda </strong></div>
                  </td>
                  <td width="7%" bgcolor="#0066FF">
                      <div align="center"><b>Homework Due</b></div>
                  </td>
              </tr>
              <tr>
                  <td>
                      <h4>Meeting #1</h4>
                      <ul>
                          <li>Introduction to GitHub</li>
                          <li>Project Proposals</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>
                      <h4>Meeting #2 @8:00pm CAS</h4>
                      <ul>
                          <li>Decide on what project to build</li>
                          <li>Lets Build an API! (each build a route on flask, use github to commit together)</li>
                      </ul>
                  </td>
                  <td>
                      <h4>Identify problems that need to be solved!</h4>
                      <p>Examples</p>
                      <ul>
                          <li>Why does it take me 8 alarms to wake up?</li>
                          <li>Why is the BU shuttle never accurate</li>
                          <li>Ugh! I can't find the right song to play</li>
                          <li>etc...</li>
                      </ul>
                      <p>How to go about this process</p>
                      <ul>
                          <li>My recommendation is to write down everything that frustrates you</li>
                          <li><a href={'https://www.youtube.com/watch?v=9ArIwn4yImY'}>How do you find a problem worth solving?</a></li>
                          <li><a href={'https://www.youtube.com/watch?v=xXMQGBhaync'}>How to Identify and Solve Problems</a></li>
                      </ul>
                      <h4>Install these...</h4>
                      <ul>
                          <li><a href={'https://www.getpostman.com/downloads/'}>Postman</a></li>
                          <li>Python</li>
                          <li><a href={'https://www.jetbrains.com/student/'}>Pycharm - Student Edition</a></li>
                          <li><a href={'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'}>Git Command Tools</a></li>
                      </ul>
                  </td>
              </tr>
          </table>
      </div>
    );
  }
}

export default App;
