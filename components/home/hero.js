import Link from 'next/link'
import React from 'react'
import Animation from './animation'
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          91914224 정석현
          <br className="hidden lg:inline-block" />
          2022년 2학기 웹서버보안프로그래밍 실습 포트폴리오
        </h1>
        <div className="flex justify-center">
          <Link legacyBehavior href="/project">
            <a className="btn-project">프로젝트 보기</a>
          </Link>

          <Link legacyBehavior href="/aboutme">
            <a className="btn-aboutme">프로필보기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}
