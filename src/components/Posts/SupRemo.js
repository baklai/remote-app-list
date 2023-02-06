import React from 'react';

import PostCard from '../PostCard/PostCard';

import imgCardHero from './img/supremo.jpg';
import imgDownload from './img/supremo-download.png';
import imgInstall from './img/supremo-install.png';
import imgRun from './img/supremo-run.png';
import imgUserID from './img/supremo-user-id.png';

function SupRemoCard({ onclick }) {
  return (
    <PostCard
      onclick={onclick}
      image={imgCardHero}
      title="SupRemo"
      comment="Отримуйте доступ до комп’ютерів і серверів і дистанційно керуйте ними або запустіть нараду всього за кілька секунд. Supremo підтримує Supremo Console і UAC-сумісний."
    />
  );
}

function SupRemo() {
  return (
    <article>
      <section className="mb-10">
        <h2 className="font-mono text-6xl text-center tracking-wide mb-10">
          SupRemo
        </h2>
        <p className="text-justify">
          <a
            href="https://www.supremocontrol.com/"
            rel="noreferrer"
            target="_blank"
            className="font-bold hover:text-blue-900"
          >
            SupRemo
          </a>
          <span>
            &nbsp;-&nbsp;це інструмент для віддаленого керування іншим
            комп'ютером, який стане добрим помічником для забезпечення технічної
            підтримки по інтернету, відображення свого екрану іншим користувачам
            і т.д.
          </span>
        </p>
        <h3 className="text-2xl text-center tracking-wide my-10">
          Інструкція з налаштування віддаленого доступу
        </h3>
      </section>

      <section className="mb-10">
        <h4>
          <b>Крок 1</b> - Завантаження портативної версії додатку Supremo
        </h4>
        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
          <p>
            Завантажте портативну версію додатоку зі справки або з&nbsp;
            <span className="underline hover:text-blue-900">
              <a href="https://www.supremocontrol.com/download-supremo/">
                офіційного сайту Supremo.
              </a>
            </span>
          </p>
        </blockquote>
        <p className="mx-auto text-center my-4">
          <a
            className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            href="/docs/Supremo.exe"
            download
          >
            Завантажити Supremo
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
          <b>Крок 2</b> - Запуск Supremo
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
      </section>

      <section className="mb-10">
        <h3>
          <b>Шаг 3</b> - Ваш ID та Пароль
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
          <b>Шаг 4</b> - Зворотній зв'язок
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

export { SupRemo, SupRemoCard };
