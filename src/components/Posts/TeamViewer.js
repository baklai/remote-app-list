import React from 'react';

import PostCard from '../PostCard/PostCard';

import imgCardHero from './img/teamviewer.webp';
import imgDownload from './img/teamviewer-download.webp';
import imgInstall from './img/teamviewer-install.webp';
import imgInstallStart from './img/teamviewer-install-start.webp';
import imgInstallLicense from './img/teamviewer-install-license.webp';
import imgRun from './img/teamviewer-run.webp';
import imgUserID from './img/teamviewer-user-id.webp';

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
  return (
    <article>
      <section className="mb-10">
        <h2 className="font-mono text-6xl text-center tracking-wide mb-10">
          TeamViewer
        </h2>
        <p className="text-justify">
          <a
            href="https://www.teamviewer.com/"
            rel="noreferrer"
            target="_blank"
            className="font-bold hover:text-blue-900"
          >
            TeamViewer
          </a>
          <span>
            &nbsp;-&nbsp;це програмне забезпечення для віддаленого доступу,
            віддаленого керування та віддаленого обслуговування комп'ютерів та
            інших кінцевих пристроїв.
          </span>
        </p>
        <h3 className="text-2xl text-center tracking-wide my-10">
          Інструкція з налаштування віддаленого доступу
        </h3>
      </section>

      <section className="mb-10">
        <h4>
          <b>Крок 1</b> - Завантаження портативної версії TeamViewer
        </h4>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>
            Завантажте портативний додаток зі справки або з&nbsp;
            <span className="underline hover:text-blue-900">
              <a href="https://www.teamviewer.com/en/download/windows/">
                офіційного сайту TeamViewer.
              </a>
            </span>
          </p>
        </blockquote>
        <p className="mx-auto text-center my-4">
          <a
            className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            href="/docs/TeamViewerPortable.zip"
            download
          >
            Завантажити TeamViewer
          </a>
        </p>

        <img
          className="mx-auto my-2"
          width="400"
          src={imgDownload}
          alt="Download print scrn"
        />
        <p className="text-center italic text-base">
          Завантаження портативної версії додатоку
        </p>
      </section>

      <section className="mb-10">
        <h4>
          <b>Крок 2</b> - Запуск TeamViewer
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
          Розпакування додатку з архіву до каталогу TeamViewerPortable
        </p>
        <img
          className="mx-auto my-2"
          width="600"
          src={imgInstallStart}
          alt="Install print scrn"
        />
        <p className="text-center italic text-base">
          Запуск програми без встановлення
        </p>
        <img
          className="mx-auto my-2"
          width="600"
          src={imgInstallLicense}
          alt="Install print scrn"
        />
        <p className="text-center italic text-base">Ліцензійна угода</p>
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
      </section>

      <section className="mb-10">
        <h3>
          <b>Крок 4</b> - Ваш ID та Пароль
        </h3>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>ID та Пароль для віддаленого підключення</p>
          <p>
            Після запуску програми вам буде наданий якийсь ID і виданий пароль.
          </p>
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
            • Запустивши програму та отримавши <strong>ВАШ ID</strong> та
            <strong> ПАРОЛЬ</strong> зв'яжіться зі співробітниками відділу
            техпідтримки. <br /> <br />• Повідомивши Ваш ID та Пароль
            співробітник техпідтримки отримає віддалений доступ до Вашого ПК.
          </h5>
        </blockquote>
      </section>
    </article>
  );
}

export { TeamViewer, TeamViewerCard };
