import React from 'react';

import PostCard from '../PostCard/PostCard';

import imgCardHero from './img/anydesk.webp';
import imgDownload from './img/anydesk-download.webp';
import imgInstall from './img/anydesk-install.webp';
import imgRun from './img/anydesk-run.webp';
import imgExit from './img/anydesk-exit.webp';
import imgUserID from './img/anydesk-user-id.webp';

function AnyDeskCard({ onclick }) {
  return (
    <PostCard
      onclick={onclick}
      image={imgCardHero}
      title="AnyDesk"
      comment="Це програма для віддаленого робочого столу, незалежно від платформи віддалений доступ до персональних комп'ютерів та інших пристроїв."
    />
  );
}

function AnyDesk() {
  return (
    <article>
      <section className="mb-10">
        <h2 className="font-mono text-6xl text-center tracking-wide mb-10">
          AnyDesk
        </h2>
        <p className="text-justify">
          <a
            href="https://anydesk.com/"
            rel="noreferrer"
            target="_blank"
            className="font-bold hover:text-blue-900"
          >
            AnyDesk
          </a>
          <span>
            &nbsp;-&nbsp;це програма для віддаленого робочого столу, незалежно
            від платформи віддалений доступ до персональних комп'ютерів та інших
            пристроїв.
          </span>
        </p>
        <h3 className="text-2xl text-center tracking-wide my-10">
          Інструкція з налаштування віддаленого доступу
        </h3>
      </section>

      <section className="mb-10">
        <h4>
          <b>Крок 1</b> - Завантаження портативної версії додатку AnyDesk
        </h4>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>
            Завантажте портативну версію додатоку зі справки або з&nbsp;
            <span className="underline hover:text-blue-900">
              <a href="https://anydesk.com/en/downloads/windows/">
                офіційного сайту AnyDesk.
              </a>
            </span>
          </p>
        </blockquote>
        <p className="mx-auto text-center my-4">
          <a
            className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            href="/docs/AnyDesk.exe"
            download
          >
            Завантажити AnyDesk
          </a>
        </p>

        <img
          className="mx-auto my-2"
          width="600"
          src={imgDownload}
          alt="Download print scrn"
        />
        <p className="text-center italic text-base">Перший запуск програми</p>
      </section>

      <section className="mb-10">
        <h4>
          <b>Крок 2</b> - Запуск AnyDesk
        </h4>

        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>
            Додаток не вимагає установки в систему і відразу готовий до
            використання. При цьому не потрібно налаштовувати фаєрвол або
            роутер.
          </p>
        </blockquote>

        <img
          className="mx-auto my-2"
          width="600"
          src={imgInstall}
          alt="Install print scrn"
        />
        <p className="text-center italic text-base">
          Запуск програми без встановлення
        </p>
      </section>

      <section className="mb-10">
        <h3>
          <b>Крок 3</b> - Перший запуск програми
        </h3>

        <img
          className="mx-auto my-2"
          width="600"
          src={imgRun}
          alt="Run print scrn"
        />
        <p className="text-center italic text-base">Перший запуск програми</p>
        <img
          className="mx-auto my-2"
          width="600"
          src={imgExit}
          alt="Exit print scrn"
        />
        <p className="text-center italic text-base">
          Вихід з додатку (відмова від встановлення)
        </p>
      </section>

      <section className="mb-10">
        <h3>
          <b>Крок 4</b> - Ваш ID
        </h3>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>ID для віддаленого підключення</p>
          <p>Після запуску програми вам буде наданий якийсь ID.</p>
        </blockquote>
        <img
          className="mx-auto my-2"
          width="600"
          src={imgUserID}
          alt="User id print scrn"
        />
        <p className="text-center italic text-base">Перший запуск програми</p>
      </section>

      <section className="mb-10">
        <h3>
          <b>Крок 5</b> - Зворотній зв'язок
        </h3>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>Дзвінок на техпідтримку</p>
          <h5>
            • Запустивши програму та отримавши <strong>ID</strong>&nbsp;
            зв'яжіться зі співробітниками відділу техпідтримки. <br /> <br />•
            Повідомивши Ваш ID співробітник техпідтримки отримає віддалений
            доступ до Вашого ПК.
          </h5>
        </blockquote>
      </section>
    </article>
  );
}

export { AnyDesk, AnyDeskCard };
