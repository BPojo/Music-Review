import React from 'react';
import AlbumCard from './components/AlbumCard';
import './App.css'; 

const App = () => {
  const albums = [
    {
      title: 'Abbey Road',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/2.-The-Beatles-%E2%80%98Abbey-Road-1969-album-art-billboard-1240.jpg?w=768",
      description: 'The Beatles',
      reviewUrl: 'https://www.albumoftheyear.org/album/4091-the-beatles-abbey-road.php'
    },
    {
      title: 'Illmatic',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/15.-Nas-%E2%80%98Illmatic-1994-album-art-billboard-1240.jpg?w=1024",
      description: 'Nas',
      reviewUrl: 'https://www.albumoftheyear.org/album/4128-nas-illmatic.php'
    },
    {
      title: 'The Dark Side of the Moon',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/6.-Pink-Floyd-%E2%80%98Dark-Side-of-the-Moon-1973-album-art-billboard-1240.jpg?w=1024",
      description: 'Pink Floyd',
      reviewUrl: 'https://www.albumoftheyear.org/album/4204-pink-floyd-the-dark-side-of-the-moon.php'
    },
    {
      title: 'Straight Outta Compton',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2023/07/nwa-straight-outta-comption-cover-1988-billboard-1240.jpg?w=1024",
      description: 'N.W.A',
      reviewUrl: 'https://www.albumoftheyear.org/album/6401-nwa-straight-outta-compton.php'
    },
    {
      title: 'Sgt. Peppers Lonely Hearts Club Band',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/11.-The-Beatles-%E2%80%98Sgt.-Peppers-Lonely-Hearts-Club-Band-1967-album-art-billboard-1240.jpg?w=1024",
      description: 'The Beatles',
      reviewUrl: 'https://www.albumoftheyear.org/album/4099-the-beatles-sgt-peppers-lonely-hearts-club-band.php'
    },
    {
      title: 'To Pimp a Butterfly',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/13.-Kendrick-Lamar-To-Pimp-a-Butterfly-2015-album-art-billboard-1240.jpg?w=1024",
      description: 'Kendrick Lamar',
      reviewUrl: 'https://www.albumoftheyear.org/album/29250-kendrick-lamar-to-pimp-a-butterfly.php'
    },
    {
      title: 'Rastaman Vibration',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2023/07/bob-marleythe-wailers-rastaman-vibration-1976-billboard-1240.jpg?w=1024",
      description: 'Bob Marley & the Wailers',
      reviewUrl: 'https://www.albumoftheyear.org/album/12548-bob-marley-and-the-wailers-rastaman-vibration.php'
    },
    {
      title: 'The Low End Theory',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2023/07/a-tribe-called-quest-the-low-end-theory-cover-1991-billboard-1240.jpg?w=1024",
      description: 'A Tribe Called Quest',
      reviewUrl: 'https://www.albumoftheyear.org/album/4130-a-tribe-called-quest-the-low-end-theory.php'
    },
    {
      title: 'The Gambler',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2023/07/kenny-rogers-the-gambler-1978-billboard-1240.jpg?w=1024",
      description: 'Kenny Rogers',
      reviewUrl: 'https://www.albumoftheyear.org/album/67105-kenny-rogers-the-gambler.php'
    },
    {
      title: 'SOS',
      imageUrl: "https://www.billboard.com/wp-content/uploads/2023/07/SZA-SOS-album-art-billboard-1240.jpg?w=1240",
      description: 'SZA',
      reviewUrl: 'https://www.albumoftheyear.org/album/568552-sza-sos.php'
    },
    
  ];

  return (
    <div className="app">
      <div className="piano-header"></div> {/* This div is for the piano image */}
      <header className="header">
        <h1>Album Reviews</h1>
      </header>
      <div className="album-container">
        {albums.map((album, index) => (
          <AlbumCard
            key={index}
            title={album.title}
            imageUrl={album.imageUrl}
            description={album.description}
            reviewUrl={album.reviewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;