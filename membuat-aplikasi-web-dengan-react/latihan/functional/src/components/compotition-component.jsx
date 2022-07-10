

import { createRoot } from 'react-dom/client';
import React from 'react';
// import gambar
import Dicoding from '../public/dicoding.png';

function Button({ link /*Properti*/ }) {
  return <a href={link}>FInd out more</a>;
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="Gambar" />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      {/* Pengkomposisian */}
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle} </p>
    </header>
  );
}

function News() {
  const dataNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN Puschased Casey Neistat's Beme app for $25 Million",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {/*<Card
        title={dataNews[0].title}
        date={dataNews[0].date}
        content={dataNews[0].content}
        image={dataNews[0].image}
        category={dataNews[0].category}
        link={dataNews[0].link}
      />
      <Card
        title={dataNews[1].title}
        date={dataNews[1].date}
        content={dataNews[1].content}
        image={dataNews[1].image}
        category={dataNews[1].category}
        link={dataNews[1].link}
      />
      <Card
        title={dataNews[2].title}
        date={dataNews[2].date}
        content={dataNews[2].content}
        image={dataNews[2].image}
        category={dataNews[2].category}
        link={dataNews[2].link}
      />
      <Card {...dataNews[0]} />
      <Card {...dataNews[1]} />
      <Card {...dataNews[2]} />
*/}
      {dataNews.map((news, key) => (
        <Card {...news} key={key}/>
      ))}
      {/* dengan spread operator */}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<News />);

