import React from 'react';

import PostCard from '../PostCard/PostCard';

import imgCardHero from './img/anydesk.jpg';

function AnyDeskCard({ onclick }) {
  return (
    <PostCard
      onclick={onclick}
      image={imgCardHero}
      title="AnyDesk"
      comment="Це програма для віддаленого робочого столу, незалежна від платформи віддалений доступ до персональних комп'ютерів та інших пристроїв."
    />
  );
}

function AnyDesk() {
  return <article></article>;
}

export { AnyDesk, AnyDeskCard };
