import Link from "next/link";

const IndexPage = () => (
  <>
    <section className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <header className='mb-4 flex items-center justify-between py-4 md:py-8'>
          {/* logo - start */}
          <a
            href='/'
            className='text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-2xl py-2'
            aria-label='logo'>
              <figure className='h-6 md:h-8'>
                <img
                  src='/img/logo_horizontal.svg'
                  loading='lazy'
                  alt='logo'
                  className='w-full h-full object-cover object-center'
                />
              </figure>
            {/* NYAN CO. */}
          </a>
          {/* logo - end */}
          {/* nav - start */}
          {/* <nav className='hidden gap-12 lg:flex'>
            <a href='#' className='text-lg font-semibold text-indigo-500'>
              Home
            </a>
            <a
              href='#'
              className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'>
              Features
            </a>
            <a
              href='#'
              className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'>
              Pricing
            </a>
            <a
              href='#'
              className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'>
              About
            </a>
          </nav> */}
          {/* nav - end */}
          {/* buttons - start */}
          {/* <a
            href='#'
            className='hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block'>
            Contact Sales
          </a> */}
          {/* <button
            type='button'
            className='inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
            Menu
          </button> */}
          {/* buttons - end */}
        </header>
        <section className='flex flex-col-reverse justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row'>
          {/* content - start */}
          <div className='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-24'>
            {/* <p className='mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl'>
              Very proud to introduce
            </p> */}
            <h1 className='text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-5xl text-center lg:text-left'>
              猫の手、貸します。
            </h1>
            <p className='mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg'>
              Webサイト・ECサイト・スマートフォンアプリの受託開発、技術コンサルティング、Webマーケティングを行う東京・五反田の合同会社です。
            </p>
            <div className='flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start'>
              <a
                href='mailto:info@nyan.co.jp'
                className='inline-block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:bg-gray-700 md:text-base'>
                今すぐ相談
              </a>
              {/* <a
                href='#'
                className='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'>
                Take tour
              </a> */}
            </div>
          </div>
          {/* content - end */}
          {/* image - start */}
          <div className='h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-6/12'>
            <img
              src='/img/hero.jpg'
              loading='lazy'
              alt='hero'
              className='h-full w-full object-cover object-center'
            />
          </div>
          {/* image - end */}
        </section>
      </div>
    </section>
    <section className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        {/* text - start */}
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            事業内容
          </h2>
          <p className='mx-auto max-w-screen-xl text-center text-gray-500 md:text-lg'>
            弊社の受託開発事業ではお客様のニーズに合わせ、モバイルアプリ開発、ホームページ制作、ECサイト開発、CRM開発、マーケティング、デザインなど幅広いサービスを展開しております。
            <br />
            要件定義から設計、開発までの一気通貫での対応が可能です。お客様のビジネスを効果的にサポートし、最適なソリューションを実現いたします。
          </p>
        </div>
        {/* text - end */}
        <div className='grid gap-6 sm:grid-cols-2'>
          {/* product - start */}
          <div
            // href='#'
            className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'>
            <img
              src='/img/engineering.jpg'
              loading='lazy'
              alt='Engineer'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200'
              // group-hover:scale-110'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50' />
            <div className='relative flex flex-col'>
              <span className='text-gray-300'>Dev &amp; Design</span>
              <span className='text-lg font-semibold text-white lg:text-xl'>
                制作事業
              </span>
            </div>
          </div>
          {/* product - end */}
          {/* product - start */}
          <div className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'>
            <img
              src='/img/restaurant.png'
              loading='lazy'
              alt='Restaurant'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200'
              //  group-hover:scale-110'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50' />
            <div className='relative flex flex-col'>
              <span className='text-gray-300'>Restaurant</span>
              <span className='text-lg font-semibold text-white lg:text-xl'>
                飲食事業
              </span>
            </div>
          </div>
          {/* product - end */}
        </div>
      </div>
    </section>
    <section className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        {/* text - start */}
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            事業概要資料
          </h2>
        </div>
        {/* text - end */}
        <div className='flex flex-col items-center justify-center'>
          <iframe
            // width='800'
            // height='450'
            src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Folp9WFu4pBsj463wJTlqEv%2F%25E4%25BA%258B%25E6%25A5%25AD%25E6%25A1%2588%25E5%2586%2585%3Ftype%3Ddesign%26node-id%3D2461-4%26scaling%3Dscale-down%26page-id%3D2461%253A3%26mode%3Ddesign'
            allowFullScreen
            className='w-full h-[450px] md:h-[600px] lg:h-[800px]'
          />
        </div>
      </div>
    </section>
    <section className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12'>
          <div className='flex items-center gap-12'>
            <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
              制作実績
            </h2>
            <p className='hidden max-w-screen-sm text-gray-500 md:block'>
              お客様のビジネスを効果的にサポートし、最適なソリューションを実現いたします。
              <br />
              代表的な制作実績をご紹介いたします。
            </p>
          </div>
          {/* <a
            href='#'
            className='inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base'>
            More
          </a> */}
        </div>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
          {/* image - start */}
          <a
            href='#'
            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'>
            <img
              src='/img/works/ikasa.png'
              loading='lazy'
              alt='Ikasa'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50' />
            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              アイカサ
            </span>
          </a>

          <a
            href='#'
            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'>
            <img
              src='/img/works/kajinon.png'
              loading='lazy'
              alt='Photo by Magicle'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50' />
            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              カジノン株式会社
            </span>
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href='#'
            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'>
            <img
              src='/img/works/toiteic.png'
              loading='lazy'
              alt='Toiteic'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50' />
            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              トイテイク
            </span>
          </a>
          {/* image - end */}
          {/* image - start */}
          <a
            href='#'
            className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'>
            <img
              src='/img/works/sesay.png'
              loading='lazy'
              alt='sesay'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50' />
            <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
              Sesay
            </span>
          </a>
          {/* image - end */}
        </div>
      </div>
    </section>
    <section className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            会社概要
          </h2>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
          <div>
            <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.235306432447!2d139.7190626!3d35.6219252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ae59ebd08f7%3A0xb3823d02815d1d!2z44CSMTQxLTAwMzEg5p2x5Lqs6YO95ZOB5bed5Yy66KW_5LqU5Y-N55Sw77yX5LiB55uu77yS77yS4oiS77yR77yXIFRPQ-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1687543323685!5m2!1sja!2sjp'
                allowFullScreen
                loading='lazy'
                className='w-full md:h-[600px] h-[400px]'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
          <div className='text-center md:text-left'>
            {/* <p className='text-center font-bold text-indigo-500 md:text-left'>
              Who we are
            </p> */}
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-3 md:text-left'>
              会社名
            </h2>
            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>
              にゃーん合同会社
              <small className='text-gray-500'>(英名: NYAN CO.)</small>
            </p>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-3 md:text-left'>
              法人番号
            </h2>
            <a
              className=' underline hover:text-gray-700'
              href='https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=2010703006489'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>
                2010703006489
              </p>
            </a>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-3 md:text-left'>
              住所
            </h2>
            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>
              〒141-0031
              <br />
              東京都品川区西五反田7丁目22 TOCビル 12F-51号室
            </p>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-3 md:text-left'>
              お問い合わせ先
            </h2>
            <a
              className=' underline hover:text-gray-700'
              href='mailto:info@nyan.co.jp'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='mb-2 text-gray-500 sm:text-lg'>
                <span className='text-gray-500'>メール: </span>
                info@nyan.co.jp
              </p>
            </a>
            <a
              className='underline hover:text-gray-700'
              href='tel:05017432270'
              target='_blank'
              rel='noopener noreferrer'>
              <p className='mb-6 text-gray-500 sm:text-lg md:mb-8 '>
                <span className='text-gray-500'>電話: </span>
                050-1743-2270
              </p>
            </a>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-3 md:text-left'>
              資本金
            </h2>
            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>1,000,000円</p>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-white pt-4 sm:pt-10 lg:pt-12'>
      <footer className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col items-center border-t pt-6'>
          {/* nav - start */}
          {/* <nav className='mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6'>
            <a
              href='#'
              className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'>
              About
            </a>
            <a
              href='#'
              className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'>
              Investor Relations
            </a>
            <a
              href='#'
              className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'>
              Jobs
            </a>
            <a
              href='#'
              className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'>
              Press
            </a>
            <a
              href='#'
              className='text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600'>
              Blog
            </a>
          </nav> */}
          {/* nav - end */}
          {/* social - start */}
          {/* <div className='flex gap-4'>
            <a
              href='#'
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
              <svg
                className='h-5 w-5'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
            <a
              href='#'
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
              <svg
                className='h-5 w-5'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
              </svg>
            </a>
            <a
              href='#'
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
              <svg
                className='h-5 w-5'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </a>
            <a
              href='#'
              target='_blank'
              className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'>
              <svg
                className='h-5 w-5'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
          </div> */}
          {/* social - end */}
        </div>
        <div className='py-8 text-center text-sm text-gray-400'>
          © {
            new Date().getFullYear()
          } - NYAN CO., 
        </div>
      </footer>
    </section>
  </>
);

export default IndexPage;
