import React from 'react';

import PostCard from '../PostCard/PostCard';

import imgCardHero from './img/teamviewer.webp';

function TeamViewerCard({ onclick }) {
  return (
    <PostCard
      onclick={onclick}
      image={imgCardHero}
      title="TeamViewer"
      comment="Це програмне забезпечення для віддаленого доступу, віддаленого керування та віддаленого обслуговування комп'ютерів та інших кінцевих пристроїв."
    />
  );
}

function TeamViewer() {
  return <article></article>;
}

export { TeamViewer, TeamViewerCard };
