import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function project() {
  return (
    <Layout>
      <title>PROJECT</title>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  NEXTJS_TEST
                </h1>
                <p className="leading-relaxed mb-3">
                  nextjs의 기초적인 기능을 배움
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/jeongseockhyeon/nextjs"
                >
                  <a className="text-indigo-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://nextjs-tawny-nu-53.vercel.app/"
                >
                  <a className="text-indigo-500 inline-flex items-center">
                    VERCEL
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  NEXTJS_SHOP
                </h1>
                <p className="leading-relaxed mb-3">
                  nextjs를 이용해 쇼핑몰 예제를 실습함
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/jeongseockhyeon/nextshop"
                >
                  <a className="text-indigo-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <Link legacyBehavior href="https://nextshop-delta.vercel.app">
                  <a className="text-indigo-500 inline-flex items-center">
                    VERCEL
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  팀프로젝트
                </h1>
                <p className="leading-relaxed mb-3">
                  Nextjs와 TailwindCSS를 이용해 중고거래 사이트를 구현
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/jeongseockhyeon/JBmarket"
                >
                  <a className="text-indigo-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <Link legacyBehavior href="https://j-bmarket.vercel.app">
                  <a className="text-indigo-500 inline-flex items-center">
                    VERCEL
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  MERN
                </h1>
                <p className="leading-relaxed mb-3">
                  mern의 작동 방식과 구조를 배움
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/jeongseockhyeon/mern"
                >
                  <a className="text-indigo-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
