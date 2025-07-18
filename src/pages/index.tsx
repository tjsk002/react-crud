import { getBoards } from '@/api/boarad.ts'
import { getNotices } from '@/api/notice.ts'
import Footer from '@/pages/common/footer.tsx'
import Header from '@/pages/common/header.tsx'
import BoardList from '@/pages/service/board/list.tsx'
import NoticeList from '@/pages/service/notice/list.tsx'
import { useQuery } from '@tanstack/react-query'

export default function Index() {
    const { data: boardData } = useQuery({
        queryKey: ['boards'],
        queryFn: () => getBoards(),
    })

    const { data: noticeData } = useQuery({
        queryKey: ['notices'],
        queryFn: () => getNotices(),
    })

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="pt-28 px-40 flex-grow flex flex-row">
                <section className="mb-12 w-2/3 pr-8">
                    <h1 className="text-xl font-semibold text-gray-800 mb-8">인기 게시물</h1>
                    <BoardList boardList={boardData?.list} />
                </section>
                <section className="mb-12 w-1/3 pr-8">
                    <h1 className="text-xl font-semibold text-gray-800 mb-8">공지 사항</h1>
                    <NoticeList noticeList={noticeData?.list}></NoticeList>
                </section>
            </main>
            <Footer />
        </div>
    )
}
