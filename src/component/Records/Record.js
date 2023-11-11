import React from "react";
import "./Record.css";
import like from "../profile/link.jpeg";

const jsonData = [
  {
    heading: "A Changing World Order",
    subheading:
      "The world is changing at a feverish pace. Friends, colleagues, and everyone engaged in knowledge work are beginning to sense this, including",

    navTitle1: "musing",
    navTitle2: "by anujgosalia",
    date: "August",
    time: "2",
    dot: ".",
    year: 2021,
    duration: "2M",
    readTime: "min Read",
    views: "102 Views",
  },
  {
    heading: "Indian VIS Australia",
    subheading:
      "Think about it - this cricket series was akin to therapy.Laying our childhood trauma up top, working with it slowly and surely over two m...",
    navTitle1: "musing",
    navTitle2: "by anujgosalia",
    date: "January",
    time: "21",
    dot: ".",
    year: 2021,
    duration: "1M",
    readTime: "min Read",
    views: "156 Views",
    footer: [],
  },
  {
    heading: "Write To Build",
    subheading:
      "Build Your Write-Ups is effectively developed to help readers improve their writing techniques, vocabulary and communication. The book is designed in a way that makes it convenient for the readers to upgrade their writing skills. ",
    navTitle1: "musing",
    navTitle2: "by anujgosalia",
    date: "March",
    time: "18",
    dot: ".",
    year: 2018,
    duration: "21M",
    readTime: "min Read",
    views: "156 Views",
  },
];

function Record() {
  return (
    <div>
      <div className="divider">
        <p className="post">134 Posts</p>
      </div>
      <div className="container">
        {jsonData.map((item, index) => (
          <div key={index}>
            <div className="content-container">
              <p>{item.heading}</p>
              <img src={like} alt="" className="likeIn" />
            </div>
            <p className="subheading">{item.subheading}</p>
            <div className="parent-container">
              <div className="navdiv">
                <p className="p1">{item.navTitle1}</p>
                <p className="p2">{item.navTitle2} </p>
              </div>
              <div>
                <span>
                  <p className="p3">
                    &nbsp;&nbsp;&nbsp;{item.date} {item.time} {item.dot}{" "}
                    {item.readTime} {item.dot} {item.views}
                  </p>
                </span>
              </div>
            </div>
            <hr className="hr"/>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Record;
